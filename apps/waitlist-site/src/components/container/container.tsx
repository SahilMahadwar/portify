import { ReactElement } from 'react';

/* eslint-disable-next-line */
export interface ContainerProps {
  children?: ReactElement;
}

export function Container(props: ContainerProps) {
  const { children } = props;
  return <div className="mx-auto max-w-[1140px]">{children}</div>;
}

export default Container;
