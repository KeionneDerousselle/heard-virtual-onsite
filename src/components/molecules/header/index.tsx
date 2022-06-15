import { FC } from 'react';
export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="flex p-6 font-bold bg-[#204E51]">
      <h1 className="text-white">App Title</h1>
    </header>
  );
};
