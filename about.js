```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>About Us</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const data = {
    message: 'This is some data from the API',
    timestamp: new Date().toISOString()
  };

  res.status(200).json(data);
}
```