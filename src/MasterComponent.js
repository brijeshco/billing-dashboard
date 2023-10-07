import { CustomerBody } from './Master/Customer';
import { ItemBody } from './Master/Items';

export function Master({
  masterBody,
  setMasterBody,
  customer,
  setCustomerMenu,
  itemMenu,
  setItemMenu,
  customers,
  setCustomer,
  items,
  setItems,
  itemDetail,
  customerDetail,
}) {
  return (
    <>
      {customer && (
        <CustomerBody
          customers={customers}
          setCustomer={setCustomer}
          customerDetail={customerDetail}
        />
      )}

      {itemMenu && (
        <ItemBody items={items} setItems={setItems} itemDetail={itemDetail} />
      )}
      {masterBody && (
        <MasterBody
          onMasterBody={setMasterBody}
          onItem={setItemMenu}
          onCustomer={setCustomerMenu}
        />
      )}
    </>
  );
}

function MasterBody({ onCustomer, onItem, onMasterBody }) {
  return (
    <div className="body">
      <span className="master">Master</span>
      <div className="body-container">
        <div
          className="customer"
          onClick={() => {
            onMasterBody(false);
            onCustomer(true);
          }}
        >
          <span className="main-heading">Customer</span>
          <span className="heading">Read or Create Customer Data</span>
        </div>
        <div
          className="customer"
          onClick={() => {
            onMasterBody(false);
            onItem(true);
          }}
        >
          <span className="main-heading">Items</span>
          <span className="heading">Read or Create Items Data</span>
        </div>
      </div>
    </div>
  );
}
