import React, { useState, useEffect } from 'react';
import ChariotConnect from 'react-chariot-connect';

function DonationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [theme, setTheme] = useState('DefaultTheme'); // Added theme state
  const cid = 'test_4175f07eb35e8d40ff70f79613a21861d2b78927f60a6bcb2813c5d54ac91042';

  // Register the custom theme once when the component mounts
  useEffect(() => {
    const alterations = {
      width: 'w-40',  // Wider button for better visibility
      height: 'h-12', // Slightly taller button
    };

    if (window && window.ChariotConnect) {
      window.ChariotConnect.registerTheme('myCustomTheme', alterations);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation Details:', { name, email, amount });
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
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Donation Amount"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
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

          <div className="mt-6 flex justify-center gap-4">
            <ChariotConnect id="chariot" cid={cid} theme={theme} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonationForm;
