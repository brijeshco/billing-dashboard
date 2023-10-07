import React, { useState } from 'react';

export function AddCustomer({ setCustomers, handleCancel, customers }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [panCardNumber, setPanCardNumber] = useState('');
  const [GSTNumber, setGSTNumber] = useState('');
  const [status, setStatus] = useState('Active');
  const [GSTNumberError, setGSTNumberError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !address) {
      return alert('Please fill in all the required fields.');
    }

    const customerNameExists = customers.some(
      (customer) => customer.name.toLowerCase() === name.toLowerCase()
    );

    if (customerNameExists) {
      alert('This customer name already exists in the list.');
      return;
    }

    // Optional GST Number validation
    if (GSTNumber && (GSTNumber.length < 5 || GSTNumber.length > 15)) {
      setGSTNumberError('Invalid GST Number.');
      return;
    }

    const newCustomer = {
      name,
      address,
      panCardNumber,
      GSTNumber,
      status,
    };
    setCustomers(newCustomer);
  }

  return (
    <form className="customer-body" onSubmit={handleSubmit}>
      <h1 className="master">Add New Customer</h1>
      <div className="flex-container">
        <div className="input-box">
          <label>{'Customer Name'}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="input-box">
          <label>{'Customer Address'}</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex-container">
        <div className="input-box">
          <label>{'Customer Pan Card Number'}</label>
          <input
            minLength={10}
            maxLength={10}
            type="text"
            value={panCardNumber}
            onChange={(e) => setPanCardNumber(e.target.value)}
          ></input>
        </div>
        <div className="input-box">
          <label>{'Customer GST Number'}</label>
          <input
            minLength={15}
            maxLength={15}
            type="text"
            value={GSTNumber}
            onChange={(e) => {
              setGSTNumber(e.target.value);
              setGSTNumberError('');
            }}
          ></input>
          {GSTNumberError && <p className="error">{GSTNumberError}</p>}
        </div>
      </div>

      <div className="flex-container">
        <div className="input-box">
          <label>Customer Status</label>
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Active</option>
            <option>In-Active</option>
          </select>
        </div>
      </div>
      <button type="button" onClick={handleCancel} className="Cancel-btn">
        Cancel
      </button>
      <button type="submit" className="Create-btn">
        Create
      </button>
    </form>
  );
}
