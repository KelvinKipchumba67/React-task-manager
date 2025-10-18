import { useState, useEffect } from 'react'; // <-- Make sure useEffect is imported
import './App.css';

// Import your components here
import Navbar from './navbar';
import TaskManager from './TaskManager';

function App() {
  // const [count, setCount] = useState(0); // This is not used, can be removed

  // 1. ADD STATE FOR API DATA
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. ADD USEEFFECT TO FETCH DATA
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data); // Save the data
      } catch (err) {
        setError(err.message); // Save the error
      } finally {
        setLoading(false); // Mark loading as complete
      }
    };

    fetchApiData();
  }, []); // Empty array ensures this runs only once on mount

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 w-full">
        {/* Task Manager Card */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <TaskManager />
        </div>
        
        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Users from API</h2>
          
          {/* 3. ADD CONDITIONAL RENDERING LOGIC HERE */}
          <div>
            {loading && <p>Loading users...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {!loading && !error && (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {users.map(user => (
                  <li key={user.id} className="py-4">
                    <p className="font-semibold text-lg">{user.name}</p>
                    <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} TaskQuest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;