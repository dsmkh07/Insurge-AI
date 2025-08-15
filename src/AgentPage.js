import React from "react";
import { Link } from "react-router-dom";

export default function AgentPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">I-Venture Assistant</h1>
          <p className="text-gray-600">Your entrepreneurial journey companion</p>
        </div>
        <Link to="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Go to Dashboard
        </Link>
      </header>

      {/* Startup Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { value: "650+", label: "Startups Supported" },
          { value: "95+", label: "Startup Raised Funding" },
          { value: "3.2k cr+", label: "Funding Raised" },
          { value: "3k+", label: "Jobs Created" }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow text-center">
            <h2 className="text-3xl font-bold text-blue-700">{stat.value}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Info + Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Info */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Startup Resources & Information</h3>
          <p className="text-gray-700 leading-relaxed">
            I-Venture @ ISB fosters entrepreneurship and nurtures start-ups...
          </p>
          <a href="#" className="text-blue-600 font-medium mt-4 inline-block">More about I-Venture @ ISB →</a>
        </div>

        {/* Chat Box */}
        <div className="bg-white p-6 rounded-2xl shadow flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mb-4 self-end w-fit">
              Tell me about your incubation programs
            </div>
            <div className="bg-gray-100 p-3 rounded-lg w-fit">
              We have several incubation programs designed to support startups...
            </div>
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-3 border rounded-l-lg outline-none"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
