import React, { useState } from 'react';

export function Dashboard({ data, setInvoiceDetails, setDashboard, setId }) {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleViewDetails = (invoiceID, id) => {
    setInvoiceDetails(true);
    setDashboard(false);
    setId(id);

    if (selectedInvoice === invoiceID) {
      setSelectedInvoice(null);
    } else {
      setSelectedInvoice(invoiceID);
    }
  };

  // Filter data based on the search query
  const filteredData = data.filter((invoice) =>
    invoice.invoiceID.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="body">
        <h1 className="master">Billing</h1>
        <div className="Search">
          <input
            type="text"
            placeholder="Search by Invoice ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="body">
        <table>
          <thead>
            <tr>
              <td>Invoice ID</td>
              <td>Customer Name</td>
              <td>Item Name</td>
              <td>Amount</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((invoice) => (
              <React.Fragment key={invoice.invoiceID}>
                <tr>
                  <td>{invoice.invoiceID}</td>
                  <td>{invoice.customerName}</td>
                  <td>{invoice.items}</td>
                  <td>{invoice.totalAmount}</td>
                  <td>
                    <button
                      className="Viewbutton"
                      onClick={() =>
                        handleViewDetails(invoice.invoiceID, invoice.id)
                      }
                    >
                      {selectedInvoice === invoice.invoiceID ? 'Close' : 'View'}
                    </button>
                  </td>
                </tr>
                {selectedInvoice === invoice.invoiceID && (
                  <tr>
                    <td colSpan="5">
                      {/* Add details here */}
                      <p>Details for Invoice ID: {invoice.invoiceID}</p>
                      {/* Add more details */}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
