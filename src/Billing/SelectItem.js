import { Card } from '../Card';

export function SelectItem({
  items,
  setCurrentSelectedItem,
  setIsItemPopupOpen,
  isItemPopupOpen,
  setBillingDetails,
  setSelectedItem,
  setTotalBill,
}) {
  function closePopup() {
    setIsItemPopupOpen(false);
    setCurrentSelectedItem(false);
    setBillingDetails(true);
    setSelectedItem(false);
  }
  return (
    <div className="body">
      <h1 className="master">Billing</h1>
      <div className="card-column">
        <Popup isOpen={isItemPopupOpen} onClose={closePopup}>
          <Cardd
            title="Card 1"
            items={items}
            setCurrentSelectedItem={setCurrentSelectedItem}
            setTotalBill={setTotalBill}
          />
        </Popup>
      </div>
    </div>
  );
}

function Popup({ isOpen, onClose, children }) {
  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-button Add-btn" onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      </div>
    )
  );
}
const Cardd = ({ items, setCurrentSelectedItem, setTotalBill }) => {
  function handleItemCard(item) {
    setCurrentSelectedItem(item); // Store the selected customer's data
    setTotalBill(true);
  }
  return (
    <div>
      <h1 className="master">ITEMS</h1>
      <div className="Add-div"></div>

      <div className="flex-container ">
        {items.map((item) => {
          return (
            <div
              key={item.itemName}
              onClick={() => {
                if (item.status === 'Active') {
                  handleItemCard(item);
                }
              }}
              className={item.status === 'Active' ? 'pointer' : ''}
            >
              <Card
                handleDelete={null}
                name={item.itemName}
                classs={item.status === 'Active' ? null : 'disable'}
              >
                <span>{item.itemName}</span>
                <div
                  className={item.status === 'Active' ? 'active' : 'In-Active'}
                >
                  <span className="span-active">{item.status}</span>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
