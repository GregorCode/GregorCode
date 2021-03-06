import Image from 'next/image';
import Link from 'next/link';
import SelectLanguage from '@components/SelectLanguage';
import ChangeTheme from '@components/ChangeTheme';
import { CustomLink } from '@pages/index';

export const siteTitle = `GregorCode`;
export const name = `() => { ${siteTitle} }`;

const Header = ({ home }) => {
  const CustomLinkPosts = CustomLink + ' text-xl';
  return (
    <header>
      <div className="flex flex-row-reverse space-x-4 space-x-reverse">
        <ChangeTheme />
        <SelectLanguage />
      </div>

      <div className="top-0 flex flex-col items-center justify-between">
        {home ? (
          <>
            <Image priority src="/images/logo.svg" height={80} width={80} alt={name} />
            <h2 className="mt-2">{name}</h2>
          </>
        ) : (
          <>
            <Link href="/" passHref>
              <a>
                <Image priority src="/images/logo.svg" height={60} width={60} alt={name} />
              </a>
            </Link>
            <Link href="/" passHref>
              <a className={CustomLinkPosts}>{name}</a>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
