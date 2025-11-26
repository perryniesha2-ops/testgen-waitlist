"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, Sparkles,
  CheckCircle,
  Zap,
  Target,
  BarChart3,
  Users,
  Globe,
   Check,
  Rocket,
  TrendingUp,
  Shield,
  Code,
  TestTube2,
  Brain,
  Clock,
  DollarSign,
  MessageSquare,
  Star, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { WatchDemo } from "@/components/marketing/WatchDemo";
import { WaitlistPricing } from "@/components/marketing/WaitlistPricing";
import { toast } from "sonner"





export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [useCase, setUseCase] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setStatusMessage("");

    if (!email.trim()) {
      toast.error("Please enter a valid email address")
      return;
    }

    // very simple email check
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!isEmailValid) {
      toast.error("Please enter a valid email address")
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          role: role.trim() || null,
          useCase: useCase.trim() || null,
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(json?.error || "Something went wrong. Please try again.");
      }

           toast.success("🎉 You're on the list!", {
        description: "We'll notify you when we launch!",
      })
      setEmail("");
      setRole("");
      setUseCase("");
    } catch (err) {
      setStatus("error");
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 text-foreground">
      {/* simple top nav */}
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <img
              src="/logo-sq-dark.svg"
              alt="SynthQA Logo"
            className="hidden dark:block h-12 md:h-14 w-auto"
            />
            <img
              src="/logo-sq-light.svg"
              alt="SynthQA Logo"
            className="block dark:hidden h-12 md:h-14 w-auto"
            />
            <span className="hidden text-lg font-bold tracking-tight lg:inline-block">
              SynthQA
            </span>
            <div className="flex items-center gap-4">
              
             
           </div>
          </Link>
        
        </div>
        
      </header>
      
      

      <main className="mx-auto flex max-w-6xl flex-1 flex-col px-4 py-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          {/* Left: Hero + bullets */}
          <section>
            <Badge variant="outline" className="mb-4 border-primary/40 text-xs">
              Early access waitlist · AI test case generator
            </Badge>

            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Join the early access for{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                SynthQA
              </span>
            </h1>
              <div className="mt-6 relative">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
    <video 
      className="w-full aspect-video bg-black"
      controls
      preload="metadata"
      poster="/video-thumbnail.jpg" // Optional: add a thumbnail image
    >
      <source src="/demovide.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✓ 1000+ Tests Generated
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ⚡ 95% Time Saved
              </div>
               </div>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              We&apos;re quietly rolling out an AI test case generator built for QA, SDETs, and
              founders who actually ship. Drop your email and we&apos;ll send you a private
              invite when your spot opens up.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
              <FeatureLine>Turn requirements into mapped test suites in minutes.</FeatureLine>
              <FeatureLine>API, web, and mobile coverage from one place.</FeatureLine>
              <FeatureLine>No calls required — try it on your own backlog.</FeatureLine>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              We&apos;ll only use your email to send SynthQA updates and your invite link.
              No spam, ever.
            </p>
            
              <div className="mt-20 grid gap-3 text-sm text-muted-foreground"></div>
          
          </section>

          
          {/* Right: Waitlist form */}
          <section>
            <Card className="border-primary/15 bg-card/90 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  Join the waitlist
                  <span className="text-xs font-normal text-muted-foreground">
                    Limited early access
                  </span>
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Be among the first to try SynthQA when we open up new seats.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role (optional)</Label>
                    <Input
                      id="role"
                      placeholder="QA lead, SDET, founder..."
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="useCase">What would you use SynthQA for?</Label>
                    <Textarea
                      id="useCase"
                      rows={3}
                      placeholder="e.g. turning requirements into test suites, cross-platform coverage, reducing manual test writing..."
                      value={useCase}
                      onChange={(e) => setUseCase(e.target.value)}
                    />
                    <p className="text-[11px] text-muted-foreground">
                      This helps us prioritise features and who we onboard first.
                    </p>
                  </div>

                  {status && (
                    <div
                      className={cn(
                        "rounded-md px-3 py-2 text-xs",
                        status === "success"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/40"
                          : "bg-destructive/10 text-destructive border border-destructive/40"
                      )}
                    >
                      {statusMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="mt-1 w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      "Joining..."
                    ) : (
                      <>
                        Join waitlist
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="mt-1 text-[11px] text-center text-muted-foreground">
                    By joining, you agree to receive product emails from SynthQA. You can opt
                    out anytime.
                  </p>
                </form>
              </CardContent>
            </Card>



            {/* Mini social proof / info card */}
            <Card className="mt-4 border-muted-foreground/10 bg-background/60">
              <CardContent className="py-4 text-xs text-muted-foreground">
                <p className="mb-2 font-medium text-foreground">
                  Who is SynthQA for?
                </p>
                <ul className="space-y-1">
                  <li>• QA teams tired of writing the same test cases repeatedly</li>
                  <li>• SDETs who want AI to draft, while they review and refine</li>
                  <li>• Founders who want better coverage without hiring a full QA team yet</li>
                </ul>
              </CardContent>
            </Card>         
      
          </section>
        </div>
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">How It Works</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              From Idea to Execution in Minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200" />
            
            {[
              {
                step: "1",
                title: "Describe Your Requirements",
                description: "Simply type what you want to test or upload your requirements doc",
                icon: MessageSquare,
              },
              {
                step: "2",
                title: "AI Generates Test Cases",
                description: "Our AI creates comprehensive test cases with steps, assertions, and edge cases",
                icon: Sparkles,
              },
              {
                step: "3",
                title: "Execute & Track",
                description: "Run tests, track progress in real-time, and get instant insights",
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-blue-600 text-blue-600 font-bold text-2xl mb-4 relative z-10">
                    {item.step}
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <item.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
              <WaitlistPricing /> 
        </div>
        
      </section>
      </main>
    </div>
  );
}

function FeatureLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 className="mt-[2px] h-4 w-4 text-primary" />
      <span>{children}</span>
    </div>
  );
}
