"use client";

import React, { useState, useEffect } from 'react';
import ChariotConnect from 'react-chariot-connect';

function DonationForm() {
  const [cid, setCid] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [theme, setTheme] = useState('DefaultTheme');

  useEffect(() => {
    // Fetch CID from the URL query string
    const searchParams = new URLSearchParams(window.location.search);
    const cidFromUrl = searchParams.get('cid');
    if (cidFromUrl) {
      setCid(cidFromUrl);
    }

    const alterations = {
      width: 'w-40',
      height: 'h-12',
    };

    if (typeof window !== 'undefined' && window.ChariotConnect) {
      window.ChariotConnect.registerTheme('myCustomTheme', alterations);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation Details:', { name, email, amount, cid, theme });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Support Our Cause</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Donation Amount"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="DefaultTheme">Default Theme</option>
            <option value="LightModeTheme">Light Mode Theme</option>
            <option value="LightBlueTheme">Light Blue Theme</option>
            <option value="GradientTheme">Gradient Theme</option>
            <option value="myCustomTheme">Custom Theme</option>
          </select>

          <div className="mt-6 flex flex-col items-center gap-4">
            {cid ? (
              <ChariotConnect id="chariot" cid={cid} theme={theme} />
            ) : (
              <span className="text-sm text-red-500 text-center">
                No CID provided for this form.
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonationForm;
