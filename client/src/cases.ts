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
    ],
    pdfUrl: "/pdfs/case-1-heating-windows.pdf"
  },
  {
    id: 2,
    title: "Rent Increase and Low Income Case",
    emoji: "💰",
    issues: [
      "Rent increase of almost 10%",
      "Tenant's income was significantly lower",
      "Landlord non-compliant with registration"
    ],
    outcome: [
      "Tenant awarded a reduction in rent",
      "Rebate for banked increases paid since Sept. 1, 2022"
    ],
    pdfUrl: "/pdfs/case-2-rent-increase.pdf"
  },
  {
    id: 3,
    title: "Severe Mold Growth Case",
    emoji: "💧",
    issues: [
      "Extensive mold growth over time",
      "Landlord failed to make timely repairs",
      "Mold negatively impacted tenant health"
    ],
    outcome: [
      "Tenants awarded $7,050.60 for habitability reduction"
    ],
    pdfUrl: "/pdfs/case-3-severe-mold-growth.pdf"
  },
  {
    id: 4,
    title: "Multiple Habitability Issues",
    emoji: "🔧",
    issues: [
      "Water leak causing strong smells",
      "Broken windows and cracks in walls",
      "Pest/rodent infestation"
    ],
    outcome: [
      "Tenant awarded $46,834.50 in rent refund",
      "Ongoing monthly rent reduction of $310.50"
    ],
    pdfUrl: "/pdfs/case-4-multiple-habitability-issues.pdf"
  },
  {
    id: 5,
    title: "Water Damage and Mold Case",
    emoji: "💧",
    issues: [
      "Water leak from roof caused mold",
      "Landlord took two months to address the leak",
      "Tenant's elderly mother could not use parts of the unit"
    ],
    outcome: [
      "Tenant awarded a 25% rent reduction",
      "Rent refund of $1,293.00 awarded"
    ],
    pdfUrl: "/pdfs/case-5-water-damage-mold.pdf"
  },
  {
    id: 6,
    title: "Rent Concessions Dispute",
    emoji: "💰",
    issues: [
      "Landlord did not factor rent concessions into base rent",
      "Tenant faced unlawful rent increase"
    ],
    outcome: [
      "No monetary award specified"
    ],
    pdfUrl: "/pdfs/case-6-rent-concessions-dispute.pdf"
  },
  {
    id: 7,
    title: "Banked Rent Increases Hardship",
    emoji: "💰",
    issues: [
      "Landlord attempted to apply banked rent increases",
      "Tenant argued banked increases would be an undue hardship"
    ],
    outcome: [
      "Tenant did not have to pay banked rent increases"
    ],
    pdfUrl: "/pdfs/case-7-banked-rent-increases-hardship.pdf"
  },
  {
    id: 8,
    title: "Bathroom and Parking Issues",
    emoji: "🔧",
    issues: [
      "Peeling reglazing in the bathroom",
      "Overflowing trash bins attracting vermin",
      "Trash bins blocking assigned parking"
    ],
    outcome: [
      "$4,850 awarded for bathroom and trash issues",
      "$100 monthly rent reduction until parking issue resolved"
    ],
    pdfUrl: "/pdfs/case-8-bathroom-parking-issues.pdf"
  },
  {
    id: 9,
    title: "Bedroom Mold and Water Damage",
    emoji: "💧",
    issues: [
      "Mold in bedroom from ceiling leak",
      "Water leak in the parking lot",
      "Cracked bedroom walls"
    ],
    outcome: [
      "$5,100 awarded for various issues",
      "$150 monthly rent reduction until issues resolved"
    ],
    pdfUrl: "/pdfs/case-9-bedroom-mold-water-damage.pdf"
  },
  {
    id: 10,
    title: "Secondhand Smoke and Base Rent Dispute",
    emoji: "⚖️",
    issues: [
      "Incorrect base rent calculation",
      "Unlawful rent increases",
      "Secondhand smoke from another unit"
    ],
    outcome: [
      "$11,722.03 awarded for habitability violations",
      "$11,016 awarded for secondhand smoke issues"
    ],
    pdfUrl: "/pdfs/case-10-secondhand-smoke-base-rent-dispute.pdf"
  },
  {
    id: 11,
    title: "Property Registration and Pest Issues",
    emoji: "🏠",
    issues: [
      "Unregistered property with RSP",
      "Ant and spider infestation",
      "Cloudy and discolored water"
    ],
    outcome: [
      "The tenant was awarded $460",
      "$230 for the security gate issue and $230 for the ant infestation"
    ],
    pdfUrl: "/pdfs/case-11-property-registration-pest-issues.pdf"
  },
  {
    id: 12,
    title: "Outdoor Patio Maintenance Case",
    emoji: "🔧",
    issues: [
      "Cracked and uneven outdoor patio",
      "Tenant requested a rent reduction",
      "No evidence submitted for maintenance violation"
    ],
    outcome: [
      "Rent was reduced by 5%",
      "Tenant to receive $748.36 in rent reimbursement",
      "Rent reduced to $710.95 until repairs are completed"
    ],
    pdfUrl: "/pdfs/case-12-outdoor-patio-maintenance.pdf"
  },
  {
    id: 13,
    title: "Roach Infestation and Noise Issues",
    emoji: "🏠",
    issues: [
      "Reoccurring roach infestation",
      "Noise complaints from a neighboring tenant",
      "Tenant requested a rent reduction/rebate"
    ],
    outcome: [
      "Rent was reduced by 7.5%",
      "Tenant awarded $1083.55 in rent reimbursement"
    ],
    pdfUrl: "/pdfs/case-13-roach-infestation-noise-issues.pdf"
  },
  {
    id: 14,
    title: "Property Management Issues",
    emoji: "🔧",
    issues: [
      "Property management and maintenance concerns",
      "Issues with elevator, lights, bugs, paths, trees, and creek",
      "Tenants requested a rent reduction"
    ],
    outcome: [
      "Rent was reduced by 7.5%",
      "Tenants awarded $268.56 in reimbursement"
    ],
    pdfUrl: "/pdfs/case-14-property-management-issues.pdf"
  },
  {
    id: 15,
    title: "Multiple Rent Increases Case",
    emoji: "💰",
    issues: [
      "Landlord failed to register the property with the rent stabilization program",
      "Landlord increased rent twice within a twelve-month period"
    ],
    outcome: [
      "Tenant awarded a $2,209.00 refund"
    ],
    pdfUrl: "/pdfs/case-15-multiple-rent-increases.pdf"
  },
  {
    id: 16,
    title: "Water Damage and Rent Rollback",
    emoji: "💧",
    issues: [
      "Landlord did not roll back rent when the rent stabilization law passed",
      "The unit had water damage and a decrease in housing services"
    ],
    outcome: [
      "Tenant awarded $9,480.67 plus an ongoing reduction of $475.00 per month"
    ],
    pdfUrl: "/pdfs/case-16-water-damage-rent-rollback.pdf"
  },
  {
    id: 17,
    title: "Utility Charges and Security Deposit",
    emoji: "💰",
    issues: [
      "New utility charges added to lease",
      "Increase in security deposit",
      "Lost records from previous owners"
    ],
    outcome: [
      "No decision specified in the source"
    ],
    pdfUrl: "/pdfs/case-17-utility-charges-security-deposit.pdf"
  },
  {
    id: 18,
    title: "Mold Case Appeal",
    emoji: "⚖️",
    issues: [
      "Landlord failed to comply with prior mold case decision",
      "Landlord argued tenants contributed to the mold",
      "Landlord argued the photo was inaccurate"
    ],
    outcome: [
      "Appeal denied, previous decision upheld",
      "$7,050.60 rent refund for the tenants"
    ],
    pdfUrl: "/pdfs/case-18-mold-case-appeal.pdf"
  },
  {
    id: 19,
    title: "Household Income Disclosure Case",
    emoji: "⚖️",
    issues: [
      "Tenant did not disclose household member income",
      "Tenant had inadequate income",
      "Landlord non-compliant with registration"
    ],
    outcome: [
      "Tenant awarded a reduction in rent",
      "Reduction equivalent to banked increases after Oct. 9, 2022"
    ],
    pdfUrl: "/pdfs/case-19-household-income-disclosure.pdf"
  },
  {
    id: 20,
    title: "Late Petition Filing Case",
    emoji: "⚖️",
    issues: [
      "Tenant filed petition late",
      "Landlord did not give banked increase notices",
      "Tenant's income was significantly lower"
    ],
    outcome: [
      "Tenant awarded a reduction in rent",
      "Reduction equal to banked increases after Oct. 9, 2022"
    ],
    pdfUrl: "/pdfs/case-20-late-petition-filing.pdf"
  },
  {
    id: 21,
    title: "Compliance Hearing Case",
    emoji: "⚖️",
    issues: [
      "Compliance hearing for previous case",
      "Tenant argued repairs were not completed",
      "Gap under the door allowed pests entry"
    ],
    outcome: [
      "Landlord found to be in partial compliance",
      "Ongoing rent rebate for September - November 2023"
    ],
    pdfUrl: "/pdfs/case-21-compliance-hearing.pdf"
  },
  {
    id: 22,
    title: "Utility Fees and Rent Concession",
    emoji: "💰",
    issues: [
      "Landlord incorrectly applied rent concession to base rent",
      "Landlord excluded utility fees from the base rent calculation"
    ],
    outcome: [
      "Tenant awarded a $7,321.44 credit"
    ],
    pdfUrl: "/pdfs/case-22-utility-fees-rent-concession.pdf"
  },
  {
    id: 23,
    title: "Rent Stabilization Information Case",
    emoji: "⚖️",
    issues: [
      "Landlord did not include rent stabilization information in the lease",
      "Landlord incorrectly calculated base rent after the lease expired"
    ],
    outcome: [
      "Tenant awarded a $309.76 refund"
    ],
    pdfUrl: "/pdfs/case-23-rent-stabilization-information.pdf"
  },
  {
    id: 24,
    title: "Base Rent Calculation Case",
    emoji: "💰",
    issues: [
      "Landlord did not mention rent stabilization in the lease",
      "Landlord incorrectly calculated base rent after lease expired"
    ],
    outcome: [
      "Tenant awarded a $1,709.75 refund"
    ],
    pdfUrl: "/pdfs/case-24-base-rent-calculation.pdf"
  },
  {
    id: 25,
    title: "Mold and Rent Increase Dispute",
    emoji: "💧",
    issues: [
      "Mold in rental unit",
      "Unwanted rent increase",
      "Non-functioning kitchen lights"
    ],
    outcome: [
      "$8,217.06 awarded to the tenant",
      "Monthly rent credits issued to the tenant",
      "Landlord must maintain the property"
    ],
    pdfUrl: "/pdfs/case-25-mold-rent-increase-dispute.pdf"
  },
  {
    id: 26,
    title: "Unlawful Rent Increase and Maintenance Issues",
    emoji: "💰",
    issues: [
      "Unlawful rent increase based on incorrect base rent",
      "Mold in the bathrooms",
      "Dishwasher not working"
    ],
    outcome: [
      "$7,596.30 awarded for unlawful rent",
      "$800.00 awarded for failure to maintain or repair",
      "Correct base rent determined"
    ],
    pdfUrl: "/pdfs/case-26-unlawful-rent-increase-maintenance.pdf"
  },
  {
    id: 27,
    title: "Low Income Tenant Hardship Case",
    emoji: "💰",
    issues: [
      "Tenant hardship due to low income",
      "Rent increase included a banked increase",
      "Incorrectly calculated base rent"
    ],
    outcome: [
      "Banked rent increase removed",
      "Lawful rent set at $1,485.75",
      "Tenant awarded refund for rent overpayments"
    ],
    pdfUrl: "/pdfs/case-27-low-income-tenant-hardship.pdf"
  },
  {
    id: 28,
    title: "Simple Rent Overcharge Case",
    emoji: "💰",
    issues: [
      "Unlawful rent increase",
      "Tenant overcharged rent"
    ],
    outcome: [
      "$1,487.20 awarded to tenant plus overpayment reimbursement after August 1, 2023"
    ],
    pdfUrl: "/pdfs/case-28-simple-rent-overcharge.pdf"
  },
  {
    id: 29,
    title: "Multiple Illegal Rent Increases",
    emoji: "💰",
    issues: [
      "Multiple rent increases in a 12-month period",
      "Incorrect base rent calculation"
    ],
    outcome: [
      "$3,040.42 rent overpayment awarded plus additional overpayments for February 2023",
      "Landlord cannot raise rent until property is registered"
    ],
    pdfUrl: "/pdfs/case-29-multiple-illegal-rent-increases.pdf"
  },
  {
    id: 30,
    title: "Pet Deposit and Rent Concessions Dispute",
    emoji: "💰",
    issues: [
      "Unlawful rent increase due to failure to account for concessions",
      "Landlord collected an unlawful pet deposit"
    ],
    outcome: [
      "$6,072.11 awarded for rent overpayments",
      "$500.00 unlawful pet deposit to be refunded",
      "Base rent rolled back"
    ],
    pdfUrl: "/pdfs/case-30-pet-deposit-rent-concessions.pdf"
  }
];