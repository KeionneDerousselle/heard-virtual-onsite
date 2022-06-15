import { FC } from 'react';
import classNames from 'classnames';
import { ProgressBar } from '@/components/atoms/progress-bar';

export interface BalanceOverviewProps {
  className?: string;
  amountAllowed: number;
  amountSpent: number;
}

export const BalanceOverview: FC<BalanceOverviewProps> = ({ amountAllowed, amountSpent, className }) => {
  const amountRemaining = amountAllowed - amountSpent;
  const percentageAmountRemaining = Math.round((amountRemaining / amountAllowed) * 100);

  return (
    <div className={classNames(className, 'text-white')}>
      <h3>
        <span className="text-2xl font-bold">${amountRemaining}</span>&nbsp;
        <span>remaining for this month</span>
      </h3>
      <ProgressBar value={percentageAmountRemaining} colorClassName="bg-white" />
      <p>
        <span className="font-bold">${amountSpent}</span>&nbsp;
        <span>out of</span>&nbsp;
        <span className="font-bold">${amountAllowed}</span>&nbsp;
        <span>spent</span>
      </p>
    </div>
  );
};
