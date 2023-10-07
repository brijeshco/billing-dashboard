export function CustomerDetails({
  customerBilling,
  setSelectCustomer,
  customers,
  setCustomerBilling,

  setPopupOpen,
}) {
  function openPopup() {
    if (customers.length === 0) {
      return alert('Please Add Customer to proceed further.');
    }
    setPopupOpen(true);
    setSelectCustomer(true);
    setCustomerBilling(false);
  }
  return <>{customerBilling && <CustomerBilling onAdd={openPopup} />}</>;
}
function CustomerBilling({ onAdd }) {
  return (
    <div className="body">
      <h1 className="master">Billing</h1>
      <div className="customer-container">
        <h3 className="details">Coustumer Details</h3>

        <hr />
        <div className=" center-add">
          <div className="Add-btn" onClick={onAdd}>
            +ADD
          </div>
        </div>
      </div>
    </div>
  );
}
