"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";

export function WatchDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="gap-2"
        >
          <PlayCircle className="h-4 w-4" />
          Watch demo
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>See SynthQA in action</DialogTitle>
          <DialogDescription>
            A quick walkthrough of generating, editing, and exporting AI-powered test cases.
          </DialogDescription>
        </DialogHeader>

        {/* Video frame / placeholder */}
        <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border bg-muted">
          {/* Replace this block with your real video later */}
          {/* Example for an MP4 in /public: */}
          {false ? (
            <video
              controls
              className="h-full w-full object-cover"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              Demo video coming soon – we’ll walk through generating test cases from a real requirement.
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
