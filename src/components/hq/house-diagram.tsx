import { Link } from "@tanstack/react-router";
import { rooms, roomMetrics, roomPersonas } from "@/lib/hq-data";

const platform = [
  "Microsoft Fabric",
  "Azure AI Foundry",
  "Power BI",
  "Microsoft Entra",
  "Microsoft Purview",
];

// Floors of the building, top to bottom.
const floors: { label: string; roomIds: string[] }[] = [
  { label: "Growth floor", roomIds: ["consumer", "business"] },
  { label: "Experience floor", roomIds: ["media", "hr"] },
  { label: "Operations floor", roomIds: ["network", "it"] },
  { label: "Control floor", roomIds: ["finance", "legal"] },
];

function RoomCell({ id }: { id: string }) {
  const room = rooms.find((r) => r.id === id)!;
  const personas = roomPersonas[room.id];
  const metrics = roomMetrics[room.id];

  return (
    <Link
      to="/rooms"
      hash={room.id}
      className="group relative block overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: `color-mix(in oklab, ${room.accent} 38%, transparent)`,
        background: `linear-gradient(160deg, color-mix(in oklab, ${room.accent} 14%, transparent), transparent 70%)`,
      }}
    >
      {/* window light sweep */}
      <span
        className="pointer-events-none absolute inset-0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]"
        style={{
          background: `linear-gradient(75deg, transparent, color-mix(in oklab, ${room.accent} 22%, transparent), transparent)`,
        }}
      />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">{room.short}</p>
          <p className="text-[11px] text-muted-foreground">{room.name}</p>
        </div>
        <span className="relative mt-1 size-2 shrink-0 rounded-full" style={{ backgroundColor: room.accent }}>
          <span
            className="animate-pulse-ring absolute inset-0 rounded-full"
            style={{ backgroundColor: room.accent }}
          />
        </span>
      </div>

      <div className="relative mt-3 space-y-1">
        {personas.map((p) => (
          <div key={p.role} className="flex items-baseline gap-2">
            <span
              className="mt-1 size-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: room.accent }}
            />
            <span className="text-xs font-medium">{p.role}</span>
            <span className="truncate text-[11px] text-muted-foreground">{p.title}</span>
          </div>
        ))}
      </div>

      <div className="relative mt-3 grid grid-cols-3 gap-2 border-t pt-3">
        {metrics.map((m) => (
          <div key={m.label}>
            <p className="text-sm font-semibold" style={{ color: room.accent }}>
              {m.value}
            </p>
            <p className="text-[10px] leading-tight text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>
    </Link>
  );
}

export function HouseDiagram() {
  return (
    <div className="panel grid-lines relative overflow-hidden p-4 sm:p-7">
      <div className="relative mx-auto max-w-5xl">
        {/* Roof */}
        <div className="relative">
          <div
            className="mx-auto h-0 w-0 border-x-transparent"
            style={{
              borderLeftWidth: "clamp(60px, 12vw, 130px)",
              borderRightWidth: "clamp(60px, 12vw, 130px)",
              borderBottomWidth: "56px",
              borderBottomStyle: "solid",
              borderBottomColor: "color-mix(in oklab, var(--ms-cyan) 30%, transparent)",
              borderLeftStyle: "solid",
              borderRightStyle: "solid",
            }}
          />
          <div
            className="animate-float-soft mx-auto -mt-1 rounded-t-none rounded-b-2xl border border-t-0 px-6 py-4 text-center"
            style={{
              maxWidth: "42rem",
              borderColor: "color-mix(in oklab, var(--ms-cyan) 45%, transparent)",
              background: "color-mix(in oklab, var(--ms-cyan) 12%, transparent)",
            }}
          >
            <p className="text-xs tracking-[0.2em] text-ms-cyan uppercase">
              Executive Mission Control
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Value, risk, adoption and cross-functional signals for the whole house
            </p>
          </div>
        </div>

        {/* Building body */}
        <div
          className="mt-3 overflow-hidden rounded-2xl border"
          style={{
            borderColor: "color-mix(in oklab, var(--ms-blue) 32%, transparent)",
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--ms-blue) 8%, transparent), transparent)",
          }}
        >
          {floors.map((floor, fi) => (
            <div
              key={floor.label}
              className="animate-rise-in relative border-b last:border-b-0"
              style={{ animationDelay: `${fi * 80}ms` }}
            >
              <div className="flex">
                <div className="hidden w-32 shrink-0 items-center justify-center border-r px-2 sm:flex">
                  <span className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                    {floor.label}
                  </span>
                </div>
                <div className="grid flex-1 gap-3 p-3 md:grid-cols-2">
                  {floor.roomIds.map((id) => (
                    <RoomCell key={id} id={id} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Foundation */}
        <div
          className="mt-3 rounded-2xl border p-4 text-center"
          style={{
            borderColor: "color-mix(in oklab, var(--ms-green) 40%, transparent)",
            background: "color-mix(in oklab, var(--ms-green) 10%, transparent)",
          }}
        >
          <p className="text-xs tracking-[0.2em] text-ms-green uppercase">
            Agent365 Governance Foundation
          </p>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            Registry · ownership · policy · certification · audit · lifecycle
          </p>
        </div>

        {/* Bedrock */}
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
