"use client"
import React, { useState } from 'react';

// Sample data
const data = [
  { id: 1, name: 'Home Plan A', price: '$100', type: 'home' },
  { id: 2, name: 'Home Plan B', price: '$150', type: 'home' },
  { id: 3, name: 'Corporate Plan A', price: '$1000', type: 'corporate' },
  { id: 4, name: 'Corporate Plan B', price: '$1500', type: 'corporate' },
  { id: 5, name: 'Home Plan C', price: '$200', type: 'home' },
  { id: 6, name: 'Corporate Plan C', price: '$2000', type: 'corporate' },
];

const PlanFilter = () => {
  const [filter, setFilter] = useState('corporate'); // Default filter set to 'corporate'

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Function to filter plans based on the selected filter
  const filteredPlans = () => {
    if (filter === 'home') {
      return data.filter((plan) => plan.type === 'home');
    } else if (filter === 'corporate') {
      return data.filter((plan) => plan.type === 'corporate');
    }
    return data; // This line is not necessary now, but can be useful if you add more filters
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilterChange('corporate')}>Corporate Plans</button>
        <button onClick={() => handleFilterChange('home')}>Home Plans</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredPlans().map((plan) => (
          <div key={plan.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanFilter;
