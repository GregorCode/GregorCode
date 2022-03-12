import { useRouter } from 'next/router';

const SelectLanguage = () => {
  const router = useRouter();

  const onSelectChange = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, {
      locale,
      scroll: false,
    });
  };

  return (
    <select className="cursor-pointer bg-inherit dark:bg-gray-800 focus-outline" name="languages" onChange={onSelectChange}>
      {router.locales.map((language) => (
        <option key={language} value={language}>
          {language === 'es' ? 'ES' : 'EN'}
        </option>
      ))}
    </select>
  );
};

export default SelectLanguage;
