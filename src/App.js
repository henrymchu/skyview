import React from 'react';
import DebtChartComponent from './DebtChartComponent';
import ExpensesChartComponent from './ExpensesChartComponent';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Top Header Section */}
      <Header />
      {/* Second Body Section */}
      <section className="App-body">
        <div className="App-body1">
          <h2>Assets</h2>
          <table className="App-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="red-cell">Home</td>
                <td className="red-cell">70%</td>
              </tr>
              <tr>
                <td className="green-cell">Cash</td>
                <td className="green-cell">10%</td>
              </tr>
              <tr>
                <td className="red-cell">ETFs & Mutual Funds</td>
                <td className="red-cell">9%</td>
              </tr>
              <tr>
                <td className="green-cell">Equities</td>
                <td className="green-cell">5.5%</td>
              </tr>
              <tr>
                <td className="red-cell">Digital Assets</td>
                <td className="red-cell">3%</td>
              </tr>
              <tr>
                <td className="green-cell">Private Placements</td>
                <td className="green-cell">2.5%</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className="App-body2">
          <h2>Debt</h2>
          <DebtChartComponent />
        </div>
        <div className="App-body3">
          <h2>Average Monthly Expenses</h2>
          <ExpensesChartComponent />
        </div>
      </section>
      <div className="app-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
