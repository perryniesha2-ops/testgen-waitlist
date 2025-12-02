// src/components/marketing/WatchDemoDialog.tsx
"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function WatchDemoDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger is whatever you pass as children */}
      <div onClick={() => setOpen(true)}>{children}</div>

      <DialogContent className="max-w-3xl gap-4">
        <DialogHeader>
          <DialogTitle>Watch the SynthQA walkthrough</DialogTitle>
        </DialogHeader>

        <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted/40">
         <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
    <video 
      className="w-full aspect-video bg-black"
      controls
      preload="metadata"
      poster="/video-thumbnail.jpg" 
    >
      <source src="/demovide.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
          
        </div>
      </DialogContent>
    </Dialog>
  );
}
