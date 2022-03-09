import { useTheme } from 'next-themes';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button className="flex p-2 text-yellow-400 focus-outline hover:glow" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <IoSunnyOutline size="2rem" /> : <IoMoonOutline size="2rem" />}
    </button>
  );
};

export default ChangeTheme;
