"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";


export function WaitlistSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [useCase, setUseCase] = useState("");


  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, role, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Friendly error handling
        if (res.status === 409) {
          setErrorMessage("This email is already on the waitlist.");
        } else if (data.error) {
          setErrorMessage(data.error);
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
        return;
      }

      // Success
      setSuccessMessage("You're on the waitlist! Check your email for confirmation.");
      setFullName("");
      setEmail("");
      setRole("");

    } catch (err) {
      // Friendly fallback — no console logs
      setErrorMessage("Unable to submit right now. Please try again shortly.");
    } finally {
      setSubmitting(false);
    }
  }

  const disabled = submitting || !fullName || !email;

  return (
    <section id="waitlist" className="mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-2xl border bg-card p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Get early access to SynthQA
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          Join QA engineers, SDETs, and founders testing the AI generator before launch.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Alex Rivera"
              autoComplete="name"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="role">Your role (optional)</Label>
              <Input
                id="role"
                placeholder="QA engineer, SDET, founder..."
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            <div className="space-y-2 sm:col-span-1">
              <Label htmlFor="email">Email *</Label>
              <Input
                required
                id="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="useCase">
              What would you use SynthQA for? (optional)
            </Label>
            <Textarea
              id="useCase"
              placeholder="E.g. generating regression suites for our web app, smoke tests for mobile releases..."
              rows={3}
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
            />
          </div>

          {/* Friendly error message */}
          {errorMessage && (
            <div className="rounded-md bg-red-50 text-red-700 text-sm px-3 py-2 border border-red-200">
              {errorMessage}
            </div>
          )}

          {/* Friendly success message */}
          {successMessage && (
            <div className="rounded-md bg-green-50 text-green-700 text-sm px-3 py-2 border border-green-200">
              {successMessage}
            </div>
          )}

          <Button
            type="submit"
            disabled={disabled}
            className={cn(
              "mt-2 w-full bg-blue-800 text-slate-50 hover:bg-cyan-400",
              submitting && "opacity-80"
            )}
          >
            {submitting ? "Adding you to the list..." : "Join the waitlist"}
          </Button>

          <p className="mt-2 text-xs text-muted-foreground">
            No spam — only early access updates.
          </p>
        </form>
      </div>
    </section>
  );
}
