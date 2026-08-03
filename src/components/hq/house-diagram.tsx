import { Link } from "@tanstack/react-router";
import { agentsByRoom, rooms } from "@/lib/hq-data";

const platform = [
  "Microsoft Fabric",
  "Azure AI Foundry",
  "Power BI",
  "Microsoft Entra",
  "Microsoft Purview",
];

export function HouseDiagram() {
  return (
    <div className="panel grid-lines relative overflow-hidden p-5 sm:p-7">
      <div className="relative">
        <div
          className="animate-float-soft mx-auto max-w-xl rounded-2xl border p-4 text-center"
          style={{
            borderColor: "color-mix(in oklab, var(--ms-cyan) 45%, transparent)",
            background: "color-mix(in oklab, var(--ms-cyan) 12%, transparent)",
          }}
        >
          <p className="text-xs tracking-[0.2em] text-ms-cyan uppercase">Executive Mission Control</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Unified view of value, risk, adoption and cross-functional signals
          </p>
        </div>

        <div className="mx-auto my-4 h-8 w-px bg-gradient-to-b from-ms-cyan/70 to-transparent" />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room, i) => (
            <Link
              key={room.id}
              to="/rooms"
              hash={room.id}
              className="panel panel-hover animate-rise-in group relative block overflow-hidden p-4"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: room.accent }}
              />
              <span
                className="absolute top-4 right-4 size-2 rounded-full"
                style={{ backgroundColor: room.accent }}
              >
                <span
                  className="animate-pulse-ring absolute inset-0 rounded-full"
                  style={{ backgroundColor: room.accent }}
                />
              </span>
              <p className="text-sm font-semibold">{room.short}</p>
              <p className="mt-1 text-xs text-muted-foreground">{room.owner}</p>
              <p className="mt-3 text-xs" style={{ color: room.accent }}>
                {agentsByRoom(room.id).length} agents · maturity {room.maturity}
              </p>
            </Link>
          ))}
        </div>

        <div
          className="mt-5 rounded-2xl border p-4 text-center"
          style={{
            borderColor: "color-mix(in oklab, var(--ms-green) 40%, transparent)",
            background: "color-mix(in oklab, var(--ms-green) 10%, transparent)",
          }}
        >
          <p className="text-xs tracking-[0.2em] text-ms-green uppercase">
            Agent365 Governance Foundation
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Registry · ownership · policy · certification · audit · lifecycle
          </p>
        </div>

        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {platform.map((p) => (
            <span
              key={p}
              className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
              style={{ background: "color-mix(in oklab, var(--ms-blue) 10%, transparent)" }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
