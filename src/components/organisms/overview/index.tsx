import { FC } from 'react';
import { BalanceOverview } from '@/components/molecules/balance-overview';
import { CategoryProgress } from '@/components/molecules/category-progress';

export const Overview: FC = () => {
  return (
    <div>
      <div className="mb-10 bg-[#204E51]">
        <div className="my-container">
          <BalanceOverview amountAllowed={2500} amountSpent={750} className="py-12" />
        </div>
      </div>

      <div className="p-4 bg-[#F4F7F7]">
        <div className="my-container">
          <h3>All Categories</h3>
          <CategoryProgress name="Transportation" amountAllowed={300} amountSpent={250} className="mb-3" />
          <CategoryProgress name="Bills" amountAllowed={300} amountSpent={250} className="mb-3" />
          <CategoryProgress name="Entertainment" amountAllowed={300} amountSpent={250} className="mb-3" />
        </div>
      </div>
    </div>
  );
};
