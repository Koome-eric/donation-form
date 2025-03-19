import React, { useState, useEffect } from 'react';
import ChariotConnect from 'react-chariot-connect';

function DonationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const cid = 'test_4175f07eb35e8d40ff70f79613a21861d2b78927f60a6bcb2813c5d54ac91042';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.dafpay.com/button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation Details:', { name, email, amount });
    // You can add any API call or donation submission logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Support Our Cause</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Donation Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="50.00"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-center mt-6">
            <ChariotConnect cid={cid} theme="DefaultTheme" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonationForm;
