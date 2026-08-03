import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HouseDiagram } from "@/components/hq/house-diagram";
import { Button } from "@/components/ui/button";
import { heroMessage, kpis, priorityAreas, rooms, valueDimensions } from "@/lib/hq-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Executive Command Center | Agentic Telecom & Media Company HQ" },
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
    ],
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
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {kpis.map((k, i) => (
          <div
            key={k.label}
            className="panel panel-hover animate-rise-in relative overflow-hidden p-5"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <span
              className="absolute inset-y-0 left-0 w-1"
              style={{ backgroundColor: `var(--ms-${k.tone})` }}
            />
            <p className="text-xs text-muted-foreground">{k.label}</p>
            <p className="mt-2 text-2xl font-semibold" style={{ color: `var(--ms-${k.tone})` }}>
              {k.value}
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">{k.sub}</p>
          </div>
        ))}
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold">The rooms of the AI-powered telecom company</h3>
        <HouseDiagram />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="panel p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold">Value signal by dimension</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {valueDimensions.slice(0, 6).map((v) => (
              <div key={v.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{v.label}</span>
                  <span className="font-semibold" style={{ color: `var(--ms-${v.tone})` }}>
                    {v.value}
                  </span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${v.progress}%`, backgroundColor: `var(--ms-${v.tone})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="panel p-6">
          <h3 className="text-lg font-semibold">Room maturity</h3>
          <ul className="mt-4 space-y-3">
            {rooms.map((r) => (
              <li key={r.id} className="flex items-center gap-3">
                <span className="size-2 rounded-full" style={{ backgroundColor: r.accent }} />
                <span className="flex-1 truncate text-sm">{r.short}</span>
                <span className="text-sm font-semibold" style={{ color: r.accent }}>
                  {r.maturity}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
