import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { name } from '@components/Layout';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const Header = ({ home }) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const onSelectChange = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, {
      locale,
      scroll: false,
    });
  };

  return (
    <>
      <select name="languages" onChange={onSelectChange}>
        {router.locales.map((language) => (
          <option key={language} value={language}>
            {language === 'es' ? 'ES' : 'EN'}
          </option>
        ))}
      </select>
      <div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <IoSunnyOutline size="4rem" /> : <IoMoonOutline size="4rem" />}</button>
      </div>
      {home ? (
        <>
          <Image priority src="/images/logo.svg" height={130} width={130} alt={name} />
          <h1>{name}</h1>
          home normal
        </>
      ) : (
        <>
          <Link href="/" passHref>
            <a>
              <Image priority src="/images/logo.svg" height={100} width={100} alt={name} />
            </a>
          </Link>
          <h2>
            <Link href="/" passHref>
              <span>{name}</span>
            </Link>
          </h2>
          home id
        </>
      )}
    </>
  );
};

export default Header;
