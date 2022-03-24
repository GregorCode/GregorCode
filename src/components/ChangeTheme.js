import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const ChangeTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {theme === 'dark' ? (
        <button className="flex p-2 text-yellow-400 focus-outline hover:glow" onClick={() => setTheme('light')}>
          <IoSunnyOutline size="2rem" />
        </button>
      ) : (
        <button className="flex p-2 text-yellow-400 focus-outline hover:glow" onClick={() => setTheme('dark')}>
          <IoMoonOutline size="2rem" />
        </button>
      )}
    </>
  );
};

export default ChangeTheme;
