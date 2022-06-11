import type { NextPage } from 'next';
import { Layout } from '@/components/molecules/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="my-container">
        <div className="mt-16">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla quaerat voluptate doloribus omnis cum
            ratione, ea dolor eligendi, porro unde quidem. Consequuntur, repudiandae tempora. Voluptatum porro
            accusantium dignissimos et.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
