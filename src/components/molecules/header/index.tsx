import { FC } from 'react';

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="flex p-6 font-bold">
      <h1>Virtual Onsite</h1>
    </header>
  );
};
