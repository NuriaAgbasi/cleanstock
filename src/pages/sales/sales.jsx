import React, { useEffect } from "react";
import Background from "../../components/background.tsx";
import Salesstate from "./salesstate.jsx";

function Sales() {
  const {
    selectedProduct,
    setSelectedProduct,
    quantitySold,
    setQuantitySold,
    error,
    customerName,
    setCustomerName,
    successMessage,
    setSuccessMessage,
    handleSellStock,
    items,
    price,
    setPrice,
  } = Salesstate();

  useEffect(() => {
    const product = items.find((item) => item.name === selectedProduct);
    if (product) {
      setPrice(product.price || 0);
    }
  }, [selectedProduct, items, setPrice]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 10000);
    return () => clearTimeout(timer);
  }, [successMessage, setSuccessMessage]);

  return (
    <Background className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Sales Page
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Make Profits here
        </p>
      </header>
      <div>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xs">
            <select
              className="select mb-3 w-full max-w-xs bg-white"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="default">Pick a Product</option>
              {items.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Quantity Sold"
              value={quantitySold}
              onChange={(e) => setQuantitySold(e.target.value)}
              className="bg-white mb-3 input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="bg-white mb-3 input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-white input input-bordered w-full max-w-xs"
            />
            <button
              type="button"
              onClick={handleSellStock}
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="my-4 ml-28 inline-block rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Sell Stock
            </button>
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mt-2"
                role="alert"
              >
                <strong>Error:</strong> {error}
              </div>
            )}
            {successMessage && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative mt-2"
                role="alert"
              >
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Sales;
