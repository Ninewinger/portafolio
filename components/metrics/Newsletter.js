import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import MetricCard from '@/components/metrics/Card';

export default function Newsletter() {
  const { data } = useSWR('/api/subscribers', fetcher);

  const subscriberCount = new Number(data?.count);
  const link = 'https://www.getrevue.co/profile/leerob';

  return (
    <MetricCard
      header="Newsletter Subscribers"
      link={link}
      metric={subscriberCount}
    />
  );
}