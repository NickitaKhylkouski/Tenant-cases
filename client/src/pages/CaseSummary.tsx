import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Info as InfoIcon } from 'lucide-react';
import { Link } from 'wouter';

interface Case {
  id: number;
  title: string;
  issues: string[];
  outcome: string[];
  emoji: string;
}

const CaseSummary = () => {
  const [openCase, setOpenCase] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const cases: Case[] = [
    {
      id: 1,
      title: "Heating and Window Issues",
      emoji: "🌡️",
      issues: [
        "Single-pane windows did not provide weather protection",
        "Heating system did not adequately heat the unit"
      ],
      outcome: [
        "Tenant did not meet the burden of proof for the window issue",
        "Tenant awarded a 50% rent reduction for three months for the heating issue"
      ]
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
      ]
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
      ]
    },
    // ... Continue with the rest of the cases array with id and emoji properties
  ].map((caseItem, index) => ({ ...caseItem, id: index + 1 }));

  const filteredCases = searchQuery.trim() === '' 
    ? cases 
    : cases.filter(caseItem => {
        const searchLower = searchQuery.toLowerCase();
        return (
          caseItem.title.toLowerCase().includes(searchLower) ||
          caseItem.issues.some(issue => issue.toLowerCase().includes(searchLower)) ||
          caseItem.outcome.some(result => result.toLowerCase().includes(searchLower))
        );
      });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Rental Case Summaries
          </h1>
          <Link href="/info" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <InfoIcon className="w-5 h-5 mr-2" />
            About
          </Link>
        </div>

        {/* Search Input */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Showing {filteredCases.length} of {cases.length} cases
          </p>
        </div>

        <div className="space-y-3">
          {filteredCases.map((caseItem) => (
            <div 
              key={caseItem.id} 
              className="border border-gray-200 rounded-lg transition-all duration-200 hover:border-gray-300"
            >
              <button
                onClick={() => setOpenCase(openCase === caseItem.id ? null : caseItem.id)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="text-lg font-medium text-gray-900 flex items-center gap-2">
                  <span className="text-sm text-gray-500">#{caseItem.id}</span>
                  <span className="mr-2">{caseItem.emoji}</span>
                  {caseItem.title}
                </span>
                {openCase === caseItem.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openCase === caseItem.id && (
                <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-lg">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-red-600 mb-3">Issues:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {caseItem.issues.map((issue, i) => (
                          <li key={i} className="text-red-700">{issue}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-600 mb-3">Outcome:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {caseItem.outcome.map((result, i) => (
                          <li key={i} className="text-green-700">{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseSummary;
