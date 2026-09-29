import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="app-header">
        <div>
          <h3 className="mb-0">HOSTEL BILLING SYSTEM</h3>
          <small>Hostel Management & Billing</small>
        </div>

        <div className="header-user">
          <span>SUPER ADMIN</span>
        </div>
      </header>

      <div className="app-body">

        {/* Sidebar */}
        <aside className="sidebar">

          <div className="sidebar-title">
            MAIN MENU
          </div>

          <button className="menu-item active">
            Dashboard
          </button>

          <button className="menu-item">
            Hostels
          </button>

          <button className="menu-item">
            Hostel Licenses
          </button>

          <button className="menu-item">
            Users
          </button>

          <button className="menu-item">
            Reports
          </button>

          <div className="sidebar-title mt-4">
            ACCOUNT
          </div>

          <button className="menu-item">
            Settings
          </button>

          <button className="menu-item">
            Logout
          </button>

        </aside>

        {/* Main Content */}
        <main className="main-content">

          <div className="page-header">
            <div>
              <h2>Dashboard</h2>
              <p>
                Welcome to Hostel Billing System
              </p>
            </div>

            <button className="btn btn-primary">
              + Add Hostel
            </button>
          </div>

          {/* Statistics */}
          <div className="row g-4">

            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon blue">
                  H
                </div>

                <div>
                  <div className="stat-title">
                    Total Hostels
                  </div>

                  <div className="stat-value">
                    0
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon green">
                  A
                </div>

                <div>
                  <div className="stat-title">
                    Active Licenses
                  </div>

                  <div className="stat-value">
                    0
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon orange">
                  E
                </div>

                <div>
                  <div className="stat-title">
                    Expired Licenses
                  </div>

                  <div className="stat-value">
                    0
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon purple">
                  U
                </div>

                <div>
                  <div className="stat-title">
                    Total Users
                  </div>

                  <div className="stat-value">
                    0
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Actions */}
          <div className="content-card mt-4">

            <div className="card-header-custom">
              <h5>Quick Actions</h5>
            </div>

            <div className="row g-3">

              <div className="col-md-4">
                <button className="quick-action">
                  <strong>+ Register Hostel</strong>
                  <span>
                    Create a new hostel
                  </span>
                </button>
              </div>

              <div className="col-md-4">
                <button className="quick-action">
                  <strong>License Management</strong>
                  <span>
                    Manage hostel subscriptions
                  </span>
                </button>
              </div>

              <div className="col-md-4">
                <button className="quick-action">
                  <strong>View Reports</strong>
                  <span>
                    View system reports
                  </span>
                </button>
              </div>

            </div>

          </div>

          {/* System Status */}
          <div className="content-card mt-4">

            <div className="card-header-custom">
              <h5>System Status</h5>
            </div>

            <div className="status-row">

              <div>
                <strong>Application</strong>
                <span>Running</span>
              </div>

              <div>
                <strong>Database</strong>
                <span>Not connected yet</span>
              </div>

              <div>
                <strong>License System</strong>
                <span>Not configured yet</span>
              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default App;
