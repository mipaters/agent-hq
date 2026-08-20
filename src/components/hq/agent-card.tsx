import { useState } from "react";
import { ExternalLink, Eye, Info, Star } from "lucide-react";
import { toast } from "sonner";
import type { Agent } from "@/lib/hq-data";
import { launchDemo } from "@/lib/launch";
import { certTone, riskTone, toneChip } from "@/lib/tone";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Chip({ children, tone }: { children: React.ReactNode; tone: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium whitespace-nowrap"
      style={toneChip(tone)}
    >
      {children}
    </span>
  );
}

function Meter({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
        <span>{label}</span>
        <span className="font-semibold text-foreground">{value}%</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, backgroundColor: `var(--ms-${tone})` }}
        />
      </div>
    </div>
  );
}

export function AgentCard({ agent, compact = false }: { agent: Agent; compact?: boolean }) {
  const [details, setDetails] = useState(false);
  const [preview, setPreview] = useState(false);

  return (
    <>
      <div className="panel panel-hover flex h-full flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-base leading-snug font-semibold">{agent.name}</h4>
            <p className="mt-0.5 text-xs text-muted-foreground">{agent.persona}</p>
          </div>
          <Chip tone={certTone(agent.certification)}>{agent.certification}</Chip>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{agent.description}</p>

        <div className="flex flex-wrap gap-1.5">
          <Chip tone="blue">{agent.functionLabel}</Chip>
          <Chip tone="teal">{agent.roiCategory}</Chip>
          <Chip tone={riskTone(agent.risk)}>{agent.risk} risk</Chip>
          {!compact && <Chip tone="violet">{agent.maturity}</Chip>}
        </div>

        {!compact && (
          <div className="grid gap-2 sm:grid-cols-2">
            <Meter label="Adoption" value={agent.adoption} tone="green" />
            <Meter label="ROI score" value={agent.roiScore} tone="amber" />
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <Button size="sm" onClick={() => launchDemo(agent.url)}>
            Launch Demo <ExternalLink className="size-3.5" />
          </Button>
          <Button size="sm" variant="secondary" onClick={() => setPreview(true)}>
            <Eye className="size-3.5" /> Preview in Hub
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setDetails(true)}>
            <Info className="size-3.5" /> View Details
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => toast.success(`${agent.name} added to your executive story`)}
          >
            <Star className="size-3.5" /> Add to Story
          </Button>
        </div>
      </div>

      <Dialog open={details} onOpenChange={setDetails}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>{agent.name}</DialogTitle>
            <DialogDescription>{agent.description}</DialogDescription>
          </DialogHeader>
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            {[
              ["Business function", agent.functionLabel],
              ["Persona", agent.persona],
              ["Business outcome", agent.outcome],
              ["ROI category", agent.roiCategory],
              ["Risk level", agent.risk],
              ["Data sensitivity", agent.dataSensitivity],
              ["Approved actions", agent.approvedActions],
              ["Human approval", agent.humanApproval],
              ["Certification", agent.certification],
              ["Microsoft pattern", agent.pattern],
              ["Adoption score", `${agent.adoption}%`],
              ["ROI score", `${agent.roiScore}%`],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-secondary/60 p-3">
                <dt className="text-[11px] tracking-wide text-muted-foreground uppercase">{k}</dt>
                <dd className="mt-0.5 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <Button onClick={() => launchDemo(agent.url)}>
            Launch Demo <ExternalLink className="size-4" />
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={preview} onOpenChange={setPreview}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>Preview in Hub — {agent.name}</DialogTitle>
            <DialogDescription>
              Optional embedded preview. Some blueprint demos block embedding; if the frame stays
              blank, launch the demo in a new tab.
            </DialogDescription>
          </DialogHeader>
          <div className="h-[60vh] overflow-hidden rounded-xl border bg-secondary/50">
            <iframe
              src={agent.url}
              title={agent.name}
              className="h-full w-full"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
          <Button variant="secondary" onClick={() => launchDemo(agent.url)}>
            Open in new tab instead <ExternalLink className="size-4" />
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
