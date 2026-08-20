import { createFileRoute } from "@tanstack/react-router";
import { CommonArchitectureButton } from "@/components/hq/common-architecture";
import { PageHeading } from "@/components/hq/shell";
import { architectureLayers, architectureStatement } from "@/lib/hq-data";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Microsoft Architecture | Agentic Telecom & Media HQ" },
      {
        name: "description",
        content:
          "How the agent ecosystem is built on Microsoft: Teams and Copilot experiences, Azure AI Foundry agents, Fabric data, Entra and Purview governance, Power BI value.",
      },
      { property: "og:title", content: "Microsoft Architecture for the Agent Ecosystem" },
      {
        property: "og:description",
        content:
          "A layered Microsoft-native reference architecture from experience to agent, data, operational systems, governance and value.",
      },
      { property: "og:url", content: "https://agent-haven-hq.lovable.app/architecture" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://agent-haven-hq.lovable.app/architecture" }],
  }),
  component: Architecture,
});

function Architecture() {
  return (
    <div className="space-y-6">
      <PageHeading
        eyebrow="Microsoft Architecture"
        title="A Microsoft-native reference architecture for the agent estate"
        description="Every agent in the house can be delivered as a Microsoft-native experience — grounded in enterprise data, governed by Entra, Purview and Agent365, and measured in Power BI."
      />

      <div className="mb-6">
        <CommonArchitectureButton />
      </div>

      <div className="space-y-3">
        {architectureLayers.map((layer, i) => (
          <section
            key={layer.name}
            className="panel animate-rise-in relative overflow-hidden p-5"
            style={{
              animationDelay: `${i * 70}ms`,
              borderColor: `color-mix(in oklab, var(--ms-${layer.tone}) 35%, transparent)`,
            }}
          >
            <span
              className="absolute inset-y-0 left-0 w-1.5"
              style={{ backgroundColor: `var(--ms-${layer.tone})` }}
            />
            <div className="flex flex-wrap items-center gap-4">
              <div className="w-56 shrink-0">
                <h3 className="text-base font-semibold" style={{ color: `var(--ms-${layer.tone})` }}>
                  {layer.name}
                </h3>
                <p className="text-xs text-muted-foreground">{layer.items.length} services</p>
              </div>
              <div className="flex flex-1 flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border px-3 py-2 text-sm transition-colors"
                    style={{
                      background: `color-mix(in oklab, var(--ms-${layer.tone}) 10%, transparent)`,
                      borderColor: `color-mix(in oklab, var(--ms-${layer.tone}) 28%, transparent)`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="panel hero-surface p-6 text-sm leading-relaxed">{architectureStatement}</div>
    </div>
  );
}
