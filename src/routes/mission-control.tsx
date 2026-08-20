import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Pause, Play, Radio } from "lucide-react";
import { toast } from "sonner";
import { PageHeading } from "@/components/hq/shell";
import { Chip } from "@/components/hq/agent-card";
import { Button } from "@/components/ui/button";
import { agentByName, roomById, scenarios } from "@/lib/hq-data";

export const Route = createFileRoute("/mission-control")({
  head: () => ({
    meta: [
      { title: "Cross-Agent Mission Control | Agentic Telecom & Media HQ" },
      {
        name: "description",
        content:
          "Watch agents collaborate across network, customer, finance, media and IT rooms during live enterprise scenarios with executive recommendations.",
      },
      { property: "og:title", content: "Cross-Agent Mission Control" },
      {
        property: "og:description",
        content:
          "A live agent collaboration canvas showing signals moving between rooms and the executive actions they trigger.",
      },
      { property: "og:url", content: "https://agent-haven-hq.lovable.app/mission-control" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://agent-haven-hq.lovable.app/mission-control" }],
  }),
  component: MissionControl,
});

function MissionControl() {
  const [active, setActive] = useState(scenarios[0]!.id);
  const [tick, setTick] = useState(0);
  const [playing, setPlaying] = useState(true);
  const scenario = scenarios.find((s) => s.id === active)!;

  useEffect(() => setTick(0), [active]);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setTick((v) => v + 1), 1800);
    return () => clearInterval(t);
  }, [playing, active]);

  const signalIndex = tick % scenario.signals.length;

  const nodes = useMemo(() => {
    const n = scenario.agents.length;
    return scenario.agents.map((name, i) => {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
      return {
        name,
        x: 50 + 36 * Math.cos(angle),
        y: 50 + 34 * Math.sin(angle),
        accent: roomById(agentByName(name).room).accent,
      };
    });
  }, [scenario]);

  const current = scenario.signals[signalIndex]!;
  const from = nodes.find((n) => n.name === current.from)!;
  const to = nodes.find((n) => n.name === current.to)!;

  return (
    <div className="space-y-6">
      <PageHeading
        eyebrow="Cross-Agent Mission Control"
        title="Agents that talk to each other across the house"
        description="Real business events rarely stay in one room. Mission Control shows how signals move between agents, what the enterprise learns, and which executive decisions follow."
      />

      <div className="flex flex-wrap gap-2">
        {scenarios.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className="rounded-xl border px-4 py-2 text-left text-sm transition-colors"
            style={
              s.id === active
                ? {
                    borderColor: "var(--ms-blue)",
                    background: "color-mix(in oklab, var(--ms-blue) 16%, transparent)",
                  }
                : undefined
            }
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <section className="panel grid-lines relative overflow-hidden p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs tracking-[0.2em] text-ms-cyan uppercase">Live collaboration canvas</p>
              <h3 className="mt-1 text-lg font-semibold">{scenario.title}</h3>
              <p className="text-xs text-muted-foreground">Trigger: {scenario.trigger}</p>
            </div>
            <Button size="sm" variant="secondary" onClick={() => setPlaying((p) => !p)}>
              {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
              {playing ? "Pause signals" : "Resume signals"}
            </Button>
          </div>

          <div className="relative mt-4 aspect-[4/3] w-full">
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
              {nodes.map((a) =>
                nodes.map((b) =>
                  a.name < b.name ? (
                    <line
                      key={`${a.name}-${b.name}`}
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      stroke="color-mix(in oklab, var(--ms-blue) 18%, transparent)"
                      strokeWidth="0.25"
                    />
                  ) : null,
                ),
              )}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="var(--ms-cyan)"
                strokeWidth="0.7"
                strokeDasharray="3 2"
                className="animate-signal"
              />
              <circle cx="50" cy="50" r="9" fill="color-mix(in oklab, var(--ms-blue) 22%, transparent)" />
              <text
                x="50"
                y="50.8"
                textAnchor="middle"
                fontSize="2.6"
                fill="var(--color-foreground)"
                fontWeight="600"
              >
                Mission Control
              </text>
            </svg>

            {nodes.map((n) => {
              const isActive = n.name === current.from || n.name === current.to;
              return (
                <div
                  key={n.name}
                  className="absolute w-36 -translate-x-1/2 -translate-y-1/2 rounded-xl border p-2 text-center text-[11px] leading-tight transition-all duration-500"
                  style={{
                    left: `${n.x}%`,
                    top: `${n.y}%`,
                    borderColor: isActive ? n.accent : "var(--border)",
                    background: isActive
                      ? `color-mix(in oklab, ${n.accent} 20%, var(--surface))`
                      : "var(--surface)",
                    boxShadow: isActive ? "var(--shadow-glow)" : undefined,
                  }}
                >
                  <span className="mx-auto mb-1 block size-1.5 rounded-full" style={{ backgroundColor: n.accent }} />
                  {n.name}
                </div>
              );
            })}
          </div>

          <div className="mt-3 flex items-start gap-2 rounded-xl border bg-secondary/50 p-3 text-sm">
            <Radio className="mt-0.5 size-4 shrink-0 text-ms-cyan" />
            <p>
              <span className="font-semibold">{current.from}</span>
              <span className="text-muted-foreground"> → </span>
              <span className="font-semibold">{current.to}</span>
              <span className="text-muted-foreground">: {current.message}</span>
            </p>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="panel p-5">
            <h3 className="text-sm font-semibold tracking-wide uppercase">Scenario narrative</h3>
            <p className="mt-2 text-sm text-muted-foreground">{scenario.narrative}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {scenario.agents.map((a) => (
                <Chip key={a} tone="blue">
                  {a}
                </Chip>
              ))}
            </div>
          </div>

          <div className="panel p-5">
            <h3 className="text-sm font-semibold tracking-wide uppercase">Agent recommendations</h3>
            <div className="mt-3 space-y-3">
              {scenario.recommendations.map((r) => (
                <div key={r.title} className="rounded-xl border bg-secondary/40 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium">{r.title}</p>
                    <Chip tone={r.tone}>{r.impact}</Chip>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-5">
            <h3 className="text-sm font-semibold tracking-wide uppercase">Launch involved agents</h3>
            <div className="mt-3 grid gap-2">
              {scenario.agents.map((name) => (
                <Button key={name} asChild size="sm" variant="secondary" className="justify-start">
                  <a href={agentByName(name).url} target="_blank" rel="noreferrer noopener">
                    <ExternalLink className="size-3.5" /> {name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="panel flex flex-wrap items-center gap-3 p-5">
        <p className="mr-auto text-sm text-muted-foreground">Executive actions for this scenario</p>
        {["Approve recommended actions", "Escalate to executive committee", "Assign owner", "Export executive brief"].map(
          (a) => (
            <Button key={a} size="sm" variant={a.startsWith("Approve") ? "default" : "secondary"} onClick={() => toast.success(`${a} — recorded in Agent365 audit trail`)}>
              {a}
            </Button>
          ),
        )}
      </div>
    </div>
  );
}
