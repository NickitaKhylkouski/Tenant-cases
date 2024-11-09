export interface Case {
  id: number;
  title: string;
  issues: string[];
  outcome: string[];
  emoji: string;
}

export const cases: Case[] = [
  {
    id: 1,
    title: "Heating and Window Issues",
    emoji: "🏠",
    issues: [
      "Single-pane windows did not provide weather protection",
      "Heating system did not adequately heat the unit"
    ],
    outcome: [
      "Tenant did not meet the burden of proof for the window issue",
      "Tenant awarded a 50% rent reduction for three months for the heating issue"
    ]
  },
  // ... (remaining 29 cases)
];
