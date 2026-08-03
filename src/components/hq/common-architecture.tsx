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

const stack: { name: string; tone: string; items: string[] }[] = [
  {
    name: "UI Layer",
    tone: "blue",
    items: ["Microsoft 365 Copilot", "Teams App", "Power Apps", "Copilot Studio"],
  },
  {
    name: "Agent Layer",
    tone: "cyan",
    items: ["Azure AI Foundry", "Azure OpenAI", "Copilot Studio Agents", "Agent365 Governance"],
  },
  {
    name: "Data Layer",
    tone: "teal",
    items: ["Microsoft Fabric", "OneLake", "Dataverse", "Azure SQL"],
  },
  { name: "Reporting Layer", tone: "amber", items: ["Power BI"] },
  { name: "Security Layer", tone: "green", items: ["Entra ID", "Purview", "Defender"] },
];

const assumptions: { title: string; detail: string }[] = [
  {
    title: "OSS/BSS data access",
    detail:
      "Read access to OSS/BSS systems (billing, order management, CRM, provisioning, ticketing, network inventory and assurance) is exposed to Fabric, Databricks or an equivalent lakehouse.",
  },
  {
    title: "Landed and modelled data",
    detail:
      "Core domains are landed in OneLake / Delta with a usable semantic model; agents consume curated tables and APIs, not raw source extracts.",
  },
  {
    title: "Identity and entitlements",
    detail:
      "Entra ID is the identity plane, with groups and app registrations available so agents inherit user-level entitlements rather than a shared service account.",
  },
  {
    title: "Data classification and policy",
    detail:
      "Purview labels, PII masking and retention policies exist for customer, subscriber and employee data used by the agents.",
  },
  {
    title: "Actions and write-back",
    detail:
      "Where an agent acts (ticket, offer, quote, dispatch), an API or connector exists and human-in-the-loop approval is acceptable to the process owner.",
  },
  {
    title: "Environments and tenancy",
    detail:
      "Azure subscription, Foundry project, Copilot Studio environment and a non-production dataset are available for pilot work.",
  },
  {
    title: "Business ownership",
    detail:
      "Each agent has a named business owner and a baseline metric so value can be measured against a before state.",
  },
];

const journey: {
  phase: string;
  when: string;
  tone: string;
  who: string;
  detail: string;
  outputs: string[];
}[] = [
  {
    phase: "1 · Prioritize",
    when: "Week 0 — 1 week",
    tone: "blue",
    who: "Executive sponsors + Microsoft account team",
    detail:
      "Score candidate agents on value, data readiness, risk and speed to impact. Pick 3-5 to carry into the pilot wave.",
    outputs: ["Prioritized agent shortlist", "Value hypothesis per agent", "Data readiness view"],
  },
  {
    phase: "2 · Discovery workshop",
    when: "1 full day",
    tone: "cyan",
    who: "Business owners, data owners, Microsoft FDE and/or GSI partner",
    detail:
      "Flesh out the shortlisted pilots end to end: personas, decisions, data sources, actions, guardrails and success metrics.",
    outputs: ["Pilot briefs", "Data source map", "Success metrics + guardrails", "Hackathon backlog"],
  },
  {
    phase: "3 · Hackathon build",
    when: "2-3 days",
    tone: "teal",
    who: "Microsoft FDE / GSI engineers + client SMEs",
    detail:
      "Build working PoCs on the common stack against real or masked data, and demo them to sponsors on the final afternoon.",
    outputs: ["Working PoCs in Foundry / Copilot Studio", "Executive demo", "Findings and gaps log"],
  },
  {
    phase: "4 · Evaluate and scope",
    when: "2-3 weeks",
    tone: "amber",
    who: "Architecture, security, finance and delivery partner",
    detail:
      "Test PoC results against the value hypothesis, close architecture and security gaps, and scope the production build.",
    outputs: ["Value case", "Target architecture", "Statement of Work", "Delivery plan"],
  },
  {
    phase: "5 · Production build",
    when: "8-16 weeks per wave",
    tone: "green",
    who: "GSI delivery pod with Microsoft FDE support",
    detail:
      "Industrialize the chosen agents: hardened data pipelines, evaluation harness, Agent365 registration, monitoring and change management.",
    outputs: ["Certified agents in production", "Agent365 registry entries", "Adoption plan"],
  },
  {
    phase: "6 · Scale the estate",
    when: "Ongoing",
    tone: "violet",
    who: "Agent CoE",
    detail:
      "Reuse the common stack and patterns for the next wave of rooms, with value tracked in Power BI.",
    outputs: ["Reusable patterns", "Next wave backlog", "Value realization reporting"],
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
      <DialogContent className="max-h-[88vh] max-w-5xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>The common architecture behind every agent</DialogTitle>
          <DialogDescription>
            One shared Microsoft stack, one set of assumptions, and one repeatable path from concept
            to production.
          </DialogDescription>
        </DialogHeader>

        <section className="mt-2 space-y-2">
          {stack.map((layer) => (
            <div
              key={layer.name}
              className="relative overflow-hidden rounded-xl border p-4"
              style={{
                borderColor: `color-mix(in oklab, var(--ms-${layer.tone}) 35%, transparent)`,
                background: `color-mix(in oklab, var(--ms-${layer.tone}) 8%, transparent)`,
              }}
            >
              <span
                className="absolute inset-y-0 left-0 w-1.5"
                style={{ backgroundColor: `var(--ms-${layer.tone})` }}
              />
              <div className="flex flex-wrap items-center gap-4 pl-2">
                <h4
                  className="w-40 shrink-0 text-sm font-semibold"
                  style={{ color: `var(--ms-${layer.tone})` }}
                >
                  {layer.name}
                </h4>
                <div className="flex flex-1 flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border px-3 py-1.5 text-sm"
                      style={{
                        borderColor: `color-mix(in oklab, var(--ms-${layer.tone}) 30%, transparent)`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-6">
          <h3 className="text-base font-semibold">Assumptions this architecture depends on</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Every agent in the house assumes the following is true — or that it becomes a workstream
            in the pilot.
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {assumptions.map((a) => (
              <div key={a.title} className="rounded-xl border p-4">
                <p className="text-sm font-semibold">{a.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h3 className="text-base font-semibold">Concept to PoC to production</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Delivered with Microsoft FDE and/or a third-party GSI partner.
          </p>
          <div className="mt-4 space-y-3">
            {journey.map((s) => (
              <div key={s.phase} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className="mt-1 size-3 shrink-0 rounded-full"
                    style={{ backgroundColor: `var(--ms-${s.tone})` }}
                  />
                  <span className="w-px flex-1 bg-border" />
                </div>
                <div className="flex-1 rounded-xl border p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-semibold" style={{ color: `var(--ms-${s.tone})` }}>
                      {s.phase}
                    </p>
                    <span className="text-xs text-muted-foreground">{s.when}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{s.who}</p>
                  <p className="mt-2 text-sm">{s.detail}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {s.outputs.map((o) => (
                      <span
                        key={o}
                        className="rounded-full border px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
