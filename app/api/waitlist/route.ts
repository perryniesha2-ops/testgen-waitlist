// app/api/waitlist/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server"; 

const resend = new Resend(process.env.RESEND_API_KEY);

const waitlistSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  email: z.string().email("Invalid email address"),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = waitlistSchema.safeParse(json);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message ?? "Invalid form submission";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { fullName, role, email } = parsed.data;

    const supabase = await createClient();

    const { error } = await supabase.from("waitlist").insert({
      full_name: fullName,
      role,
      email,
    });

    if (error) {
      // handle duplicate email nicely (unique constraint)
      if ((error).code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist." },
          { status: 409 }
        );
      }

      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to add you to the waitlist." },
        { status: 500 }
      );
    }

    // 🔔 send confirmation email (Resend)
    if (process.env.RESEND_API_KEY && process.env.WAITLIST_FROM_EMAIL) {
      try {
        await resend.emails.send({
          from: process.env.WAITLIST_FROM_EMAIL,
          to: email,
          subject: "You’re on the SynthQA waitlist ✅",
          html: `
            <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 16px;">
              <h2>Hi ${fullName || "there"},</h2>
              <p>Thanks for joining the <strong>SynthQA</strong> waitlist.</p>
              <p>As we get closer to launch, we’ll send you early access invites, updates, and a few sneak peeks.</p>
              <p style="margin-top: 24px;">– The SynthQA team</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Resend email error:", emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
