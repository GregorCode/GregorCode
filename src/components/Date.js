import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

const Date = ({ dateString }) => {
  const router = useRouter();
  const { locale } = router;
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'MMMM dd, yyyy', { locale: locale === 'es' ? es : enUS })}</time>;
};

export default Date;
