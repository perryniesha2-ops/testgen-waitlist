import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/client" 


export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const { email, role, useCase } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const supabase = createClient()

    const { error } = await supabase
      .from("waitlist")
      .insert({
        email,
        role: role || null,
        use_case: useCase || null,
      })

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Could not save signup" },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
  }
}
