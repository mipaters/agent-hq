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
