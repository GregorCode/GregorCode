import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@components/Layout';
import { Autor } from '@pages/_document';

const About = () => {
  const { t } = useTranslation('about');
  return (
    <Layout>
      <div className="flex rounded-xl shadow-2xl border mt-10 bg-gray-100 dark:bg-gray-800">
        <Image priority src="/images/profile.jpg" alt="Gregor" className="rounded-lg" height={250} width={800} />
        <div className="md:p-6 text-center md:text-left space-y-3">
          <figcaption>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{Autor}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{t('Ocupacion_Pais')}</div>
          </figcaption>
          <p className="text-sm">{t('Presentacion')}</p>
          <p className="text-sm">{t('Estudio_Actual')}</p>
          <p className="font-bold">{t('Slogan')}</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
