import { Card } from '../Card';
import { AddCustomer } from './AddCustomer';
import { useState, useEffect } from 'react';

export function CustomerBody({ customers, setCustomer, customerDetail }) {
  const [addCustomer, setAddCustomer] = useState(false);

  function handleCancel() {
    setAddCustomer(false);
  }

  function handleAddItem(customer) {
    setCustomer((customers) => [...customers, customer]);
    setAddCustomer(false);
  }
  function handleDeleteCustomer(name) {
    setCustomer((customers) =>
      customers.filter((customer) => customer.name !== name)
    );
  }

  useEffect(
    function () {
      localStorage.setItem('customer', JSON.stringify(customers));
    },
    [customers]
  );
  return addCustomer ? (
    <AddCustomer
      setCustomers={handleAddItem}
      handleCancel={handleCancel}
      customers={customers}
    />
  ) : (
    <Customers
      onAddCustomer={setAddCustomer}
      customers={customers}
      handleDeleteCustomer={handleDeleteCustomer}
    />
  );
}

function Customers({ onAddCustomer, customers, handleDeleteCustomer }) {
  return (
    <div className="customer-body">
      <h1 className="master">CUSTOMERS</h1>
      <div className="Add-div">
        <div className="Add-btn" onClick={() => onAddCustomer(true)}>
          <span> ADD</span>
        </div>
      </div>

      <div className="flex-container">
        {customers.map((customer) => {
          return (
            <Card key={customer.name}>
              <span>{customer.name}</span>
              <div
                className={
                  customer.status === 'Active' ? 'active' : 'In-Active'
                }
              >
                <span className="span-active">{customer.status}</span>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDeleteCustomer(customer.name)}
              >
                X
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
