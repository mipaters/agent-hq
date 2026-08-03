import { useEffect, useState } from "react";
import { AlertTriangle, CircleHelp, RotateCcw, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export type ReadinessStatus = "assumed" | "validated" | "blocked";

type Assumption = {
  id: string;
  title: string;
  category: string;
  owner: string;
  detail: string;
  evidence: string;
};

export const assumptions: Assumption[] = [
  {
    id: "ossbss",
    title: "OSS/BSS data access",
    category: "Data access",
    owner: "Enterprise Data Platform",
    detail:
      "Read access to OSS/BSS systems (billing, order management, CRM, provisioning, ticketing, network inventory and assurance) is exposed to Fabric, Databricks or an equivalent lakehouse.",
    evidence: "Source system inventory with connection method and refresh cadence.",
  },
  {
    id: "landed",
    title: "Landed and modelled data",
    category: "Data quality",
    owner: "Data Engineering",
    detail:
      "Core domains are landed in OneLake / Delta with a usable semantic model; agents consume curated tables and APIs, not raw source extracts.",
    evidence: "Semantic model walkthrough plus row counts and freshness SLA per domain.",
  },
  {
    id: "identity",
    title: "Identity and entitlements",
    category: "Security",
    owner: "Identity & Access Management",
    detail:
      "Entra ID is the identity plane, with groups and app registrations available so agents inherit user-level entitlements rather than a shared service account.",
    evidence: "App registration and group mapping approved by IAM.",
  },
  {
    id: "purview",
    title: "Data classification and policy",
    category: "Compliance",
    owner: "Privacy & Compliance",
    detail:
      "Purview labels, PII masking and retention policies exist for customer, subscriber and employee data used by the agents.",
    evidence: "Labelled datasets and a signed-off privacy impact assessment.",
  },
  {
    id: "writeback",
    title: "Actions and write-back",
    category: "Integration",
    owner: "Process owner + Integration",
    detail:
      "Where an agent acts (ticket, offer, quote, dispatch), an API or connector exists and human-in-the-loop approval is acceptable to the process owner.",
    evidence: "API contract or connector plus agreed approval model.",
  },
  {
    id: "environments",
    title: "Environments and tenancy",
    category: "Platform",
    owner: "Cloud Platform",
    detail:
      "Azure subscription, Foundry project, Copilot Studio environment and a non-production dataset are available for pilot work.",
    evidence: "Provisioned subscription IDs and environment access list.",
  },
  {
    id: "network",
    title: "Network and connectivity",
    category: "Platform",
    owner: "Cloud Platform + Network",
    detail:
      "Private endpoints, VNet integration and firewall rules allow agents to reach OSS/BSS APIs and the lakehouse from Azure.",
    evidence: "Connectivity test from the Foundry project to each target system.",
  },
  {
    id: "ownership",
    title: "Business ownership and baseline",
    category: "Business",
    owner: "Room executive sponsor",
    detail:
      "Each agent has a named business owner and a baseline metric so value can be measured against a before state.",
    evidence: "Named owner plus a documented baseline metric per agent.",
  },
];

const statusMeta: Record<
  ReadinessStatus,
  { label: string; tone: string; icon: typeof ShieldCheck }
> = {
  assumed: { label: "Assumed", tone: "amber", icon: CircleHelp },
  validated: { label: "Validated", tone: "green", icon: ShieldCheck },
  blocked: { label: "Blocked", tone: "red", icon: AlertTriangle },
};

const STORAGE_KEY = "hq-readiness-v1";
const defaults = Object.fromEntries(
  assumptions.map((a) => [a.id, "assumed" as ReadinessStatus]),
) as Record<string, ReadinessStatus>;

export function ReadinessChecklist() {
  const [state, setState] = useState<Record<string, ReadinessStatus>>(defaults);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...defaults, ...JSON.parse(raw) });
    } catch {
      /* ignore */
    }
  }, []);

  const update = (id: string, status: ReadinessStatus) => {
    setState((prev) => {
      const next = { ...prev, [id]: status };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const reset = () => {
    setState(defaults);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  const counts = {
    assumed: assumptions.filter((a) => state[a.id] === "assumed").length,
    validated: assumptions.filter((a) => state[a.id] === "validated").length,
    blocked: assumptions.filter((a) => state[a.id] === "blocked").length,
  };
  const pct = Math.round((counts.validated / assumptions.length) * 100);
  const ready = counts.blocked === 0 && counts.assumed === 0;

  return (
    <div>
      <div className="rounded-xl border p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">Readiness to proceed</p>
            <p className="text-xs text-muted-foreground">
              {ready
                ? "All assumptions validated — clear to move into the discovery workshop."
                : counts.blocked > 0
                  ? `${counts.blocked} blocked item${counts.blocked > 1 ? "s" : ""} must be resolved or de-scoped before the pilot wave.`
                  : `${counts.assumed} item${counts.assumed > 1 ? "s" : ""} still assumed — validate before committing to a Statement of Work.`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {(Object.keys(statusMeta) as ReadinessStatus[]).map((s) => (
              <span
                key={s}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  color: `var(--ms-${statusMeta[s].tone})`,
                  borderColor: `color-mix(in oklab, var(--ms-${statusMeta[s].tone}) 40%, transparent)`,
                  background: `color-mix(in oklab, var(--ms-${statusMeta[s].tone}) 12%, transparent)`,
                }}
              >
                {counts[s]} {statusMeta[s].label.toLowerCase()}
              </span>
            ))}
            <Button size="sm" variant="ghost" onClick={reset}>
              <RotateCcw className="size-3.5" /> Reset
            </Button>
          </div>
        </div>
        <Progress value={pct} className="mt-3 h-2" />
        <p className="mt-1.5 text-xs text-muted-foreground">{pct}% validated</p>
      </div>

      <div className="mt-3 space-y-2">
        {assumptions.map((a) => {
          const status = state[a.id] ?? "assumed";
          const meta = statusMeta[status];
          const Icon = meta.icon;
          return (
            <div
              key={a.id}
              className="rounded-xl border p-4 transition-colors"
              style={{
                borderColor: `color-mix(in oklab, var(--ms-${meta.tone}) 32%, transparent)`,
                background: `color-mix(in oklab, var(--ms-${meta.tone}) 5%, transparent)`,
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-[16rem] flex-1">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4" style={{ color: `var(--ms-${meta.tone})` }} />
                    <p className="text-sm font-semibold">{a.title}</p>
                    <span className="rounded-full border px-2 py-0.5 text-[10px] text-muted-foreground">
                      {a.category}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{a.detail}</p>
                  <p className="mt-1.5 text-[11px] text-muted-foreground">
                    <span className="font-medium text-foreground/80">Owner:</span> {a.owner} ·{" "}
                    <span className="font-medium text-foreground/80">Evidence:</span> {a.evidence}
                  </p>
                </div>
                <div className="flex gap-1 rounded-lg border p-1">
                  {(Object.keys(statusMeta) as ReadinessStatus[]).map((s) => {
                    const active = status === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => update(a.id, s)}
                        aria-pressed={active}
                        className="rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                        style={{
                          color: active ? `var(--ms-${statusMeta[s].tone})` : undefined,
                          background: active
                            ? `color-mix(in oklab, var(--ms-${statusMeta[s].tone}) 18%, transparent)`
                            : undefined,
                        }}
                      >
                        {statusMeta[s].label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
