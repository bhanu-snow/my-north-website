import { useState, useEffect } from 'react';
import JSONEditor from 'react-json-editor-ajrm';
import { getData, validateJSON } from '../lib/data';

export default function JSONEditorComponent() {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const jsonData = await getData();
      setData(jsonData);
    }
    fetchData();
  }, []);

  const handleJSONChange = (newData) => {
    const parsed = newData.jsObject;
    const validationErrors = validateJSON(parsed);
    setErrors(validationErrors);
    if (validationErrors.length === 0) {
      setData(parsed);
    }
  };

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'iuml-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLogin = () => {
    if (password === 'iuml_admin_2025') { // Replace with secure auth in production
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto p-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          className="p-2 border rounded"
        />
        <button onClick={handleLogin} className="ml-2 bg-iumlGreen text-white p-2 rounded">
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit JSON Data</h1>
      {errors.length > 0 && (
        <div className="bg-red-100 p-4 mb-4 rounded">
          <h2 className="text-red-600">Errors:</h2>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx} className="text-red-600">{error}</li>
            ))}
          </ul>
        </div>
      )}
      {data && (
        <JSONEditor
          placeholder={data}
          onChange={handleJSONChange}
          theme="light_mitsuketa_tribute"
          height="600px"
          width="100%"
        />
      )}
      <button
        onClick={downloadJSON}
        className="mt-4 bg-iumlGreen text-white p-2 rounded"
        disabled={errors.length > 0}
      >
        Download Updated JSON
      </button>
    </div>
  );
}