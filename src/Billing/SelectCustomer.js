import { Card } from '../Card';

export function SelectCustomer({
  customers,
  isPopupOpen,
  setPopupOpen,
  setSelectCustomer,
  setCustomerBilling,
  setBillingDetails,
  setSelectedCustomer,
}) {
  function closePopup() {
    setPopupOpen(false);
    setSelectCustomer(false);
    setCustomerBilling(true);
  }

  return (
    <div className="body">
      <div className="card-column">
        <h1 className="master">Billing</h1>
        <Popup isOpen={isPopupOpen} onClose={closePopup}>
          <Cardd
            customers={customers}
            setBillingDetails={setBillingDetails}
            setSelectedCustomer={setSelectedCustomer}
            key={customers.at(0).address}
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
function Cardd({ customers, setBillingDetails, setSelectedCustomer }) {
  function handleCustomerCard(customer) {
    setSelectedCustomer(customer); // Store the selected customer's data
    setBillingDetails(true);
  }
  return (
    <div>
      <h1 className="master">CUSTOMERS</h1>

      <div className="flex-container ">
        {customers.map((customer) => {
          return (
            <div
              key={customer.name}
              onClick={() => handleCustomerCard(customer)}
              className="pointer"
            >
              <Card name={customer.name}>
                <span>{customer.name}</span>
                <div
                  className={
                    customer.status === 'Active' ? 'active' : 'In-Active'
                  }
                >
                  <span className="span-active">{customer.status}</span>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
