/* eslint-disable @next/next/no-img-element */
import BgRing from './BgRing';
import React from 'react';

const AppShowCase = () => {
  return (
    <section className="flex items-center max-lg:flex-col-reverse justify-around gap-8 max-lg:text-center overflow-hidden">
      <div className="relative">
        <img
          width={370}
          src="/images/app/oie_Dyji5uNOjrWG.png"
          alt="Image of the mobile app"
        />

        <BgRing size={'small'} />
        <BgRing size={'medium'} />
        <BgRing size={'large'} />

        <span className="block w-8 h-8 rounded-full bg-yellow-500 absolute top-16 -right-4"></span>
        <span className="block w-4 h-4 rounded-full bg-slate-400 absolute top-12 -left-4"></span>
        <span className="block w-5 h-5 rounded-full bg-yellow-500 absolute bottom-24 -left-8"></span>
        <span className="block w-2 h-2 rounded-full bg-slate-400 absolute bottom-32 -right-8"></span>
      </div>
    </section>
  );
};

export default AppShowCase;
