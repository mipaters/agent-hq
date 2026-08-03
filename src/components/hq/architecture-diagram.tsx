import { useState } from "react";
import { ArrowDown } from "lucide-react";

type Node = { name: string; role: string; detail: string };
type Layer = { id: string; name: string; tone: string; summary: string; nodes: Node[] };

export const architectureLayers: Layer[] = [
  {
    id: "ui",
    name: "UI Layer",
    tone: "blue",
    summary: "Where people meet the agents — in the tools they already use every day.",
    nodes: [
      {
        name: "Microsoft 365 Copilot",
        role: "Everyday entry point",
        detail:
          "Employees invoke declarative agents from Copilot chat, Word, Excel and Outlook with no new app to learn.",
      },
      {
        name: "Teams App",
        role: "Collaboration surface",
        detail:
          "Agents post into NOC, sales and finance channels, and run approval flows via adaptive cards.",
      },
      {
        name: "Power Apps",
        role: "Task-specific UI",
        detail: "Purpose-built screens for field ops, care and contract review workflows.",
      },
      {
        name: "Copilot Studio",
        role: "Low-code authoring",
        detail: "Business teams extend topics, prompts and connectors without engineering cycles.",
      },
    ],
  },
  {
    id: "agent",
    name: "Agent Layer",
    tone: "cyan",
    summary: "Reasoning, orchestration, tools and the guardrails around them.",
    nodes: [
      {
        name: "Azure AI Foundry",
        role: "Orchestration + evaluation",
        detail:
          "Multi-agent workflows, tool calling, prompt versioning, evaluations and tracing for every run.",
      },
      {
        name: "Azure OpenAI",
        role: "Model layer",
        detail: "Reasoning and embedding models deployed in-region with tenant data isolation.",
      },
      {
        name: "Copilot Studio Agents",
        role: "Business-authored agents",
        detail: "Declarative agents and topics that call the same tools and data contracts.",
      },
      {
        name: "Agent365 Governance",
        role: "Control plane",
        detail:
          "Registry, owner, permitted actions, human-approval gates, risk tier and audit for each agent.",
      },
    ],
  },
  {
    id: "data",
    name: "Data Layer",
    tone: "teal",
    summary: "Curated OSS/BSS and enterprise data the agents are allowed to reason over.",
    nodes: [
      {
        name: "Microsoft Fabric",
        role: "Lakehouse + semantic model",
        detail:
          "Network, billing, CRM and HR domains landed, modelled and exposed as governed tables.",
      },
      {
        name: "OneLake",
        role: "Single storage plane",
        detail: "Delta tables shortcut from Databricks, ADLS and source extracts without copies.",
      },
      {
        name: "Dataverse",
        role: "Operational records",
        detail: "Agent state, approvals, cases and business process data used for write-back.",
      },
      {
        name: "Azure SQL",
        role: "Transactional store",
        detail: "Low-latency lookups and application-side persistence for agent actions.",
      },
    ],
  },
  {
    id: "reporting",
    name: "Reporting Layer",
    tone: "amber",
    summary: "How value, adoption and agent performance are made visible to executives.",
    nodes: [
      {
        name: "Power BI",
        role: "Value realization",
        detail:
          "Baseline vs. actual outcome reporting per room, agent adoption and cost-to-serve trends.",
      },
    ],
  },
  {
    id: "security",
    name: "Security Layer",
    tone: "green",
    summary: "Identity, classification and threat protection wrapped around every layer.",
    nodes: [
      {
        name: "Entra ID",
        role: "Identity + entitlements",
        detail: "Agents act on behalf of the user and inherit their entitlements, never a shared account.",
      },
      {
        name: "Purview",
        role: "Classification + DLP",
        detail: "Sensitivity labels, PII masking and retention applied to subscriber and employee data.",
      },
      {
        name: "Defender",
        role: "Threat protection",
        detail: "Runtime monitoring for prompt injection, data exfiltration and anomalous agent behaviour.",
      },
    ],
  },
];

export function ArchitectureDiagram() {
  const [selected, setSelected] = useState<{ layer: Layer; node: Node }>({
    layer: architectureLayers[0]!,
    node: architectureLayers[0]!.nodes[0]!,
  });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
      <div className="space-y-2">
        {architectureLayers.map((layer, i) => {
          const dim = hovered !== null && hovered !== layer.id;
          return (
            <div key={layer.id}>
              <div
                onMouseEnter={() => setHovered(layer.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative overflow-hidden rounded-xl border p-4 transition-all duration-300 ${
                  dim ? "opacity-50" : "opacity-100"
                }`}
                style={{
                  borderColor: `color-mix(in oklab, var(--ms-${layer.tone}) ${hovered === layer.id ? 60 : 32}%, transparent)`,
                  background: `color-mix(in oklab, var(--ms-${layer.tone}) ${hovered === layer.id ? 14 : 7}%, transparent)`,
                }}
              >
                <span
                  className="absolute inset-y-0 left-0 w-1.5"
                  style={{ backgroundColor: `var(--ms-${layer.tone})` }}
                />
                <div className="flex flex-wrap items-start gap-4 pl-2">
                  <div className="w-44 shrink-0">
                    <h4
                      className="text-sm font-semibold"
                      style={{ color: `var(--ms-${layer.tone})` }}
                    >
                      {layer.name}
                    </h4>
                    <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                      {layer.summary}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-wrap gap-2">
                    {layer.nodes.map((node) => {
                      const active =
                        selected.node.name === node.name && selected.layer.id === layer.id;
                      return (
                        <button
                          key={node.name}
                          type="button"
                          onClick={() => setSelected({ layer, node })}
                          className={`rounded-lg border px-3 py-1.5 text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                            active ? "font-semibold shadow-lg" : ""
                          }`}
                          style={{
                            borderColor: `color-mix(in oklab, var(--ms-${layer.tone}) ${active ? 90 : 30}%, transparent)`,
                            background: active
                              ? `color-mix(in oklab, var(--ms-${layer.tone}) 22%, transparent)`
                              : undefined,
                            color: active ? `var(--ms-${layer.tone})` : undefined,
                          }}
                        >
                          {node.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              {i < architectureLayers.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <ArrowDown className="size-3.5 text-muted-foreground/50" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <aside
        className="h-fit rounded-xl border p-5 lg:sticky lg:top-2"
        style={{
          borderColor: `color-mix(in oklab, var(--ms-${selected.layer.tone}) 45%, transparent)`,
          background: `color-mix(in oklab, var(--ms-${selected.layer.tone}) 8%, transparent)`,
        }}
      >
        <p
          className="text-[11px] font-semibold tracking-[0.18em] uppercase"
          style={{ color: `var(--ms-${selected.layer.tone})` }}
        >
          {selected.layer.name}
        </p>
        <h4 className="mt-2 text-lg font-semibold">{selected.node.name}</h4>
        <p className="text-sm text-muted-foreground">{selected.node.role}</p>
        <p className="mt-3 text-sm leading-relaxed">{selected.node.detail}</p>
        <p className="mt-4 border-t pt-3 text-xs text-muted-foreground">
          Select any component in the diagram to see the role it plays for every agent in the house.
        </p>
      </aside>
    </div>
  );
}
