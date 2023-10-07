export function TotalBill({
  currentSelectedItem,
  selectedCustomer,
  setTotalBill,
  setBillingDetails,
  setFinalBill,
  number,
  setNumber,
  data,
  setData,
  invoiceId,
  setInvoiceId,
  id,
}) {
  function generateInvoiceID() {
    const prefix = 'INVC';
    const randomNumbers = Math.floor(Math.random() * 100000)
      .toString()
      .padStart(6, '0');
    const invoiceID = prefix + randomNumbers;

    return invoiceID;
  }

  // Example usage:
  const invoiceID = generateInvoiceID();
  const amount = currentSelectedItem.sellingPrice;
  let totalAmount = amount * number;

  // Check if GSTNumber is missing
  if (!selectedCustomer.GSTNumber) {
    const gstRate = 0.18; // 18% GST rate
    const gstAmount = totalAmount * gstRate;
    totalAmount += gstAmount;
  }
  const newData = {
    id: data.at(-1).id + 1,
    invoiceID: invoiceID,
    customerName: selectedCustomer.name,
    items: currentSelectedItem.itemName,
    totalAmount: totalAmount,
    address: selectedCustomer.address,
    pan: selectedCustomer.panCardNumber,
    gstNum: selectedCustomer.GSTNumber,
    amount,
    number,
  };
  function handleCancel() {
    setTotalBill(false);
    setBillingDetails(true);
  }
  function handleCreate() {
    setTotalBill(false);
    setFinalBill(true);
    setData([...data, newData]);
    setInvoiceId(invoiceID);
  }

  const increaseNumber = () => {
    setNumber(() => number + 1);
  };

  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(() => number - 1);
    }
  };

  return (
    <div className="  boss">
      <div className="body">
        <h1 className="master">Billing</h1>
        <div className="customer-container">
          <h3 className="details">Customer Details</h3>

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
                    <button className="button" onClick={decreaseNumber}>
                      -
                    </button>
                    <span className="number span">{number}</span>
                    <button className="button" onClick={increaseNumber}>
                      +
                    </button>
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
          <div className="btndiv">
            <button className="Cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button className="Create-btn" onClick={handleCreate}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
