import { FC } from 'react';
import { ProgressBar } from '@/components/atoms/progress-bar';
import classNames from 'classnames';

export interface CategoryProgressProps {
  className?: string;
  name: string;
  amountAllowed: number;
  amountSpent: number;
}

export const CategoryProgress: FC<CategoryProgressProps> = ({ name, amountAllowed, amountSpent, className }) => {
  const amountRemaining = amountAllowed - amountSpent;
  const percentageAmountRemaining = Math.round((amountSpent / amountAllowed) * 100);

  return (
    <div className={classNames('p-4 bg-white rounded-lg shadow-md', className)}>
      <h5 className="text-lg font-bold">{name}</h5>
      <ProgressBar label={name} value={percentageAmountRemaining} colorClassName="bg-[#204E51]" />
      <div className="flex items-center justify-between">
        <p className="inline-block">
          <span className="font-bold">${amountSpent}</span>&nbsp;
          <span>of</span>&nbsp;
          <span>${amountAllowed}</span>&nbsp;
        </p>

        <p>
          <span className="font-bold">${amountRemaining} left</span>
        </p>
      </div>
    </div>
  );
};
