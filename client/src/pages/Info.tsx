import React from 'react';
import { Link } from 'wouter';
import { Home, Info as InfoIcon } from 'lucide-react';

const Info = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <nav className="mb-8">
          <Link href="/">
            <a className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <Home className="w-5 h-5 mr-2" />
              Back to Cases
            </a>
          </Link>
        </nav>

        <div className="space-y-8">
          <header className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
              <InfoIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">About Rental Case Summary Viewer</h1>
          </header>

          <section className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Purpose</h2>
              <p className="text-gray-600 leading-relaxed">
                This application serves as a comprehensive viewer for rental dispute cases, helping users understand common issues,
                resolutions, and legal precedents in rental situations. It provides easy access to 30 real-world cases with
                their outcomes and key details.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">📝</span>
                  <span>Detailed case summaries with issues and outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔍</span>
                  <span>Real-time search functionality across all cases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🏷️</span>
                  <span>Category indicators using relevant emojis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📱</span>
                  <span>Responsive design for all devices</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Case Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="flex items-center text-gray-700 mb-2">
                    <span className="text-2xl mr-2">🏠</span>
                    <span className="font-medium">General Housing Issues</span>
                  </p>
                  <p className="text-gray-600 text-sm">Basic housing and maintenance problems</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="flex items-center text-gray-700 mb-2">
                    <span className="text-2xl mr-2">💰</span>
                    <span className="font-medium">Financial Disputes</span>
                  </p>
                  <p className="text-gray-600 text-sm">Rent increases and payment issues</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="flex items-center text-gray-700 mb-2">
                    <span className="text-2xl mr-2">💧</span>
                    <span className="font-medium">Water Damage</span>
                  </p>
                  <p className="text-gray-600 text-sm">Water-related damages and mold issues</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="flex items-center text-gray-700 mb-2">
                    <span className="text-2xl mr-2">⚖️</span>
                    <span className="font-medium">Legal Proceedings</span>
                  </p>
                  <p className="text-gray-600 text-sm">Appeals and compliance cases</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Info;
