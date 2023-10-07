export function InvoiceDetails({ data, id }) {
  // Check if GSTNumber is missing
  // invoiceID: 'INVC457898',
  //   customerName: 'Brijesh',
  //   items: 'Ear Phone',
  //   amount: 1000,
  //   totalAmount: 100,
  //   address: 'XYZ',
  //   pan: 'XYZ',
  //   gstNum: '',

  return (
    <div className="  boss">
      <div className="body">
        <h1 className="master">Billing</h1>
        <div className="customer-container">
          <div className="invoiceId ">
            <h3 className="details">Customer Details</h3>
            <div className="invoiceDiv">
              <span>{data.at(id).invoiceID}</span>
            </div>
          </div>

          <hr />
          <div>
            <div>
              <p>Name : {data.at(id).customerName}</p>
              <p>Address : {data.at(id).address}</p>
              <p>Pan Card :{data.at(id).pan}</p>
              <p>GST Num :{data.at(id).gstNum} </p>
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
                <p className="laptop">{data.at(id).items}</p>
              </div>
              <div className="div2">
                <p>amount</p>
                <div className="btnspan">
                  <span className="span">
                    <span className="number span">{data.at(id).number}</span>
                  </span>
                </div>
              </div>
              <div className="div3">
                <p>price</p>
                <div className="btnspan">
                  <span className="number span">
                    {data.at(id).number * data.at(id).amount}
                  </span>
                </div>
              </div>
            </div>
            {!data.at(id).gstNum && (
              <div className="main-div">
                <div className="div1">
                  <p>GST 18%</p>
                </div>

                <div className="gst">
                  <div className="gstAmount">
                    <p>{data.at(id).amount * data.at(id).number * 0.18}</p>
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
                <span className="number span">{data.at(id).totalAmount}</span>
                <div className="btnspan"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
