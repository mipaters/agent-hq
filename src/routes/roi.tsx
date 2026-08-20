import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/hq/shell";
import { roiRows, valueDimensions } from "@/lib/hq-data";

export const Route = createFileRoute("/roi")({
  head: () => ({
    meta: [
      { title: "ROI & Value Realization | Agentic Telecom & Media HQ" },
      {
        name: "description",
        content:
          "Executive ROI dashboard: $186M annual value potential across network, IT, media, HR, consumer, business, finance and legal value levers.",
      },
      { property: "og:title", content: "ROI & Value Realization" },
      {
        property: "og:description",
        content:
          "Revenue growth, revenue protected, cost reduction, productivity, risk and experience impact by business room.",
      },
      { property: "og:url", content: "https://agent-haven-hq.lovable.app/roi" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://agent-haven-hq.lovable.app/roi" }],
  }),
  component: Roi,
});

const total = roiRows.reduce((s, r) => s + r.value, 0);
const max = Math.max(...roiRows.map((r) => r.value));

function Roi() {
  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="ROI & Value Realization"
        title={`$${total}M of annual value potential, owned room by room`}
        description="Value is tracked where it is created — each room has an executive owner, a named value lever, and a measurable contribution to the enterprise business case."
      />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {valueDimensions.map((v, i) => (
          <div
            key={v.label}
            className="panel panel-hover animate-rise-in p-5"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <p className="text-xs text-muted-foreground">{v.label}</p>
            <p className="mt-2 text-xl font-semibold" style={{ color: `var(--ms-${v.tone})` }}>
              {v.value}
            </p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full"
                style={{ width: `${v.progress}%`, backgroundColor: `var(--ms-${v.tone})` }}
              />
            </div>
          </div>
        ))}
      </section>

      <section className="panel overflow-hidden">
        <div className="border-b p-5">
          <h3 className="text-lg font-semibold">Value by room</h3>
          <p className="text-sm text-muted-foreground">
            Annual value potential with executive ownership and primary value lever.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-secondary/60 text-left text-xs tracking-wide text-muted-foreground uppercase">
              <tr>
                {["Room", "Value lever", "Annual value potential", "Contribution", "Executive owner"].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 font-medium">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {roiRows.map((r) => (
                <tr key={r.room} className="border-t transition-colors hover:bg-secondary/40">
                  <td className="px-4 py-3 font-medium">{r.room}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.lever}</td>
                  <td className="px-4 py-3 font-semibold text-ms-green">${r.value}M</td>
                  <td className="px-4 py-3">
                    <div className="h-2 w-40 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-ms-blue"
                        style={{ width: `${(r.value / max) * 100}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{r.owner}</td>
                </tr>
              ))}
              <tr className="border-t bg-secondary/40">
                <td className="px-4 py-3 font-semibold">Total</td>
                <td className="px-4 py-3 text-muted-foreground">Enterprise agent operating model</td>
                <td className="px-4 py-3 font-semibold text-ms-green">${total}M</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3 text-muted-foreground">Executive committee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
