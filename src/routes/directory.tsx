import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHeading } from "@/components/hq/shell";
import { Button } from "@/components/ui/button";
import { agentsByRoom, rooms } from "@/lib/hq-data";

export const Route = createFileRoute("/directory")({
  head: () => ({
    meta: [
      { title: "Agent Launch Directory | Agentic Telecom & Media HQ" },
      {
        name: "description",
        content:
          "A clean launch directory of every agent blueprint demo, grouped by business function, opening in a new tab.",
      },
      { property: "og:title", content: "Agent Launch Directory" },
      {
        property: "og:description",
        content: "Launch any agentic solution blueprint demo directly from the executive HQ.",
      },
    ],
  }),
  component: Directory,
});

function Directory() {
  return (
    <div className="space-y-6">
      <PageHeading
        eyebrow="Agent Launch Directory"
        title="Every blueprint demo, one click away"
        description="Each agent opens in a new browser tab so the underlying experience can be demonstrated in full detail."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {rooms.map((room) => (
          <section key={room.id} className="panel relative overflow-hidden p-5">
            <span className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: room.accent }} />
            <h3 className="text-base font-semibold">{room.name}</h3>
            <ul className="mt-3 divide-y">
              {agentsByRoom(room.id).map((a) => (
                <li key={a.id} className="flex flex-wrap items-center gap-3 py-2.5">
                  <span className="flex-1 text-sm">{a.name}</span>
                  <Button asChild size="sm" variant="secondary">
                    <a href={a.url} target="_blank" rel="noreferrer noopener">
                      Open demo <ExternalLink className="size-3.5" />
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
