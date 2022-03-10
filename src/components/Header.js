import Image from 'next/image';
import Link from 'next/link';
import SelectLanguage from '@components/SelectLanguage';
import ChangeTheme from '@components/ChangeTheme';

export const siteTitle = `GregorCode`;
export const name = `() => { ${siteTitle} }`;

const Header = ({ home }) => {
  return (
    <header>
      <div className="flex flex-row-reverse space-x-4 space-x-reverse">
        <ChangeTheme />
        <SelectLanguage />
      </div>

      <div className="sticky top-0 flex flex-col items-center justify-between w-full max-w-3xl mx-auto px-4 tablet:px-8 py-4">
        {home ? (
          <>
            <Image priority src="/images/logo.svg" height={130} width={130} alt={name} />
            <h1 className="mt-6">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/" passHref>
              <a>
                <Image priority src="/images/logo.svg" height={100} width={100} alt={name} />
              </a>
            </Link>
            <Link href="/" passHref>
              <span>{name}</span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
