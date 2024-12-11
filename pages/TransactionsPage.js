// src/pages/TransactionsPage.js
import React from 'react';
import './TransactionsPage.css'; // Import the CSS for this page

// Sample transaction data
const transactions = [
  {
    id: 1,
    property: "Property 1",
    imageUrl: "",
    price: "5,00,000",
    date: "2024-11-20",
  },
  {
    id: 2,
    property: "Property 2",
    imageUrl: "https://support.freeagent.com/hc/article_attachments/360000178959/KB-B-EBT-EBT-01-Final.png",
    price: "7,50,000",
    date: "2024-11-18",
  },
  {
    id: 3,
    property: "Property 3",
    imageUrl: "https://media.trovata.io/wp-content/uploads/2023/07/19153006/transaction-search-tql-2-1024x535.gif",
    price: "3,50,000",
    date: "2024-11-17",
  }
];

const TransactionsPage = () => {
  return (
    <div className="transactions-page-container">
      <h2>Total Transactions</h2>
      <p>Here are the transactions related to properties:</p>

      {/* Loop through transactions and display each */}
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div className="transaction-item" key={transaction.id}>
            <img
              src={transaction.imageUrl}
              alt={`Transaction for ${transaction.property}`}
              className="transaction-image"
            />
            <div className="transaction-details">
              <h3>{transaction.property}</h3>
              <p><strong>Price:</strong> {transaction.price}</p>
              <p><strong>Date:</strong> {transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsPage;
