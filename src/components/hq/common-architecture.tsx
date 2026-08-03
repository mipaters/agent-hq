import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArchitectureDiagram } from "@/components/hq/architecture-diagram";
import { ReadinessChecklist } from "@/components/hq/readiness-checklist";

const journey: {
  phase: string;
  when: string;
  tone: string;
  who: string;
  detail: string;
  deliverables: { name: string; owner: string; format: string }[];
}[] = [
  {
    phase: "1 · Prioritize",
    when: "Week 0 — 1 week",
    tone: "blue",
    who: "Executive sponsors + Microsoft account team",
    detail:
      "Score candidate agents on value, data readiness, risk and speed to impact. Pick 3-5 to carry into the pilot wave.",
    deliverables: [
      { name: "Prioritized agent shortlist", owner: "Executive sponsors", format: "Scored matrix" },
      { name: "Value hypothesis per agent", owner: "Finance + room owner", format: "One-pager" },
      { name: "Data readiness heatmap", owner: "Data platform", format: "Readiness checklist" },
    ],
  },
  {
    phase: "2 · Discovery workshop",
    when: "1 full day",
    tone: "cyan",
    who: "Business owners, data owners, Microsoft FDE and/or GSI partner",
    detail:
      "Flesh out the shortlisted pilots end to end: personas, decisions, data sources, actions, guardrails and success metrics.",
    deliverables: [
      { name: "Pilot brief per agent", owner: "Microsoft FDE", format: "Brief pack" },
      { name: "Data source map", owner: "Data engineering", format: "Source-to-agent map" },
      { name: "Success metrics + guardrails", owner: "Room owner", format: "Metric sheet" },
      { name: "Hackathon backlog", owner: "Delivery lead", format: "Backlog" },
    ],
  },
  {
    phase: "3 · Hackathon build",
    when: "2-3 days",
    tone: "teal",
    who: "Microsoft FDE / GSI engineers + client SMEs",
    detail:
      "Build working PoCs on the common stack against real or masked data, and demo them to sponsors on the final afternoon.",
    deliverables: [
      { name: "Working PoCs in Foundry / Copilot Studio", owner: "FDE / GSI engineers", format: "Running demo" },
      { name: "Executive demo", owner: "Delivery lead", format: "Live walkthrough" },
      { name: "Findings and gaps log", owner: "Architecture", format: "Gap register" },
    ],
  },
  {
    phase: "4 · Evaluate and scope",
    when: "2-3 weeks",
    tone: "amber",
    who: "Architecture, security, finance and delivery partner",
    detail:
      "Test PoC results against the value hypothesis, close architecture and security gaps, and scope the production build.",
    deliverables: [
      { name: "Value case", owner: "Finance", format: "Business case" },
      { name: "Target architecture", owner: "Enterprise architecture", format: "Architecture pack" },
      { name: "Statement of Work", owner: "GSI partner", format: "SoW" },
      { name: "Delivery plan", owner: "Delivery lead", format: "Wave plan" },
    ],
  },
  {
    phase: "5 · Production build",
    when: "8-16 weeks per wave",
    tone: "green",
    who: "GSI delivery pod with Microsoft FDE support",
    detail:
      "Industrialize the chosen agents: hardened data pipelines, evaluation harness, Agent365 registration, monitoring and change management.",
    deliverables: [
      { name: "Certified agents in production", owner: "Delivery pod", format: "Release" },
      { name: "Agent365 registry entries", owner: "Agent CoE", format: "Registry record" },
      { name: "Evaluation + monitoring harness", owner: "Platform engineering", format: "Pipeline" },
      { name: "Adoption plan", owner: "Change management", format: "Enablement plan" },
    ],
  },
  {
    phase: "6 · Scale the estate",
    when: "Ongoing",
    tone: "violet",
    who: "Agent CoE",
    detail:
      "Reuse the common stack and patterns for the next wave of rooms, with value tracked in Power BI.",
    deliverables: [
      { name: "Reusable patterns library", owner: "Agent CoE", format: "Pattern catalog" },
      { name: "Next wave backlog", owner: "Portfolio board", format: "Backlog" },
      { name: "Value realization reporting", owner: "Finance", format: "Power BI report" },
    ],
  },
];

export function CommonArchitectureButton({
  variant = "secondary",
}: {
  variant?: "default" | "secondary" | "outline";
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant}>
          <Layers className="size-4" /> Common agent architecture
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[88vh] max-w-6xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>The common architecture behind every agent</DialogTitle>
          <DialogDescription>
            One shared Microsoft stack, one readiness checklist, and one repeatable path from
            concept to production.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="diagram" className="mt-2">
          <TabsList>
            <TabsTrigger value="diagram">Interactive architecture</TabsTrigger>
            <TabsTrigger value="readiness">Readiness checklist</TabsTrigger>
            <TabsTrigger value="journey">Steps &amp; deliverables</TabsTrigger>
          </TabsList>

          <TabsContent value="diagram" className="mt-4">
            <ArchitectureDiagram />
          </TabsContent>

          <TabsContent value="readiness" className="mt-4">
            <p className="mb-3 text-sm text-muted-foreground">
              Every agent in the house depends on the assumptions below. Mark each one as assumed,
              validated or blocked before committing to the pilot wave — your selections are saved
              in this browser.
            </p>
            <ReadinessChecklist />
          </TabsContent>

          <TabsContent value="journey" className="mt-4">
            <p className="mb-3 text-sm text-muted-foreground">
              Delivered with Microsoft FDE and/or a third-party GSI partner. Each step maps to
              named deliverables with an owner.
            </p>
            <div className="space-y-3">
              {journey.map((s) => (
                <div key={s.phase} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className="mt-1 size-3 shrink-0 rounded-full"
                      style={{ backgroundColor: `var(--ms-${s.tone})` }}
                    />
                    <span className="w-px flex-1 bg-border" />
                  </div>
                  <div
                    className="flex-1 rounded-xl border p-4"
                    style={{
                      borderColor: `color-mix(in oklab, var(--ms-${s.tone}) 30%, transparent)`,
                    }}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold" style={{ color: `var(--ms-${s.tone})` }}>
                        {s.phase}
                      </p>
                      <span className="text-xs text-muted-foreground">{s.when}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{s.who}</p>
                    <p className="mt-2 text-sm">{s.detail}</p>

                    <div className="mt-3 overflow-hidden rounded-lg border">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-secondary/60 text-muted-foreground">
                          <tr>
                            <th className="px-3 py-2 font-medium">Deliverable</th>
                            <th className="px-3 py-2 font-medium">Accountable</th>
                            <th className="px-3 py-2 font-medium">Format</th>
                          </tr>
                        </thead>
                        <tbody>
                          {s.deliverables.map((d) => (
                            <tr key={d.name} className="border-t">
                              <td className="px-3 py-2 font-medium">{d.name}</td>
                              <td className="px-3 py-2 text-muted-foreground">{d.owner}</td>
                              <td className="px-3 py-2 text-muted-foreground">{d.format}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
