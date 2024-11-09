import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Case {
  title: string;
  issues: string[];
  outcome: string[];
}

const CaseSummary = () => {
  const [openCase, setOpenCase] = useState<number | null>(null);

  const cases: Case[] = [
    {
      title: "Heating and Window Issues",
      issues: [
        "Single-pane windows did not provide weather protection",
        "Heating system did not adequately heat the unit"
      ],
      outcome: [
        "Tenant did not meet the burden of proof for the window issue",
        "Tenant awarded a 50% rent reduction for three months for the heating issue"
      ]
    },
    // ... rest of the cases data
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Rental Case Summaries
        </h1>
        <div className="space-y-3">
          {cases.map((caseItem, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg transition-all duration-200 hover:border-gray-300"
            >
              <button
                onClick={() => setOpenCase(openCase === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="text-lg font-medium text-gray-900">
                  {caseItem.title}
                </span>
                {openCase === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openCase === index && (
                <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-lg">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-red-600 mb-3">Issues:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {caseItem.issues.map((issue, i) => (
                          <li key={i} className="text-red-700">
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-600 mb-3">Outcome:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {caseItem.outcome.map((result, i) => (
                          <li key={i} className="text-green-700">
                            {result}
                          </li>
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
