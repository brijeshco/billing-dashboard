import { useState } from 'react';

export function AddItem({ setItems, items, handleCancel }) {
  const [itemName, setItemName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [itemStatus, setItemStatus] = useState('Active');

  function handleSubmit(e) {
    e.preventDefault();
    if (!itemName || !customerAddress)
      return alert('Please fill in all the required fields.');

    const itemNameExists = items.some(
      (item) => item.itemName.toLowerCase() === itemName.toLowerCase()
    );

    if (itemNameExists) {
      alert('This item name already exists in the list.');
      return;
    }

    const newItem = {
      itemName,
      sellingPrice: customerAddress,
      status: itemStatus,
    };
    setItems(newItem);
  }

  return (
    <form className="customer-body" onSubmit={handleSubmit}>
      <h1 className="master">Add New Item</h1>

      <div className="flex-container">
        <div className="input-box">
          <label>{'Item Name'}</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          ></input>
        </div>
        <div className="input-box">
          <label>{'Customer Selling Price'}</label>
          <input
            type="number"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            required
          ></input>
        </div>
      </div>

      <div className="flex-container">
        <div className="input-box">
          <label>Item Status</label>
          <select
            value={itemStatus}
            onChange={(e) => setItemStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="In-Active">In-Active</option>
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
