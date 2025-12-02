// app/page.tsx (or wherever your LandingPage lives)
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { WatchDemoDialog } from "@/components/marketing/WatchDemoDialog";
import { WaitlistSection } from "@/components/marketing/WaitlistSection";
import { WaitlistPricing } from "@/components/marketing/WaitlistPricing";



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <WaitlistSection />
      <WaitlistPricing />

      {/* …keep Features, ScreenshotShowcase, CTA, Footer, etc. */}
    </div>
  );
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Brand */}
         <Link href="/" className="flex items-center gap-2 md:gap-3 font-semibold">
          {/* Logo: increase size by changing h-12 / md:h-14 */}
          <img
            src="/logo-sq-dark.svg"
            alt="SynthQA Logo"
            className="hidden dark:block h-50 md:h-50 w-auto"
          />
          <img
            src="/logo-sq-light.svg"
            alt="SynthQA Logo"
            className="block dark:hidden h-40 md:h-40 w-auto"
          />
        
        </Link>


        {/* Nav links */}
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="#features" className="hover:text-foreground">
            Features
          </Link>
          <Link href="#demo" className="hover:text-foreground">
            Demo
          </Link>
          <Link href="#pricing" className="hover:text-foreground">
            Pricing
          </Link>
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-2">
         
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* soft gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-30%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:py-20 lg:flex-row lg:items-center lg:py-24">
        {/* Left: copy + CTAs */}
        <div className="max-w-xl space-y-5">
          <Badge className="w-fit">AI-powered test case generation</Badge>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Turn requirements into{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              ready-to-run test suites
            </span>{" "}
            in seconds.
          </h1>

          <p className="text-balance text-base text-muted-foreground sm:text-lg">
            SynthQA uses OpenAI & Anthropic to generate full, cross-platform test
            cases — with steps, inputs, and assertions — so you can spend less time
            writing tests and more time shipping.
          </p>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              API, web, and mobile coverage in one workspace
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Adjustable coverage, edge cases, and negative paths
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Export to CSV, Jira, or your runner
            </li>
          </ul>

          {/* Primary CTAs */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="#waitlist" className="inline-flex items-center gap-2">
                Join early access
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <WatchDemoDialog>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="inline-flex items-center gap-2"
              >
                <Play className="h-6 w-6" />
                Watch Demo
              </Button>
            </WatchDemoDialog>
          </div>

          <p className="text-xs text-muted-foreground">
            No spam. We’ll email you when your spot is ready.
          </p>
        </div>

        {/* Right: fake UI/screenshot area 
        <div
          id="demo"
          className="flex flex-1 items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-xl rounded-2xl border bg-card/80 p-3 shadow-lg">
            <div className="mb-3 flex items-center gap-2 px-1 text-xs text-muted-foreground">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="ml-2 text-[11px] uppercase tracking-wide">
                Test Case Generator
              </span>
            </div>
            */}

            {/* Replace this Image with your screen grab later 
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border bg-muted/40">
              <Image
                src="/screens/generator-light.png"
                alt="SynthQA generator"
                fill
                className="hidden object-cover dark:hidden"
              />
              <Image
                src="/screens/generator-dark.png"
                alt="SynthQA generator"
                fill
                className="hidden object-cover dark:block"
              />
              
              
            </div>
          </div>
        </div>
                    */}

      </div>
    </section>
  );
}
