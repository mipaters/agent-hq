import { Link } from "@tanstack/react-router";
import { Compass, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useWalkthrough } from "@/components/hq/walkthrough";

const nav = [
  { to: "/", label: "Executive Command Center" },
  { to: "/rooms", label: "Rooms of the House" },
  { to: "/marketplace", label: "AI Agent Marketplace" },
  { to: "/mission-control", label: "Cross-Agent Mission Control" },
  { to: "/governance", label: "Agent365 Governance" },
  { to: "/architecture", label: "Microsoft Architecture" },
  { to: "/roi", label: "ROI & Value Realization" },
  { to: "/directory", label: "Agent Launch Directory" },
] as const;

const badges = [
  { label: "Microsoft-powered agent ecosystem", tone: "blue" },
  { label: "Governed by Agent365", tone: "green" },
  { label: "Enterprise AI Agent Marketplace blueprint", tone: "cyan" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const { start } = useWalkthrough();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="hero-surface sticky top-0 z-40 border-b bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-4 px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-semibold sm:text-xl">
              Agentic Telecom &amp; Media Company HQ
            </h1>
            <p className="text-xs text-muted-foreground sm:text-sm">
              AI operating model for a connected telecom and media enterprise
            </p>
          </div>
          <div className="hidden flex-wrap gap-2 lg:flex">
            {badges.map((b) => (
              <span
                key={b.label}
                className="rounded-full border px-3 py-1 text-[11px] font-medium"
                style={{
                  color: `var(--ms-${b.tone})`,
                  borderColor: `color-mix(in oklab, var(--ms-${b.tone}) 40%, transparent)`,
                  background: `color-mix(in oklab, var(--ms-${b.tone}) 14%, transparent)`,
                }}
              >
                {b.label}
              </span>
            ))}
          </div>
          <Button size="sm" onClick={start}>
            <Compass className="size-4" /> Start Executive Walkthrough
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <Menu className="size-4" />
          </Button>
        </div>
        <nav
          className={`mx-auto max-w-[1400px] gap-1 overflow-x-auto px-3 pb-3 sm:px-5 ${open ? "flex flex-col" : "hidden"} md:flex md:flex-row`}
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{
                className: "bg-secondary text-foreground font-medium",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6">{children}</main>
      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        Executive demonstration environment · mock data only · no live integrations
      </footer>
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6 max-w-3xl">
      <p className="text-xs font-semibold tracking-[0.2em] text-ms-cyan uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
