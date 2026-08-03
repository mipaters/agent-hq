import { createContext, useContext, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Compass, X } from "lucide-react";
import { walkthroughSteps } from "@/lib/hq-data";
import { Button } from "@/components/ui/button";

type Ctx = { start: () => void; active: boolean };
const WalkthroughContext = createContext<Ctx>({ start: () => {}, active: false });

export const useWalkthrough = () => useContext(WalkthroughContext);

export function WalkthroughProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<number | null>(null);
  const navigate = useNavigate();

  const go = (next: number) => {
    setStep(next);
    const target = walkthroughSteps[next];
    if (target) navigate({ to: target.to });
  };

  return (
    <WalkthroughContext.Provider value={{ start: () => go(0), active: step !== null }}>
      {children}
      {step !== null && (
        <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center p-4 sm:p-6">
          <div className="panel animate-rise-in w-full max-w-3xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div
                className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: "color-mix(in oklab, var(--ms-blue) 20%, transparent)" }}
              >
                <Compass className="size-5 text-ms-blue" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.18em] text-ms-cyan uppercase">
                    Executive walkthrough · Step {step + 1} of {walkthroughSteps.length}
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-semibold">{walkthroughSteps[step].title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{walkthroughSteps[step].body}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    disabled={step === 0}
                    onClick={() => go(step - 1)}
                  >
                    <ArrowLeft className="size-4" /> Back
                  </Button>
                  {step < walkthroughSteps.length - 1 ? (
                    <Button size="sm" onClick={() => go(step + 1)}>
                      Next <ArrowRight className="size-4" />
                    </Button>
                  ) : (
                    <Button size="sm" onClick={() => setStep(null)}>
                      Finish walkthrough
                    </Button>
                  )}
                  <div className="ml-auto flex gap-1.5">
                    {walkthroughSteps.map((s, i) => (
                      <span
                        key={s.title}
                        className="h-1.5 w-5 rounded-full transition-colors"
                        style={{
                          backgroundColor:
                            i <= step ? "var(--ms-blue)" : "color-mix(in oklab, var(--ms-blue) 22%, transparent)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <button
                aria-label="Close walkthrough"
                onClick={() => setStep(null)}
                className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </WalkthroughContext.Provider>
  );
}
