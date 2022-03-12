import Link from 'next/link';

const Footer = () => {
  const github = 'https://github.com/GregorCode';
  const linkedin = 'https://www.linkedin.com/in/gregorys-gonz%C3%A1lez-41506b198/';
  const mailto = 'mailto:gregorysgonzalez@gmail.com?subject=Contacto%20desde%20Blog';

  return (
    <div class="py-3 flex items-center justify-center">
      {/* ABOUT ME */}
      <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
        <Link href="/about" passHref>
          <a>
            <svg
              class="h-5 w-5 text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" /> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /> <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </a>
        </Link>

        {/* GITHUB */}
        <a href={github} target="_blank" rel="noopener noreferrer">
          <svg
            class="h-5 w-5 text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
          </svg>
        </a>

        {/* LINKEDIN */}
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <svg
            class="h-5 w-5 text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /> <rect x="2" y="9" width="4" height="12" /> <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        {/* MAIL */}
        <a href={mailto}>
          <svg
            class="h-5 w-5 text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /> <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
