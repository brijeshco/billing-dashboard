export function FinalBill({
  currentSelectedItem,
  selectedCustomer,
  number,
  invoiceId,
}) {
  const amount = currentSelectedItem.sellingPrice;
  let totalAmount = amount * number;

  // Check if GSTNumber is missing
  if (!selectedCustomer.GSTNumber) {
    const gstRate = 0.18; // 18% GST rate
    const gstAmount = totalAmount * gstRate;
    totalAmount += gstAmount;
  }
  return (
    <div className="  boss">
      <div className="body">
        <h1 className="master">Billing</h1>
        <div className="customer-container">
          <div className="invoiceId ">
            <h3 className="details">Customer Details</h3>
            <div className="invoiceDiv">
              <span>{invoiceId}</span>
            </div>
          </div>

          <hr />
          <div>
            <div>
              <p>Name : {selectedCustomer.name}</p>
              <p>Address : {selectedCustomer.address}</p>
              <p>Pan Card :{selectedCustomer.panCardNumber}</p>
              <p>GST Num : {selectedCustomer.GSTNumber}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="body space">
        <div className="customer-container">
          <h3 className="details">items</h3>

          <hr />
          <div className="boss">
            <div className="main-div">
              <div className="div1">
                <p>Name</p>
                <p className="laptop">{currentSelectedItem.itemName}</p>
              </div>
              <div className="div2">
                <p>amount</p>
                <div className="btnspan">
                  <span className="span">
                    <span className="number span">{number}</span>
                  </span>
                </div>
              </div>
              <div className="div3">
                <p>price</p>
                <div className="btnspan">
                  <span className="number span">{amount * number}</span>
                </div>
              </div>
            </div>
            {!selectedCustomer.GSTNumber && (
              <div className="main-div">
                <div className="div1">
                  <p>GST 18%</p>
                </div>

                <div className="gst">
                  <div className="gstAmount">
                    <p>{amount * number * 0.18}</p>
                  </div>
                </div>
              </div>
            )}

            <hr className="horizontal-space" />
            <div className="main-div">
              <div className="div1">
                <p className="white">nameioahsdo</p>
              </div>
              <div className="div2">
                <p>Total</p>
                <div className="btnspan"></div>
              </div>
              <div className="div3">
                <span className="number span">{totalAmount}</span>
                <div className="btnspan"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
