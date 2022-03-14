import { useRouter } from 'next/router';

const SelectLanguage = () => {
  const router = useRouter();
  const { locale } = router;

  const onSelectChange = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, {
      locale,
      scroll: false,
    });
  };

  return (
    <select className="cursor-pointer bg-inherit focus-outline" name="languages" onChange={onSelectChange} defaultValue={locale === 'es' ? 'es' : 'en'}>
      {router.locales.map((language) => (
        <option className="text-gray-800 dark:text-gray-800" key={language} value={language}>
          {language === 'es' ? 'ES' : 'EN'}
        </option>
      ))}
    </select>
  );
};

export default SelectLanguage;
