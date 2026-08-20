import { createFileRoute } from "@tanstack/react-router";
import { HouseDiagram } from "@/components/hq/house-diagram";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agentic Telecom & Media Company HQ" },
      {
        name: "description",
        content:
          "Executive command center for a governed portfolio of AI agents across network, IT, media, HR, consumer, business, finance, legal, security and support functions.",
      },
      { property: "og:title", content: "Agentic Telecom & Media Company HQ" },
      {
        property: "og:description",
        content:
          "AI operating model for a connected telecom and media enterprise: rooms of agents, Agent365 governance, Microsoft architecture and enterprise value realization.",
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
    </div>
  );
}
