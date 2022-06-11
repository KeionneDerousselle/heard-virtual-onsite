import { FC, PropsWithChildren } from 'react';
import { Header } from '@/components/molecules/header';
import { Footer } from '@/components/molecules/footer';

export interface LayoutProps extends PropsWithChildren<unknown> {
  className?: string;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <Header />
      <main className="w-full overflow-x-hidden flex-[1_0_auto]">{children}</main>
      <Footer className="flex-shrink-0" />
    </div>
  );
};
