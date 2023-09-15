import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const App = () => {
  const [input, setInput] = useState("");
  const [flash, setFlash] = useState(false);
  const [customers, setCustomers] = useState([{ name: 'Customer 1', cartNumber: 1, records: [] }]);
  const [currentCustomer, setCurrentCustomer] = useState(customers[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const presetPrices = [19, 49, 99, 499, 999];
  const presetDiscounts = [30, 40, 50, 60, 70];

  const handleButtonClick = (value, isShortcutPrice = false, isDiscount = false) => {
    if (isDiscount) {
      try {
        const result = new Function('return ' + input * value)();
        if (isNaN(result)) throw new Error("Result is not a number");
        if (!isFinite(result)) throw new Error("Cannot divide by zero");
        const record = {
          input: `${input} * ${value}`,
          result,
        };
        setCurrentCustomer(prevCustomer => ({ ...prevCustomer, records: [...prevCustomer.records, record] }));
        setCustomers(prevCustomers => prevCustomers.map(customer => customer.cartNumber === currentCustomer.cartNumber ? { ...customer, records: [...customer.records, record] } : customer));
        setInput('');
      } catch (e) {
        setInput("Error");
      }
      setFlash(true);
    } else {
      if (isShortcutPrice) {
        setInput(`${value}`);
      } else {
        setInput(`${input}${value}`);
      }
      setFlash(true);
    }
  };

  useEffect(() => {
    if (flash) {
      setTimeout(() => setFlash(false), 200);
    }
  }, [flash]);


  useEffect(() => {
    for (let i = 1; i < 6; i++) {
      customers.push({ name: `Customer ${i + 1}`, cartNumber: i + 1, records: [] });
    }

  }, []);

  const clearInput = () => {
    setInput("");
  };

  const handleCalculation = () => {
    try {
      const result = new Function('return ' + input)();
      if (isNaN(result)) throw new Error("Result is not a number");
      if (!isFinite(result)) throw new Error("Cannot divide by zero");
      const record = {
        input,
        result,
      };
      setCurrentCustomer(prevCustomer => ({ ...prevCustomer, records: [...prevCustomer.records, record] }));
      setCustomers(prevCustomers => prevCustomers.map(customer => customer.cartNumber === currentCustomer.cartNumber ? { ...customer, records: [...customer.records, record] } : customer));
      setInput(`${result}`);
    } catch (e) {
      setInput("Error");
    }
  };

  const removeRecord = (index) => {
    setCurrentCustomer(prevCustomer => ({ ...prevCustomer, records: prevCustomer.records.filter((_, i) => i !== index) }));
  };

  const removeAllRecords = () => {
    setCurrentCustomer(prevCustomer => ({ ...prevCustomer, records: [] }));
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setCurrentCustomer(prevCustomer => ({ ...prevCustomer, name: newName }));
    setCustomers(prevCustomers => prevCustomers.map(customer => customer.cartNumber === currentCustomer.cartNumber ? { ...customer, name: newName } : customer));
  };


  const switchCustomer = (index) => {
    setCurrentCustomer(customers[index]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const calculateTotal = () => {
    return currentCustomer.records.reduce((acc, curr) => acc + curr.result, 0).toFixed(2);
  };

  return (
    <div className="container font-mono w-xl w-full sm:w-xl md:w-1/3 mx-auto p-2 pt-8">
      <div className="flex mb-2">
        <input type="text" onChange={handleNameChange} value={currentCustomer.name} className={`flex-1 p-2 border rounded-l bg-gray-50`} />
        <div className="border-t border-b border-r p-2 px-3">Cart {currentCustomer.cartNumber}</div>
        <button className="border border-l-0 p-2 px-3 rounded-r" onClick={openModal}>🧑</button>
      </div>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="mt-3 text-center flex flex-col">
                  <h3 className="text-lg font-medium text-gray-900" id="modal-title">
                    Select Customer
                  </h3>
                  <div className="mt-2 w-full">
                    {customers.map((customer, index) => (
                      <div className="border hover:cursor-pointer rounded p-2 mb-2 w-full" key={index} onClick={() => { switchCustomer(index); closeModal(); }}>
                        {customer.name} - Cart {customer.cartNumber} - Total: ${customer.records.reduce((acc, curr) => acc + curr.result, 0).toFixed(2)}
                      </div>
                    ))}
                    {/* <button className="rounded p-2 border bg-gray-100 hover:bg-gray-200 w-full" onClick={addCustomer}>➕ Add Customer</button> */}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={closeModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        <input type="text" value={input} readOnly className={`w-full  bg-gray-50 p-2 border rounded-l ${flash ? 'bg-yellow-200' : ''}`} />
        <div className="border border-l-0 rounded-r p-2 text-center">
          ${calculateTotal()}
        </div>
      </div>

      {/* <h2 className="text-xl mb-2">Shortcut Prices</h2> */}
      <div className="grid grid-cols-5 mt-4 gap-2">
        {presetPrices.map((price, index) => (
          <button key={index} className="p-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded" onClick={() => handleButtonClick(price, true)}>
            ${price}
          </button>
        ))}
      </div>

      {/* <h2 className="text-xl mt-4 mb-2">Shortcut Discounts</h2> */}
      <div className="grid grid-cols-5 mt-4 gap-2">
        {presetDiscounts.map((discount, index) => (
          <button key={index} className="p-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded" onClick={() => handleButtonClick(discount / 100, false, true)}>
            {discount}%
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4 mb-2">
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'].map((btn, idx) => (
          <button key={idx} className="p-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded" onClick={btn === '=' ? handleCalculation : () => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
        <button className="p-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded" onClick={clearInput}>C</button>
      </div>
      <table className="min-w-full font-mono bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-1 px-2 border">Item</th>
            <th className="py-1 w-[40px] px-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentCustomer.records.map((record, index) => (
            <tr key={index}>
              <td className="py-1 px-2 border">{record.input} = {record.result.toFixed(2)}</td>
              <td className="py-1 px-2 border text-center">
                <button className="text-red-500 hover:text-red-600 active:text-red-700" onClick={() => removeRecord(index)}>
                  <span role="img" aria-label="Delete">🗑️</span>
                </button>
              </td>
            </tr>
          ))}
          {currentCustomer.records.length === 0 && (
            <tr>
              <td className="py-1 px-2 border text-center" colSpan="2">The cart is empty</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="w-full flex-col">
        <button className="w-full mt-2 p-2 px-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded" onClick={removeAllRecords}>Print the list</button>
        <div className="flex">
          <button className="flex-1 block mt-2 mr-1 p-2 px-3 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded" onClick={removeAllRecords}>Empty the cart</button>
          <button className="flex-1 block mt-2 ml-1 p-2 px-3 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded" onClick={removeAllRecords}>Reset the cart</button>
        </div>
      </div>

    </div >
  );
};

export default App;