import Image from 'next/image';
import Layout from '@components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="flex rounded-xl shadow-2xl border mt-10 bg-gray-100 dark:bg-gray-800">
        <Image priority src="/images/profile.jpg" alt="Gregor" className="rounded-lg" height={250} width={800} />
        <div className="md:p-6 text-center md:text-left space-y-3">
          <figcaption>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">Gregorys González</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Desarrollador de Software, Uruguay</div>
          </figcaption>
          <p className="text-sm">
            Hola, soy <strong>Gregorys</strong>. Soy Ingeniero de Sistemas y Desarrollador de Software. En este blog iré publicando temas relacionados a la informática y todas las posibles soluciones
            a los problemas que se me presentan en mi trabajo.
          </p>
          <p className="text-sm">
            Actualmente estoy estudiando en la escuela de JavaScript de Platzi, quiero ampliar mis conocimientos sobre ReactJS, NodeJS y NextJS. Tambien he estudiado otras tecnologías como Docker,
            Kubernetes, AWS, entre otros.
          </p>
          <p className="font-bold">Espero te guste mi blog :)</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
