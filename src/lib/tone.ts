export type Tone = "blue" | "cyan" | "teal" | "green" | "amber" | "red" | "violet" | string;

export const toneVar = (tone: Tone) => `var(--ms-${tone === "violet" ? "violet" : tone})`;

export const toneChip = (tone: Tone) => ({
  color: toneVar(tone),
  backgroundColor: `color-mix(in oklab, ${toneVar(tone)} 16%, transparent)`,
  borderColor: `color-mix(in oklab, ${toneVar(tone)} 40%, transparent)`,
});

export const riskTone = (risk: string) =>
  risk === "High" ? "red" : risk.startsWith("Low") ? "green" : "amber";

export const certTone = (cert: string) =>
  cert === "Certified" ? "green" : cert === "Production candidate" ? "cyan" : "amber";
