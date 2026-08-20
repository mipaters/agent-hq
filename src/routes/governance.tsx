import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/hq/shell";
import { Chip } from "@/components/hq/agent-card";
import { agents, governanceControls, governanceStatement, roomById } from "@/lib/hq-data";
import { certTone, riskTone } from "@/lib/tone";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Agent365 Governance | Agentic Telecom & Media HQ" },
      {
        name: "description",
        content:
          "The Agent365 control plane: registry, ownership, approved data and actions, human approval, certification, audit trail, cost attribution and lifecycle.",
      },
      { property: "og:title", content: "Agent365 Governance Control Plane" },
      {
        property: "og:description",
        content:
          "Every agent governed: risk classification, data sensitivity, approved actions, certification status, usage and ROI scoring.",
      },
      { property: "og:url", content: "https://agent-haven-hq.lovable.app/governance" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://agent-haven-hq.lovable.app/governance" }],
  }),
  component: Governance,
});

function Governance() {
  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="Agent365 Governance"
        title="One control plane for the entire agent estate"
        description="Agent365 makes sure the enterprise can prove who owns every agent, what data they touch, what they are allowed to do, and whether they still earn their place."
      />

      <div
        className="panel p-6 text-sm leading-relaxed"
        style={{ borderColor: "color-mix(in oklab, var(--ms-green) 40%, transparent)" }}
      >
        {governanceStatement}
      </div>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {governanceControls.map((c, i) => (
          <div
            key={c.name}
            className="panel panel-hover animate-rise-in p-4"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <span className="size-2 rounded-full" style={{ backgroundColor: `var(--ms-${c.tone})` }} />
            <p className="mt-2 text-sm font-semibold">{c.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{c.detail}</p>
          </div>
        ))}
      </section>

      <section className="panel overflow-hidden">
        <div className="border-b p-5">
          <h3 className="text-lg font-semibold">Agent registry</h3>
          <p className="text-sm text-muted-foreground">
            All {agents.length} registered agentic solutions with policy, risk and value posture.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-sm">
            <thead className="bg-secondary/60 text-left text-xs tracking-wide text-muted-foreground uppercase">
              <tr>
                {[
                  "Agent",
                  "Room",
                  "Owner persona",
                  "Risk",
                  "Data sensitivity",
                  "Approved actions",
                  "Human approval",
                  "Certification",
                  "Usage",
                  "ROI",
                  "Status",
                ].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {agents.map((a) => (
                <tr key={a.id} className="border-t transition-colors hover:bg-secondary/40">
                  <td className="px-4 py-3 font-medium">{a.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{roomById(a.room).short}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a.persona}</td>
                  <td className="px-4 py-3">
                    <Chip tone={riskTone(a.risk)}>{a.risk}</Chip>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{a.dataSensitivity}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a.approvedActions}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a.humanApproval}</td>
                  <td className="px-4 py-3">
                    <Chip tone={certTone(a.certification)}>{a.certification}</Chip>
                  </td>
                  <td className="px-4 py-3 font-semibold">{a.usage}</td>
                  <td className="px-4 py-3 font-semibold">{a.roiScore}</td>
                  <td className="px-4 py-3">
                    <Chip tone={a.status === "Live" ? "green" : "amber"}>{a.status}</Chip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
