import { useState } from "react";
import { ExternalLink, Eye, Info } from "lucide-react";
import type { CustomerDemo } from "@/lib/hq-data";
import { launchDemo } from "@/lib/launch";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function DemoCard({
  demo,
  customerAccent,
}: {
  demo: CustomerDemo["demos"][number];
  customerAccent: string;
}) {
  const [preview, setPreview] = useState(false);

  return (
    <>
      <div
        className="panel panel-hover flex h-full flex-col gap-3 p-5"
        style={{
          borderColor: `color-mix(in oklab, ${customerAccent} 35%, transparent)`,
          background: `linear-gradient(160deg, color-mix(in oklab, ${customerAccent} 10%, transparent), transparent 70%)`,
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <span
              className="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
              style={{
                borderColor: `color-mix(in oklab, ${customerAccent} 45%, transparent)`,
                background: `color-mix(in oklab, ${customerAccent} 15%, transparent)`,
              }}
            >
              {demo.category}
            </span>
            <h4 className="mt-2 text-base font-semibold leading-snug">{demo.name}</h4>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{demo.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Button size="sm" onClick={() => launchDemo(demo.url)}>
            Launch Demo <ExternalLink className="size-3.5" />
          </Button>
          <Button size="sm" variant="secondary" onClick={() => setPreview(true)}>
            <Eye className="size-3.5" /> Preview in Hub
          </Button>
          <Button size="sm" variant="ghost" onClick={() => launchDemo(demo.url)}>
            <Info className="size-3.5" /> View Details
          </Button>
        </div>
      </div>

      <Dialog open={preview} onOpenChange={setPreview}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>Preview in Hub — {demo.name}</DialogTitle>
            <DialogDescription>
              Optional embedded preview. Some customer demos block embedding; if the frame stays
              blank, launch the demo in a new tab.
            </DialogDescription>
          </DialogHeader>
          <div className="h-[60vh] overflow-hidden rounded-xl border bg-secondary/50">
            <iframe
              src={demo.url}
              title={demo.name}
              className="h-full w-full"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
          <Button variant="secondary" onClick={() => launchDemo(demo.url)}>
            Open in new tab instead <ExternalLink className="size-4" />
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function CustomerDemoView({ customer }: { customer: CustomerDemo }) {
  return (
    <div className="space-y-6">
      <section
        className="panel relative overflow-hidden p-6"
        style={{
          borderColor: `color-mix(in oklab, ${customer.accent} 40%, transparent)`,
          background: `linear-gradient(160deg, color-mix(in oklab, ${customer.accent} 12%, transparent), transparent 70%)`,
        }}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">{customer.name}</h2>
            <p className="text-sm text-muted-foreground">{customer.description}</p>
          </div>
          <div
            className="inline-flex items-center gap-2 self-start rounded-full border px-3 py-1.5 text-xs font-medium sm:self-center"
            style={{
              borderColor: `color-mix(in oklab, ${customer.accent} 50%, transparent)`,
              background: `color-mix(in oklab, ${customer.accent} 15%, transparent)`,
            }}
          >
            {customer.demos.length} customer-specific demos
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {customer.demos.map((demo) => (
          <DemoCard key={demo.id} demo={demo} customerAccent={customer.accent} />
        ))}
      </div>
    </div>
  );
}
