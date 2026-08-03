import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { PageHeading } from "@/components/hq/shell";
import { AgentCard } from "@/components/hq/agent-card";
import { Button } from "@/components/ui/button";
import { agentByName, agents, collections } from "@/lib/hq-data";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "AI Agent Marketplace | Agentic Telecom & Media HQ" },
      {
        name: "description",
        content:
          "Discover 17 approved enterprise AI agents with business outcomes, ROI category, risk level, governance status and adoption scores.",
      },
      { property: "og:title", content: "AI Agent Marketplace — Agentic Telecom & Media HQ" },
      {
        property: "og:description",
        content:
          "Filter approved agents by function, persona, value lever, governance status, maturity and Microsoft architecture pattern.",
      },
    ],
  }),
  component: Marketplace,
});

const ALL = "All";

function Filter({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-wide text-muted-foreground uppercase">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border bg-secondary px-3 py-2 text-sm outline-none focus:border-ms-blue"
      >
        {[ALL, ...options].map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Marketplace() {
  const [fn, setFn] = useState(ALL);
  const [persona, setPersona] = useState(ALL);
  const [lever, setLever] = useState(ALL);
  const [gov, setGov] = useState(ALL);
  const [maturity, setMaturity] = useState(ALL);
  const [pattern, setPattern] = useState(ALL);
  const [query, setQuery] = useState("");

  const uniq = (fnSel: (a: (typeof agents)[number]) => string) =>
    Array.from(new Set(agents.map(fnSel))).sort();

  const filtered = useMemo(
    () =>
      agents.filter(
        (a) =>
          (fn === ALL || a.functionLabel === fn) &&
          (persona === ALL || a.persona === persona) &&
          (lever === ALL || a.roiCategory === lever) &&
          (gov === ALL || a.governance === gov) &&
          (maturity === ALL || a.maturity === maturity) &&
          (pattern === ALL || a.pattern === pattern) &&
          (query === "" || (a.name + a.description).toLowerCase().includes(query.toLowerCase())),
      ),
    [fn, persona, lever, gov, maturity, pattern, query],
  );

  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="AI Agent Marketplace"
        title="Discover, evaluate and launch approved enterprise agents"
        description="A catalog of every published agent with business value, risk posture, governance status and adoption — organized by function and packaged into executive suites."
      />

      <section className="grid gap-4 lg:grid-cols-5">
        {collections.map((c) => (
          <div key={c.name} className="panel panel-hover flex flex-col p-5">
            <span
              className="mb-3 inline-flex w-fit rounded-full border px-2.5 py-0.5 text-[11px] font-medium"
              style={{
                color: `var(--ms-${c.tone})`,
                borderColor: `color-mix(in oklab, var(--ms-${c.tone}) 40%, transparent)`,
                background: `color-mix(in oklab, var(--ms-${c.tone}) 14%, transparent)`,
              }}
            >
              Featured collection
            </span>
            <h3 className="text-base font-semibold">{c.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{c.blurb}</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {c.agents.map((n) => (
                <li key={n}>
                  <a
                    href={agentByName(n).url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-start gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="mt-0.5 size-3.5 shrink-0" />
                    <span>{n}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="panel p-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          <label className="block">
            <span className="text-[11px] tracking-wide text-muted-foreground uppercase">
              Search
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search agents"
              className="mt-1 w-full rounded-lg border bg-secondary px-3 py-2 text-sm outline-none focus:border-ms-blue"
            />
          </label>
          <Filter label="Business function" options={uniq((a) => a.functionLabel)} value={fn} onChange={setFn} />
          <Filter label="Persona" options={uniq((a) => a.persona)} value={persona} onChange={setPersona} />
          <Filter label="Value lever" options={uniq((a) => a.roiCategory)} value={lever} onChange={setLever} />
          <Filter label="Governance status" options={uniq((a) => a.governance)} value={gov} onChange={setGov} />
          <Filter label="Agent maturity" options={uniq((a) => a.maturity)} value={maturity} onChange={setMaturity} />
          <Filter label="Microsoft pattern" options={uniq((a) => a.pattern)} value={pattern} onChange={setPattern} />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{" "}
            {agents.length} agentic solutions
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setFn(ALL);
              setPersona(ALL);
              setLever(ALL);
              setGov(ALL);
              setMaturity(ALL);
              setPattern(ALL);
              setQuery("");
            }}
          >
            Reset filters
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((a) => (
          <AgentCard key={a.id} agent={a} />
        ))}
      </section>
    </div>
  );
}
