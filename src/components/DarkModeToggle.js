import React, { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark-mode' : '';
  }, [dark]);

  return <button onClick={() => setDark(!dark)}>Toggle Dark Mode</button>;
}
