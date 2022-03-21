import { useRouter } from 'next/router';

const SelectLanguage = () => {
  const router = useRouter();
  const { locale } = router;

  const onSelectChange = (event) => {
    const locale = event.target.value;
    router.push(router.asPath, router.asPath, {
      locale,
      scroll: false,
    });
  };

  return (
    <select className="cursor-pointer bg-transparent focus-outline" name="languages" onChange={onSelectChange} defaultValue={locale === 'es' ? 'es' : 'en'}>
      {router.locales.map((language) => (
        <option className="text-gray-800 dark:text-gray-800" key={language} value={language}>
          {language === 'es' ? 'ES' : 'EN'}
        </option>
      ))}
    </select>
  );
};

export default SelectLanguage;
