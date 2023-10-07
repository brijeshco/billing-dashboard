import { Card } from '../Card';
import { AddItem } from './AddItem';
import { useState, useEffect } from 'react';

export function ItemBody({ items, setItems, itemDetail }) {
  const [addItem, setAddItem] = useState(false);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    setAddItem(false);
  }
  function handleCancel() {
    setAddItem(false);
  }
  function handleDeleteItem(name) {
    setItems((items) => items.filter((item) => item.itemName !== name));
  }
  useEffect(
    function () {
      localStorage.setItem('item', JSON.stringify(items));
     
    },
    [items, ]
  );

  return addItem ? (
    <AddItem
      setItems={handleAddItem}
      items={items}
      handleCancel={handleCancel}
    />
  ) : (
    <Items
      onAddItem={setAddItem}
      items={items}
      handleDeleteItem={handleDeleteItem}
    />
  );
}

function Items({ onAddItem, items, handleDeleteItem }) {
  return (
    <div className="customer-body">
      <h1 className="master">ITEMS</h1>
      <div className="Add-div">
        <div className="Add-btn" onClick={() => onAddItem(true)}>
          <span> ADD</span>
        </div>
      </div>

      <div className="flex-container">
        {items.map((item) => {
          return (
            <Card key={item.itemName}>
              <span>{item.itemName}</span>
              <div
                className={item.status === 'Active' ? 'active' : 'In-Active'}
              >
                <span className="span-active">{item.status}</span>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDeleteItem(item.itemName)}
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
