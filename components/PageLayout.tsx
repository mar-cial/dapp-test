import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const PageLayout = (props: Props) => {
  return (
    <div className="grid h-screen grid-cols-12 text-white bg-gradient-to-r gradient from-indigo-700 to-indigo-900">
      <div className="md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 ">
        {props.children}
      </div>
    </div>
  );
};

export default PageLayout;
