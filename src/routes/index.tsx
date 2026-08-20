import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CommonArchitectureButton } from "@/components/hq/common-architecture";
import { HouseDiagram } from "@/components/hq/house-diagram";
import { Button } from "@/components/ui/button";
import { heroMessage, priorityAreas } from "@/lib/hq-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Executive Command Center | Agentic Telecom HQ" },
      {
        name: "description",
        content:
          "Executive command center for a governed portfolio of 17 AI agents across network, IT, media, HR, consumer, business, finance and legal functions.",
      },
      { property: "og:title", content: "Agentic Telecom & Media Company HQ" },
      {
        property: "og:description",
        content:
          "AI operating model for a connected telecom and media enterprise: rooms of agents, Agent365 governance, Microsoft architecture and $186M of value potential.",
      },
      { property: "og:url", content: "https://agent-haven-hq.lovable.app/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://agent-haven-hq.lovable.app/" }],
  }),
  component: CommandCenter,
});

function CommandCenter() {
  return (
    <div className="space-y-8">
      <section className="panel hero-surface relative overflow-hidden p-6 sm:p-10">
        <p className="text-xs font-semibold tracking-[0.24em] text-ms-cyan uppercase">
          Executive Command Center
        </p>
        <h2 className="mt-3 max-w-4xl text-3xl leading-tight font-semibold sm:text-4xl">
          One governed operating model for every agent in the enterprise
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {heroMessage}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {priorityAreas.map((p) => (
            <span
              key={p}
              className="rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                borderColor: "color-mix(in oklab, var(--ms-blue) 40%, transparent)",
                background: "color-mix(in oklab, var(--ms-blue) 12%, transparent)",
              }}
            >
              {p}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/rooms">
              Enter the rooms <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/marketplace">Browse the AI Agent Marketplace</Link>
          </Button>
          <CommonArchitectureButton variant="outline" />
        </div>
      </section>

      <section>
        <h3 className="mb-1 text-xl font-semibold">
          The rooms of the AI-powered telecom company
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Each room shows the executive personas who live in it and the business metrics they are
          measured on.
        </p>
        <HouseDiagram />
      </section>

    </div>
  );
}
