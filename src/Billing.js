import { useEffect } from 'react';
import { useState } from 'react';
import { SelectCustomer } from './Billing/SelectCustomer';
import { CustomerDetails } from './Billing/CustomerDetails';
import { CustomerBillingDetail } from './Billing/BillingDetails';
import { SelectItem } from './Billing/SelectItem';
import { TotalBill } from './Billing/TotalBill';
import { FinalBill } from './Billing/finalBill';

export function Billing({
  customers,
  customerBilling,
  setCustomerBilling,
  selectCustomer,
  setSelectCustomer,
  billingDetails,
  setBillingDetails,
  selectedItem,
  setSelectedItem,
  items,
  invoiceDetails,
  data,
  setData,
  invoiceId,
  setInvoiceId,
  id,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isItemPopupOpen, setIsItemPopupOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null); // Add selectedCustomer state
  const [currentSelectedItem, setCurrentSelectedItem] = useState(null); // Add selectedItem state
  const [totalBill, setTotalBill] = useState(false);
  const [finalBill, setFinalBill] = useState(false);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    if (billingDetails) {
      setSelectCustomer(false);
      setIsPopupOpen(false);
      setCustomerBilling(false);
    }
    if (customerBilling) {
      setSelectCustomer(false);
      setIsPopupOpen(false);
      setBillingDetails(false);
    }
    if (totalBill) {
      setSelectCustomer(false);
      setIsItemPopupOpen(false);
      setCustomerBilling(false);
      setSelectedItem(false);
    }
  }, [
    billingDetails,
    setCustomerBilling,
    customerBilling,
    setBillingDetails,
    setSelectCustomer,
    setSelectedItem,
    totalBill,
  ]);

  return (
    <>
      {customerBilling && (
        <CustomerDetails
          customerBilling={customerBilling}
          selectCustomer={selectCustomer}
          setSelectCustomer={setSelectCustomer}
          setCustomerBilling={setCustomerBilling}
          setPopupOpen={setIsPopupOpen}
          selectedCustomer={selectedCustomer}
          customers={customers}
        />
      )}
      {selectCustomer && (
        <SelectCustomer
          customers={customers}
          isPopupOpen={isPopupOpen}
          setPopupOpen={setIsPopupOpen}
          setSelectCustomer={setSelectCustomer}
          setCustomerBilling={setCustomerBilling}
          setBillingDetails={setBillingDetails}
          setSelectedCustomer={setSelectedCustomer} // Pass setSelectedCustomer to SelectCustomer
        />
      )}
      {billingDetails && (
        <CustomerBillingDetail
          setCustomerBilling={setCustomerBilling}
          selectedCustomer={selectedCustomer} // Pass selectedCustomer to CustomerBillingDetail
          setSelectedItem={setSelectedItem}
          setIsItemPopupOpen={setIsItemPopupOpen}
          setBillingDetails={setBillingDetails}
          items={items}
        />
      )}
      {selectedItem && (
        <SelectItem
          items={items}
          setCurrentSelectedItem={setCurrentSelectedItem}
          isItemPopupOpen={isItemPopupOpen}
          setIsItemPopupOpen={setIsItemPopupOpen}
          setCustomerBilling={setCustomerBilling}
          setBillingDetails={setBillingDetails}
          setSelectedItem={setSelectedItem}
          setTotalBill={setTotalBill}
        />
      )}
      {totalBill && (
        <TotalBill
          currentSelectedItem={currentSelectedItem}
          selectedCustomer={selectedCustomer}
          setTotalBill={setTotalBill}
          setBillingDetails={setBillingDetails}
          setFinalBill={setFinalBill}
          number={number}
          setNumber={setNumber}
          data={data}
          setData={setData}
          invoiceId={invoiceId}
          setInvoiceId={setInvoiceId}
          id={id}
        />
      )}
      {finalBill && (
        <FinalBill
          currentSelectedItem={currentSelectedItem}
          selectedCustomer={selectedCustomer}
          number={number}
          invoiceId={invoiceId}
        />
      )}
    </>
  );
}
