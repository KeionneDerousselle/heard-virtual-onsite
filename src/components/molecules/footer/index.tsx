import classNames from 'classnames';
import { FC } from 'react';

export interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classNames('py-10 bg-[#204E51] text-white', className)}>
      <div className="flex items-center justify-center my-container">
        <span className="text-sm">&copy; {currentYear} Keionne Derousselle</span>
      </div>
    </footer>
  );
};
