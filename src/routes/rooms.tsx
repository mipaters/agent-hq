import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHeading } from "@/components/hq/shell";
import { AgentCard, Chip } from "@/components/hq/agent-card";
import { Button } from "@/components/ui/button";
import { agentsByRoom, roomMetrics, roomValueM, rooms, type Room } from "@/lib/hq-data";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms of the House | Agentic Telecom & Media HQ" },
      {
        name: "description",
        content:
          "Explore the business rooms — network, IT, media, HR, consumer, business, finance, legal, security, support and field services — each with purpose-built AI agents, owners and outcomes.",
      },
      { property: "og:title", content: "Rooms of the House — Agentic Telecom & Media HQ" },
      {
        property: "og:description",
        content:
          "Eight rooms of specialized AI agents with business owners, outcomes and governance status.",
      },
      { property: "og:url", content: "https://agent-haven-hq.lovable.app/rooms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://agent-haven-hq.lovable.app/rooms" }],
  }),
  component: RoomsPage,
});

function RoomKpis({ room }: { room: Room }) {
  const roomAgents = agentsByRoom(room.id);
  const certified = roomAgents.filter((a) => a.governance === "Certified").length;
  const avg = (key: "adoption" | "roiScore") =>
    Math.round(roomAgents.reduce((sum, a) => sum + a[key], 0) / Math.max(roomAgents.length, 1));
  const gated = roomAgents.filter((a) => a.humanApproval.toLowerCase().startsWith("required")).length;

  const kpis: { label: string; value: string; sub: string }[] = [
    {
      label: "Annual value potential",
      value: `$${roomValueM[room.id]}M`,
      sub: `${room.owner} accountable`,
    },
    {
      label: "Agent coverage",
      value: `${roomAgents.length} agents`,
      sub: `${new Set(roomAgents.map((a) => a.roiCategory)).size} value levers covered`,
    },
    {
      label: "Governance status",
      value: `${certified}/${roomAgents.length} certified`,
      sub: `${gated} gated on human approval`,
    },
    {
      label: "Adoption / ROI score",
      value: `${avg("adoption")}% · ${avg("roiScore")}%`,
      sub: `AI maturity ${room.maturity}%`,
    },
  ];

  return (
    <div className="animate-rise-in mt-6">
      <p className="text-xs tracking-wide text-muted-foreground uppercase">Executive KPIs</p>
      <div className="mt-2 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="panel p-4">
            <p className="text-[11px] tracking-wide text-muted-foreground uppercase">{k.label}</p>
            <p className="mt-1 text-xl font-semibold" style={{ color: room.accent }}>
              {k.value}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">{k.sub}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {roomMetrics[room.id].map((m) => (
          <Chip key={m.label} tone="teal">
            {m.label}: {m.value}
          </Chip>
        ))}
      </div>
    </div>
  );
}

function RoomsPage() {
  const [open, setOpen] = useState<string | null>("network");

  const locationHash = useLocation({ select: (l) => l.hash });

  useEffect(() => {
    const hash = locationHash.replace("#", "");
    if (!hash) return;
    if (rooms.some((r) => r.id === hash)) {
      setOpen(hash);
      requestAnimationFrame(() =>
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
  }, [locationHash]);

  return (
    <div>
      <PageHeading
        eyebrow="Rooms of the House"
        title="Every business function has its own room of agents"
        description="Each room is owned by an executive persona, measured against business outcomes, and governed through Agent365. Open a room to launch the agents inside it."
      />

      <div className="space-y-4">
        {rooms
          .filter((room) => room.id !== "executive")
          .map((room) => {
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

                {expanded && <RoomKpis room={room} />}

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
