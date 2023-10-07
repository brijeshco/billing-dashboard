import { useEffect, useState } from 'react';
import { Master } from './MasterComponent';
import { Dashboard } from './Dashboard';
import { Billing } from './Billing';
import { InvoiceDetails } from './InvoiceDetails';

const customerDetail = [
  {
    name: 'Gupta Enterprise Pvt. Ltd.',
    address: 'Modinagar',
    panCardNumber: 'OGLMPXXXXX',
    GSTNumber: 101010101010101,
    status: 'Active',
  },
  {
    name: 'Mahesh Industries Pvt. Ltd.',
    address: 'Modinagar',
    panCardNumber: 'OGLMPXXXXX',
    GSTNumber: 101010101010101,
    status: 'Active',
  },
  {
    name: 'Omkar and Brothers Pvt. Ltd.',
    address: 'Modinagar',
    panCardNumber: 'OGLMPXXXXX',
    GSTNumber: 101010101010101,
    status: 'Active',
  },
  {
    name: 'AdiBhuwan Infotech.',
    address: 'Modinagar',
    panCardNumber: 'OGLMPXXXXX',
    GSTNumber: 101010101010101,
    status: 'In-Active',
  },
  {
    name: 'Swastik Software Pvt. Ltd.',
    address: 'Modinagar',
    panCardNumber: 'OGLMPXXXXX',
    GSTNumber: '',
    status: 'In-Active',
  },
  {
    name: 'Unknown',
    address: 'Modinagar',
    panCardNumber: 'OGLMPXXXXX',
    GSTNumber: '',
    status: 'In-Active',
  },
];

const itemDetail = [
  {
    itemName: 'Laptop',
    sellingPrice: 100000,
    status: 'Active',
  },
  {
    itemName: 'LED Monitor',
    sellingPrice: 10000,
    status: 'Active',
  },
  {
    itemName: 'Pen Drive',
    sellingPrice: 1000,
    status: 'Active',
  },
  {
    itemName: 'Mobile Phone',
    sellingPrice: 10000,
    status: 'Active',
  },
  {
    itemName: 'Headphones',
    sellingPrice: 1000,
    status: 'In-Active',
  },
  {
    itemName: 'Power Bank',
    sellingPrice: 1000,
    status: 'In-Active',
  },
  {
    itemName: 'Ear Phone',
    sellingPrice: 500,
    status: 'Active',
  },
];

const templatedata = [
  {
    id: 0,
    invoiceID: 'INVC457898',
    customerName: 'AdiBhuwan Infotech',
    items: 'Ear Phone',
    amount: 1000,
    totalAmount: 1000,
    address: 'Modinagar',
    pan: 'OGLPMXXXXX',
    gstNum: '',
  },
];
export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Body />
      </div>
    </div>
  );
}

function Header() {
  return <div className="header"></div>;
}

function Body() {
  const [dashboard, setDashboard] = useState(false);
  const [master, setMaster] = useState(true);
  const [billing, setBilling] = useState(false);
  const [masterBody, setMasterBody] = useState(true);
  const [customerMenu, setCustomerMenu] = useState(false);
  const [itemMenu, setItemMenu] = useState(false);
  const [customers, setCustomer] = useState(function () {
    const storedValue = localStorage.getItem('customer');
    const initialWatched = storedValue
      ? JSON.parse(storedValue)
      : customerDetail;
    return initialWatched;
  });
  const [items, setItems] = useState(function () {
    const storedValue = localStorage.getItem('item');
    const initialWatched = storedValue ? JSON.parse(storedValue) : itemDetail;

    return initialWatched;
  });
  const [customerBilling, setCustomerBilling] = useState(true);
  const [selectCustomer, setSelectCustomer] = useState(false);
  const [billingDetails, setBillingDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const [average, setAverage] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState(false);
  const [data, setData] = useState(function () {
    const storedValue = localStorage.getItem('Dashboard');
    const initialWatched = storedValue ? JSON.parse(storedValue) : templatedata;

    return initialWatched;
  });

  const [invoiceId, setInvoiceId] = useState('');
  const [id, setId] = useState(0);
  useEffect(
    function () {
      localStorage.setItem('Dashboard', JSON.stringify(data));
    },
    [data]
  );
  function handleMaster() {
    setMaster(true);
    setBilling(false);
    setDashboard(false);
    setCustomerMenu(false);
    setItemMenu(false);
    setMasterBody(true);
    setInvoiceDetails(false);
  }
  function handleDashboard() {
    setMaster(false);
    setBilling(false);
    setDashboard(true);
    setInvoiceDetails(false);
  }
  function handleBilling() {
    setBilling(false);
    setAverage(true);
    setTimeout(() => {
      setBilling(true);
      setAverage(false);
    }, 100);

    setMaster(false);
    setDashboard(false);
    setCustomerBilling(true);
    setSelectCustomer(false);
    setBillingDetails(false);
    setSelectedItem(false);
    setInvoiceDetails(false);
  }
  return (
    <>
      <Navbar
        onMaster={handleMaster}
        onDashboard={handleDashboard}
        onBilling={handleBilling}
      />
      {dashboard && (
        <Dashboard
          setInvoiceDetails={setInvoiceDetails}
          data={data}
          setData={setData}
          setDashboard={setDashboard}
          setId={setId}
        />
      )}
      {master && (
        <Master
          masterBody={masterBody}
          setMasterBody={setMasterBody}
          customer={customerMenu}
          setCustomerMenu={setCustomerMenu}
          itemMenu={itemMenu}
          setItemMenu={setItemMenu}
          customers={customers}
          setCustomer={setCustomer}
          items={items}
          setItems={setItems}
          itemDetail={itemDetail}
          customerDetail={customerDetail}
        />
      )}
      {billing && (
        <Billing
          setMaster={setMaster}
          customers={customers}
          items={items}
          setItem={setItems}
          customerBilling={customerBilling}
          setCustomerBilling={setCustomerBilling}
          selectCustomer={selectCustomer}
          billingDetails={billingDetails}
          setBillingDetails={setBillingDetails}
          setSelectCustomer={setSelectCustomer}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          invoiceDetails={invoiceDetails}
          data={data}
          setData={setData}
          invoiceId={invoiceId}
          setInvoiceId={setInvoiceId}
          id={id}
        />
      )}
      {average && <Average />}
      {invoiceDetails && <InvoiceDetails data={data} id={id} />}
    </>
  );
}

function Navbar({ onBilling, onMaster, onDashboard }) {
  return (
    <ul className="navbar">
      <li onClick={onDashboard}>Dashboard</li>
      <li onClick={onMaster}>Master</li>
      <li onClick={onBilling}>Billing</li>
    </ul>
  );
}

function Average() {
  return;
}
