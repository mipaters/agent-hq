import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHeading } from "@/components/hq/shell";
import { AgentCard, Chip } from "@/components/hq/agent-card";
import { Button } from "@/components/ui/button";
import { agentsByRoom, rooms } from "@/lib/hq-data";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms of the House | Agentic Telecom & Media HQ" },
      {
        name: "description",
        content:
          "Explore eight business rooms — network, IT, media, HR, consumer, business, finance and legal — each with purpose-built AI agents, owners and outcomes.",
      },
      { property: "og:title", content: "Rooms of the House — Agentic Telecom & Media HQ" },
      {
        property: "og:description",
        content:
          "Eight rooms of specialized AI agents with business owners, outcomes and governance status.",
      },
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  const [open, setOpen] = useState<string | null>("network");

  return (
    <div>
      <PageHeading
        eyebrow="Rooms of the House"
        title="Every business function has its own room of agents"
        description="Each room is owned by an executive persona, measured against business outcomes, and governed through Agent365. Open a room to launch the agents inside it."
      />

      <div className="space-y-4">
        {rooms.map((room) => {
          const roomAgents = agentsByRoom(room.id);
          const expanded = open === room.id;
          return (
            <section
              key={room.id}
              id={room.id}
              className="panel scroll-mt-40 overflow-hidden"
              style={{ borderColor: expanded ? room.accent : undefined }}
            >
              <div className="relative p-6">
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ backgroundColor: room.accent }}
                />
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-[16rem] flex-1">
                    <h3 className="text-xl font-semibold">{room.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{room.persona}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <Chip tone="blue">{room.owner}</Chip>
                      <Chip tone="green">{room.governance}</Chip>
                    </div>
                  </div>
                  <div className="w-full max-w-sm">
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">
                      Key business outcomes
                    </p>
                    <ul className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
                      {room.outcomes.map((o) => (
                        <li key={o} className="flex gap-2 text-muted-foreground">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: room.accent }}
                          />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant={expanded ? "secondary" : "default"}
                    onClick={() => setOpen(expanded ? null : room.id)}
                  >
                    {expanded ? "Close room" : "Launch room"}
                    <ChevronDown
                      className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                    />
                  </Button>
                </div>

                {expanded && (
                  <div className="animate-rise-in mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                    {roomAgents.map((a) => (
                      <AgentCard key={a.id} agent={a} />
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
