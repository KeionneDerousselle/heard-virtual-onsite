import type { NextPage } from 'next';
import { Layout } from '@/components/molecules/layout';
import { Overview } from '@/components/organisms/overview';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="">
        <Overview />
      </div>
    </Layout>
  );
};

export default Home;
