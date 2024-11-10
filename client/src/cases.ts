export interface Case {
  id: number;
  title: string;
  issues: string[];
  outcome: string[];
  emoji: string;
  pdfUrl: string;
}

export const cases: Case[] = [
  {
      "id": 1,
      "title": "Zavala Vasquez v. Sanchez Morado",
      "emoji": "🏠",
      "issues": [
          "Mold in multiple rooms",
          "Damaged, foul-smelling carpet",
          "Single functioning electrical outlet",
          "Non-functioning stove and burners"
      ],
      "outcome": [
          "Reduction in monthly rent by $300",
          "Reimbursement for previous overcharges",
          "Order to address mold and carpet issues",
          "Installation of new stove and fan"
      ],
      "pdfUrl": "http://rent-cases.replit.app/petition/California_1556 2023.11.21 HODecision_Redacted.pdf"
  }

,
  {
      "id": 2,
      "title": "Campos v. The Arbors at Mountain View",
      "emoji": "💰",
      "issues": [
          "Unlawful rent increases",
          "Peeling paint and mold in bathrooms",
          "Cracked flooring in living room",
          "Non-functioning kitchen stove"
      ],
      "outcome": [
          "Rent recalculated with reduction to $2,033.39",
          "Reimbursement of overpaid rent",
          "Order for prompt repairs to mold and stove",
          "Further inspections scheduled"
      ],
      "pdfUrl": "/petition/California_2200 2024.04.24 HODecision_Redacted.pdf"
  }
,
  {
      "id": 3,
      "title": "Williams v. Shoreline Village LLC",
      "emoji": "🏘️",
      "issues": [
          "Proposed 10% rent increase",
          "Hardship due to limited income",
          "Base rent improperly calculated",
          "Excessive financial strain on tenant"
      ],
      "outcome": [
          "Rent capped at $1,444.58",
          "Request for hardship reduction granted",
          "Future increases limited under hardship clause",
          "Tenant remains in affordable housing"
      ],
      "pdfUrl": "/petition/Central_511 2024.01.11 HODecision_Redacted.pdf"
  }
,
  {
      "id": 4,
      "title": "Rosas Torres v. Tenant Planet Inc.",
      "emoji": "📈",
      "issues": [
          "Improper 10% rent increase",
          "Discrepancy in rent calculations",
          "Lack of property registration",
          "Unresponsiveness in mediation attempts"
      ],
      "outcome": [
          "Rent corrected to $2,402.40",
          "5% rent increase enforced",
          "Tenant compensated for overpayments",
          "Property compliance required"
      ],
      "pdfUrl": "/petition/Chiquita_465 2023.08.04 HODecision_Redacted.pdf"
  }
,
  {
      "id": 5,
      "title": "Unlawful Rent Increase Case: Naranjo vs. Cervantes",
      "emoji": "🏠",
      "issues": [
          "Unauthorized rent increase in September 2022",
          "Multiple rent increases within 12-month period",
          "Lack of registration with Rent Stabilization Program",
          "Unspecified utilities charged monthly"
      ],
      "outcome": [
          "Rent reduced to base rate of $1,795",
          "Awarded a rent rebate of $89 monthly",
          "No compliance penalties applied",
          "Continued utility charges confirmed lawful"
      ],
      "pdfUrl": "/petition/Church_31 2023.02.13 HODecision_Redacted.pdf"
  }
,
  {
      "id": 6,
      "title": "Compliance Dispute: Naranjo vs. Cervantes",
      "emoji": "🔧",
      "issues": [
          "Delayed rent credits from initial ruling",
          "Dispute on utility overcharges",
          "Rent not adjusted to base amount",
          "Communication delays from landlord"
      ],
      "outcome": [
          "Full rent credit of $759 monthly until compliance",
          "Refund of excess rent charges, $500 deposit included",
          "Utility charge capped per initial ruling",
          "Base rent confirmed at $1,795 monthly"
      ],
      "pdfUrl": "/petition/Church_31 2024.03.25 HODecision_Redacted.pdf"
  }
,
  {
      "id": 7,
      "title": "Incorrect Base Rent Calculation: West & Snow vs. Americana I, LLC",
      "emoji": "💼",
      "issues": [
          "Base rent calculation excludes rent concessions",
          "Pet rent added without correct adjustment",
          "Increased security deposit unlawfully added",
          "Rent raised without allowance for concessions"
      ],
      "outcome": [
          "Base rent adjusted to $2,020.51",
          "Refund of $6,072 for excess rent",
          "Monthly pet rent capped at $50",
          "Adjusted security deposit credited"
      ],
      "pdfUrl": "/petition/Continental_707 2023.05.19 HODecision_Redacted.pdf"
  }
,
  {
      "id": 8,
      "title": "Rent Compliance Review: West & Snow vs. Americana I, LLC",
      "emoji": "📄",
      "issues": [
          "Non-compliance with prior rent adjustment",
          "Rent overpayments continuing post-ruling",
          "Delayed rent credit adjustments",
          "Refunds issued as credits instead of checks"
      ],
      "outcome": [
          "Overcharge refund of $6,072 credited",
          "Base rent adjusted to $2,030.67 monthly",
          "Additional credits of $1,509.49 for excess",
          "Full compliance mandated by February 2024"
      ],
      "pdfUrl": "/petition/Continental_707 2024.03.04 HOCPDecision_Redacted.pdf"
  }
,
  {
      "id": 9,
      "title": "Habitability Issue: Saravia vs. Solano Apartments LP",
      "emoji": "🏚️",
      "issues": [
          "Windows not replaced within promised timeframe",
          "Heating system inadequate during winter",
          "Cold air leaking into bedrooms",
          "High utility bills due to poor insulation"
      ],
      "outcome": [
          "Rent credit of $139 for delayed window replacement",
          "No further award for heating issues",
          "Heating system adjustments mandated",
          "Resolution of heating complaint in March 2023"
      ],
      "pdfUrl": "/petition/Crestview_1050 2023.08.31 HODecision_Redacted.pdf"
  }
,
  {
      "id": 10,
      "title": "Symekher vs. Del Medio Manor, LLP",
      "emoji": "🏠",
      "issues": [
          "Unexpected rent increase by 10%",
          "Tenant income below area median",
          "Landlord used 'banked increases' strategy"
      ],
      "outcome": [
          "Rent reduction ordered for undue hardship",
          "Rebate for rent increases since Sept. 1, 2022"
      ],
      "pdfUrl": "/petition/Del Medio_141 2022.11.04 HODecision_Redacted.pdf"
  }
,
  {
      "id": 11,
      "title": "Antonova vs. Del Medio Manor, LLP",
      "emoji": "💰",
      "issues": [
          "Household income below 120% AMI",
          "Tenant experiencing financial hardship",
          "Rent increased despite hardship claim"
      ],
      "outcome": [
          "Temporary rent reduction awarded",
          "Rebate applied for recent increases"
      ],
      "pdfUrl": "/petition/Del Medio_141 2022.11.08 HODecision_Redacted.pdf"
  }
,
        {
            "id": 12,
            "title": "Tanaka vs. Del Medio Manor, LLP",
            "emoji": "🏠",
            "issues": [
                "Rent increase despite low income",
                "Dispute over girlfriend's financial contribution",
                "Landlord non-compliant with registration"
            ],
            "outcome": [
                "Rent modification applied for hardship",
                "Partial rebate for recent rent increases"
            ],
            "pdfUrl": "/petition/Del Medio_141 2022.11.18 HODecision_Redacted.pdf"
        }
,
              {
                  "id": 13,
                  "title": "Pauck vs. Del Medio Manor, LLP",
                  "emoji": "💸",
                  "issues": [
                      "Tenant income below area standard",
                      "Rent increased despite tenant age (senior)",
                      "Landlord unregistered property until Oct 2022"
                  ],
                  "outcome": [
                      "Rent adjusted for hardship and age",
                      "Reimbursement for banked rent increases"
                  ],
                  "pdfUrl": "/petition/DelMedio_141 2022.11.16 HODecision_Redacted.pdf"
              }
,
                    {
                        "id": 14,
                        "title": "Hernandez & Gonzalez vs. Highland Garden Apartments",
                        "emoji": "🌧️",
                        "issues": [
                            "Mold growth due to wall moisture",
                            "Delayed repairs by landlord",
                            "Health concerns due to mold exposure"
                        ],
                        "outcome": [
                            "Tenant awarded $7,050.60 for habitability reduction",
                            "Reimbursement for persistent maintenance issues"
                        ],
                        "pdfUrl": "/petition/Escuela_222 2023.10.16 HODecision_Redacted.pdf"
                    }
,
  { id: 15, title: "Hernandez vs Highland Garden Apartments", emoji: "🏠", issues: [ "Severe mold due to water leak", "Humidity issues on living room wall", "No action for two years", "Furniture moved repeatedly to address mold" ], outcome: [ "Tenant awarded $7,050.60 rent refund", "40% reduction in property value awarded", "Landlord held liable for reduced habitability", "Landlord disputed tenant's maintenance claims" ], pdfUrl: "/petition/Escuela_222 2024.01.25 AppealDecision_Redacted.pdf" },
  { id: 16, title: "Castillo vs Roque", emoji: "💰", issues: [ "Electrical issues in apartment outlets", "Severe cockroach infestation", "Water heater provided cold water", "Basement flooding from kitchen sink leak" ], outcome: [ "Tenant awarded downward rent adjustment", "Issues caused major habitability reduction", "Repairs delayed; no rent paid from May 2022", "City inspection accelerated needed repairs" ], pdfUrl: "/petition/Higdon_1826 2023.02.23 HODecision_Redacted.pdf" }

,
  { id: 17, title: "Yaghoubzadeh vs TFT Investments", emoji: "🏚️", issues: [ "Mold in garage and living room", "Living room wall leak not repaired", "Garage roof tarp only temporary fix", "Repeated tenant requests for maintenance" ], outcome: [ "Tenant awarded $1,293 rent refund", "20% rent reduction due to mold", "Roof leak repair delays cited", "Landlord's compliance insufficient" ], pdfUrl: "/petition/Montecito_1260 2023.10.24 AppealDecision_Redacted.pdf" },
    {
      id: 18,
      title: "Castro vs Washington Square",
      emoji: "🏠",
      issues: [
          "Unnotified rent increase for June-August 2022",
          "Tenant struggled with increased rent",
          "Lack of prior notice on back rent",
          "Balance due unexpectedly during pandemic"
      ],
      outcome: [
          "Tenant paid increased rent of $2,510",
          "No monetary award adjustment"
      ],
      pdfUrl: "/petition/Montecito_1375 2022.12.14 HODecision_Redacted.pdf"
    },
    {
      id: 19,
      title: "Toepper vs Avery Shadows",
      emoji: "💰",
      issues: [
          "Banked rent increase exceeded hardship limits",
          "Petitioner's income mostly allocated to rent",
          "Petitioner is senior, 65+ years old",
          "Rent increased to $2,247 including back increases"
      ],
      outcome: [
          "Reduced rent to alleviate financial hardship",
          "Petitioner received rent adjustment"
      ],
      pdfUrl: "/petition/NShoreline_750 2022.12.08 HODecision_Redacted.pdf"
    },
    {
      id: 20,
      title: "Grigorov vs SI VI LLC",
      emoji: "🏠",
      issues: [
          "Base rent miscalculated with concessions",
          "Rent increased without accurate base rent",
          "Tenants billed for utilities, insurance, trash",
          "Incorrect application of rent adjustments"
      ],
      outcome: [
          "Refund of $1,454.95 to tenants",
          "Corrected base rent calculations"
      ],
      pdfUrl: "/petition/NWhisman_100 2023.03.23 HODecision_Redacted.pdf"
    },
    {
      id: 21,
      title: "Schwarz vs SI VI LLC",
      emoji: "💰",
      issues: [
          "Rent concessions not included in base rent",
          "Base rent improperly calculated",
          "Failure to apply concession adjustment",
          "Utilities billed separately without adjustment"
      ],
      outcome: [
          "Downward rent adjustment awarded",
          "Improper calculations corrected"
      ],
      pdfUrl: "/petition/NWhisman_100 2024.03.14 HODecision_Redacted.pdf"
    },
    {
      id: 22,
      title: "Lambert vs Cervantes LLC",
      emoji: "🏠",
      issues: [
          "Unregistered property under rent stabilization",
          "Unauthorized rent increase post initial term",
          "Rent concessions improperly documented",
          "RUBS utility billing disputed by tenant"
      ],
      outcome: [
          "Adjustment to base rent for compliance",
          "Refund of excess rent charged"
      ],
      pdfUrl: "/petition/Park_880 2023.04.12 HODecision_Redacted (1).pdf"
    }
,
  {
    id: 23,
    title: "Nwokidu vs Cervantes",
    emoji: "🏠",
    issues: [
      "Increased rent above lawful base",
      "Failure to notify of rent control",
      "Unregistered property with rent stabilization program",
      "Dispute over unpaid late fees"
    ],
    outcome: [
      "Rent rolled back to lawful base",
      "Late fees claim denied",
      "Rent refund awarded for overcharges",
      "Ongoing rent reduction of $50"
    ],
    pdfUrl: "/petition/Park_880 2023.04.12 HODecision_Redacted (2).pdf"
  },
  {
    id: 24,
    title: "Hammer vs Cervantes",
    emoji: "💰",
    issues: [
      "Excessive rent increase",
      "No rent stabilization notice",
      "Unregistered rental property",
      "Additional charges without explanation"
    ],
    outcome: [
      "Rent partially refunded for overpayment",
      "Rent reset to prior lawful amount",
      "Registration penalty applied to landlord",
      "Ongoing $45 rent reduction"
    ],
    pdfUrl: "/petition/Park_880 2023.04.13 HODecision_Redacted.pdf"
  },
  {
    id: 25,
    title: "Altuner vs WRL LLC",
    emoji: "🏠",
    issues: [
      "Unauthorized rent increase",
      "Frequent utility overcharges",
      "No lawful increase notification",
      "No rent rollback compliance"
    ],
    outcome: [
      "Utility refund of $1,784 awarded",
      "Rent rollback adjustment made",
      "Unlawful increase rescinded",
      "Ongoing $55 rent reduction"
    ],
    pdfUrl: "/petition/Rengstorff_429 2023.02.17 HODecision_Redacted.pdf"
  },
  {
    id: 26,
    title: "Sampayo vs MVCCC",
    emoji: "💧",
    issues: [
      "Water intrusion in bedroom",
      "No response to mold and odor",
      "Gardening service eliminated",
      "No lawful rent rollback"
    ],
    outcome: [
      "Refund of $24,347.67 for rent overages",
      "Ongoing 25% rent reduction",
      "Monthly reduction for lost services",
      "Maintenance orders issued for repairs"
    ],
    pdfUrl: "/petition/Rich_939 2024.02.01 HODecision_Redacted.pdf"
  },
  {
    id: 27,
    title: "Rivera vs Chen & Pan",
    emoji: "⚡",
    issues: [
      "Utility overcharges imposed",
      "Refusal to provide itemized billing",
      "Non-transparent utility calculations",
      "Higher charges after ownership change"
    ],
    outcome: [
      "Refund of excess utility charges",
      "Monthly reduction in utility fees",
      "Order to clarify utility charges",
      "Rent set to lawful base"
    ],
    pdfUrl: "/petition/Villa_1643 2023.06.30 HODecision_Redacted.pdf"
  }
,
  {
    id: 28,
    title: "Rivera vs Richards",
    emoji: "🏠",
    issues: [
      "Mold from leaking ceiling in bedroom",
      "Water leak onto car in parking lot",
      "Slow shower water flow",
      "Cracked bedroom walls"
    ],
    outcome: [
      "Tenant awarded rent reduction",
      "Refund for maintenance delays granted",
      "Partial compensation for unsafe conditions"
    ],
    pdfUrl: "/pdfs/Wentworth_1084 2024.05.06 HODecision_Redacted.pdf"
  },
  {
    id: 29,
    title: "Sierra vs Katz",
    emoji: "💰",
    issues: [
      "Rent raised beyond lawful limits",
      "Secondhand smoke infiltrating unit",
      "Rodent infestation",
      "Inadequate lighting in parking lot"
    ],
    outcome: [
      "Rent rollback to lawful rate",
      "Refund of $8,039.90 for smoke",
      "Additional $155.37 for infestation",
      "Parking lighting refund of $1,052.25"
    ],
    pdfUrl: "/pdfs/Whitney_2489 2024.03.20 HODecision_Redacted.pdf"
  },
  {
    id: 30,
    title: "Maciel vs Levin",
    emoji: "🏠",
    issues: [
      "Unlawful rent increase due to miscalculated base",
      "Charging for utilities mid-lease",
      "Peeling reglazing on bathroom fixtures",
      "Overflowing trash attracting vermin"
    ],
    outcome: [
      "Refund of $4,686.84 for rent miscalculation",
      "Utility charges of $956.63 refunded",
      "Monthly rent reduced by $100 for reglazing",
      "Credit of $400 for plumber charge"
    ],
    pdfUrl: "/pdfs/WMiddlefield_2120 2024.02.15 HODecision_Redacted.pdf"
  },
  {
    "id": 31,
    "title": "Wright vs Timpson Enterprises",
    "emoji": "🏠",
    "issues": [
      "Hot water consistently below minimum temperature",
      "Failure to maintain habitable premises",
      "Tenant informed landlord of issues",
      "Landlord did not resolve the issue in time"
    ],
    "outcome": [
      "Tenant awarded 10% rent reduction",
      "Tenant refunded $1,100 as rent rebate",
      "Ongoing credit of $7.33 per day",
      "Further credit if unresolved by next month"
    ],
    "pdfUrl": "/petition/Wright_1725 2023.06.09 HODecision_Redacted.pdf"
  },
  {
    "id": 32,
    "title": "Wright vs Timpson Enterprises",
    "emoji": "💰",
    "issues": [
      "Pre-hearing conference participation issues",
      "Incorrect health code used for temperature standard",
      "Dispute over accurate temperature measurement",
      "Unaddressed portable heater reimbursement"
    ],
    "outcome": [
      "Decision partially remanded for further evidence",
      "Affirmed need for adequate hot water standard",
      "Landlord’s appeal on pre-hearing timing denied",
      "Landlord's appeal on temperature measurement denied"
    ],
    "pdfUrl": "/petition/Wright_1725 2023.10.12 AppealDecision_Redacted.pdf"
  },
  {
    "id": 33,
    "title": "Wright vs Timpson Enterprises",
    "emoji": "🏠",
    "issues": [
      "Minimum hot water temperature of 110°F unmet",
      "Landlord disputed international temperature standard",
      "Petition for inadequate habitability compliance",
      "Dispute over rent credit calculation"
    ],
    "outcome": [
      "Tenant awarded 8% rent reduction ongoing",
      "Total refund of $2,640 awarded",
      "Credit of $5.87 per day until resolved",
      "Further increase if unresolved by April 2024"
    ],
    "pdfUrl": "/petition/Wright_1725 2024.04.03 RemandAppealDecision_Redacted.pdf"
  }




];