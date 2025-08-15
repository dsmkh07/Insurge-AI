import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow p-4 space-y-4">
        <h2 className="text-lg font-bold text-blue-900">Insurge AI</h2>
        <nav className="space-y-2">
          {["Conversations", "Credit Usage", "Analytics", "Tool Connections", "Knowledge Base"].map((item) => (
            <a
              key={item}
              href="#"
              className="block p-2 rounded hover:bg-blue-100 text-gray-700 font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
        <Link to="/" className="block p-2 rounded bg-blue-600 text-white text-center">
          Back to Agent Page
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Conversations Table */}
        <section className="bg-white p-4 rounded-2xl shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Conversations</h3>
            <select className="border rounded p-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600">
                <th className="pb-2">User ID</th>
                <th className="pb-2">Agent</th>
                <th className="pb-2">Date / Time</th>
                <th className="pb-2">Messages</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td>1234</td>
                <td>Real Estate Agent</td>
                <td>09 Aug 2025 14:23</td>
                <td className="text-blue-600 cursor-pointer">View Transcript</td>
              </tr>
              <tr className="border-t">
                <td>5678</td>
                <td>SaaS Demo Agent</td>
                <td>09 Aug 2025 11:05</td>
                <td className="text-blue-600 cursor-pointer">View Transcript</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Credit Usage */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { title: "AI Usage", value: "72,000 / 100,000" },
            { title: "STT Usage", value: "350 min" },
            { title: "TTS Usage", value: "480,000 / 1,000,000" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow">
              <h4 className="font-semibold text-gray-700">{stat.title}</h4>
              <p className="text-blue-700 text-xl font-bold">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Analytics */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h4 className="font-semibold text-gray-700">Total Conversations</h4>
            <p className="text-blue-700 text-xl font-bold">2,145</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <h4 className="font-semibold text-gray-700">Slides Shown</h4>
            <p className="text-blue-700 text-xl font-bold">4,120</p>
          </div>
        </section>
      </main>
    </div>
  );
}
