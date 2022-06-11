import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface FormErrorMessageProps extends PropsWithChildren<unknown> {
  className?: string;
}

export const FormErrorMessage: FC<FormErrorMessageProps> = ({ children, className }) => (
  <p className={classNames('text-sm text-left block text-red-600', className)}>{children}</p>
);
