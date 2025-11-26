"use client";

import Link from "next/link";
import { Check, ArrowRight, Sparkles, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function WaitlistPricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-5xl px-4 py-16 sm:py-20"
    >
      {/* Section header */}
      <div className="mb-10 text-center">
        <Badge variant="secondary" className="mb-3">
          Early access pricing
        </Badge>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Discounted price for the first&nbsp;50 users
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Lock in founding pricing now. No credit card to join the waitlist —
          you only pay if you decide to upgrade once we launch.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Free / Beta plan */}
        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Beta Access</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                  Perfect if you just want to try SynthQA while we’re in beta.
                </p>
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                Beta
              </Badge>
            </div>

            <div className="mt-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Free while we’re in beta. Fair use limits apply.
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <Feature>AI-generated test cases with guardrails</Feature>
              <Feature>Manual test case management</Feature>
              <Feature>Basic test execution tracking</Feature>
              <Feature>Access to OpenAI & Anthropic powered flows</Feature>
              <Feature>Priority for feedback & roadmap influence</Feature>
            </ul>

            <Button asChild className="w-full mt-4" variant="outline">
              <Link href="#waitlist" className="inline-flex items-center justify-center gap-2">
                Join waitlist
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Founding 50 plan */}
        <Card className="relative border-primary/60 shadow-md shadow-primary/10">
          <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
            <Badge className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Founding 50
            </Badge>
          </div>

          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Pro — Founding 50</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                  Lifetime discount for the first 50 teams that upgrade from the waitlist.
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">$12</span>
                <span className="text-sm text-muted-foreground">/user /month</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="line-through opacity-70">$29</span>
                <span>founding discount, locked in forever</span>
              </div>
              <p className="text-xs text-primary mt-1">
                Only 50 slots. Pricing never increases for these accounts.
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <Feature>Higher AI limits & faster generation</Feature>
              <Feature>Cross-platform suites (web, API, mobile)</Feature>
              <Feature>Export to CSV, Jira and test runners</Feature>
              <Feature>Team collaboration & shared workspaces</Feature>
              <Feature>Priority support & roadmap input</Feature>
            </ul>

            <Button asChild className="w-full mt-4">
              <Link href="#waitlist" className="inline-flex items-center justify-center gap-2">
                Reserve founding spot
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <p className="mt-2 text-[11px] text-muted-foreground">
              We’ll email you before we go live. You can decide then if you still want
              the Pro plan — no charge until you confirm.
            </p>
            
          </CardContent>
        </Card>
      </div>
    </section>




  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 h-4 w-4 text-primary shrink-0" />
      <span>{children}</span>
    </li>
  );
}
