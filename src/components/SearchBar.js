import { useState } from 'react';
import Fuse from 'fuse.js';
import { getData } from '../lib/data';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async (value) => {
    const data = await getData();
    const fuse = new Fuse([...data.persons, ...data.events, ...data.organized_events], {
      keys: ['name', 'about', 'essay_en', 'essay_hi'],
      threshold: 0.4,
    });
    setResults(fuse.search(value));
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          search(e.target.value);
        }}
        placeholder="Search..."
        className="w-full p-2 border rounded"
      />
      {results.length > 0 && (
        <ul className="mt-2 border rounded bg-white p-2">
          {results.map((result) => (
            <li key={result.item.guid} className="p-2">
              <a href={`/${result.item.type}/${result.item.slug}`}>{result.item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}