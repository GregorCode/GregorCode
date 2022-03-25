import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@components/Layout';
import { Autor } from '@pages/_document';

const About = () => {
  const { t } = useTranslation('about');
  return (
    <Layout>
      <div className="flex sm:flex-col md:flex-row rounded-xl shadow-2xl border mt-10 bg-gray-100 dark:bg-gray-800">
        <Image priority src="/images/profile.jpg" alt="Gregor" className="rounded-lg" height="800" width="1000" />
        <div className="text-center md:text-left sm:text-left sm:p-6 md:p-6 sm:space-y-2 md:space-y-3">
          <figcaption>
            <div className="sm:text-base md:text-xl font-bold text-gray-900 dark:text-white">{Autor}</div>
            <div className="sm:text-xs md:text-sm text-gray-500 dark:text-gray-400">{t('Ocupacion_Pais')}</div>
          </figcaption>
          <p className="sm:text-xs md:text-sm">{t('Presentacion')}</p>
          <p className="sm:text-xs md:text-sm">{t('Estudio_Actual')}</p>
          <p className="sm:text-sm md:text-base font-bold">{t('Slogan')}</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
