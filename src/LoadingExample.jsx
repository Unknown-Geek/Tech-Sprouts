import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const LoadingExample = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating API call
    const fetchData = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Set mock data
      setData([
        { id: 1, name: 'BASICS Scratch', level: 'Beginner' },
        { id: 2, name: 'MIT App Inventor', level: 'Intermediate' },
        { id: 3, name: 'Wix', level: 'Beginner' },
        { id: 4, name: 'HTML', level: 'Intermediate' },
      ]);
      
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Available Courses</h2>
      
      {loading ? (
        <div className="flex justify-center py-8">
          <Loader small />
        </div>
      ) : (
        <ul className="space-y-2">
          {data.map(item => (
            <li key={item.id} className="p-3 border border-gray-200 rounded-md bg-gray-50 hover:bg-green-50 transition-colors">
              <span className="font-medium">{item.name}</span>
              <span className="ml-2 text-sm text-gray-500">({item.level})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LoadingExample; 