import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">🏠 ADMIN</div>
        <ul className="menu">
          <li>Dashboard</li>
          <li>Setting</li>
          <li>
            <Link to="/property">Property</Link>
          </li>
          <li>Agent</li>
          <li>User</li>
          <li>Page Builder</li>
          <li>Localization</li>
          <li>Pages</li>
          <li>Blog Dashboard</li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <p>Home / Dashboard</p>
        </header>

        <section className="stats">
          <div className="stat-card">
            <h2>10</h2>
            <p>PROPERTIES</p>
          </div>
          <div className="stat-card">
            <h2>32</h2>
            <p>AGENT</p>
          </div>
          <div className="stat-card">
            <h2>25</h2>
            <p>ENQUIRIES</p>
          </div>
        </section>

        <section className="property-list">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Property Status</th>
                <th>Price</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="property1.jpg" alt="Property" /></td>
                <td>3 Bedroom Ranch House</td>
                <td>Sale</td>
                <td>659854</td>
                <td>Enable</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="view-btn">✔️</button>
                </td>
              </tr>
              <tr>
                <td><img src="property2.jpg" alt="Property" /></td>
                <td>It office for sale</td>
                <td>Rent</td>
                <td>96545</td>
                <td>Enable</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="view-btn">✔️</button>
                </td>
              </tr>
              <tr>
                <td><img src="property3.jpg" alt="Property" /></td>
                <td>Studio Apartment</td>
                <td>Sale</td>
                <td>96584</td>
                <td>Enable</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="view-btn">✔️</button>
                </td>
              </tr>
              <tr>
                <td><img src="property4.jpg" alt="Property" /></td>
                <td>4 Bedroom Beach House</td>
                <td>Sale</td>
                <td>63521</td>
                <td>Enable</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="view-btn">✔️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
