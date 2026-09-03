import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HouseDiagram } from "@/components/hq/house-diagram";
import { CustomerDemoView } from "@/components/hq/customer-demos";
import { customerDemos } from "@/lib/hq-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [selectedCustomer, setSelectedCustomer] = useState<string>("hq");

  const activeCustomer = customerDemos.find((c) => c.id === selectedCustomer);

  return (
    <div className="space-y-8">
      <section className="panel p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Executive Command Center</h3>
            <p className="text-sm text-muted-foreground">
              Choose the enterprise view or jump to customer-specific demos.
            </p>
          </div>
          <div className="w-full sm:w-64">
            <Select value={selectedCustomer} onValueChange={setSelectedCustomer}>
              <SelectTrigger>
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hq">Agentic HQ (default)</SelectItem>
                {customerDemos.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.shortName} demos
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {activeCustomer ? (
        <CustomerDemoView customer={activeCustomer} />
      ) : (
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
      )}
    </div>
  );
}
