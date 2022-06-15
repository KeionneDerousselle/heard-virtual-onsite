import { FC } from 'react';
export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="flex p-6 font-bold bg-[#204E51]">
      <div className="flex justify-between my-container">
        <div className="flex items-center">
          <button className="relative inline-flex items-center justify-center w-8 h-8 p-0 m-0 mr-2 text-lg text-white bg-transparent border-none rounded-full">
            ⬅
          </button>
          <h1 className="inline-block text-white">June 2022</h1>
        </div>

        <button className="relative flex items-center justify-center w-8 h-8 p-0 m-0 text-lg bg-white border-none rounded-full shadow-md text-[#204E51]">
          ➕
        </button>
      </div>
    </header>
  );
};
