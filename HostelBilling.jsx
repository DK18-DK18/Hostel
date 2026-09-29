import React from "react";
import "./HostelBilling.css";

const menuItems = [
  { label: "Admin", icon: "👤" },
  { label: "Hostel Registration", icon: "🏨" },
  { label: "Room Design", icon: "🛏️" },
  { label: "Hostel Rates", icon: "💰" },
  { label: "Customer detail", icon: "📋" },
  { label: "", icon: "+", empty: true },
];

export default function HostelBilling() {
  const handleClick = (label) => {
    if (label) {
      alert(`${label} selected`);
    }
  };

  return (
    <div className="app">

      {/* Main Content */}
      <main className="main">

        {/* Header */}
        <header className="header">
          <div className="logo">HB</div>

          <h1>Hostel Billing System</h1>
        </header>

        {/* Dashboard */}
        <section className="dashboard">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`menu-card ${item.empty ? "empty-card" : ""}`}
              onClick={() => handleClick(item.label)}
            >
              <span className="card-icon">{item.icon}</span>

              {item.label && (
                <span className="card-title">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </section>

      </main>
    </div>
  );
}
