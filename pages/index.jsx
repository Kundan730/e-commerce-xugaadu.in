/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';
import { Categories, Hero, MyHead, ProductsGrid } from '../components';
import { db } from '../config';
import { Product } from '../models';
import { cva } from 'class-variance-authority';
import {
  FiTruck,
  FiCreditCard,
  FiCornerDownLeft,
  FiStar,
} from 'react-icons/fi';

import { useEffect, useState } from 'react';

const ring = cva(
  [
    'absolute',
    'top-1/2',
    'left-1/2',
    '-translate-x-1/2',
    '-translate-y-1/2',
    '-z-10',
    'border-2',
    'rounded-full',
  ],
  {
    variants: {
      size: {
        small: ['h-80', 'w-80'],
        medium: ['h-[25rem]', 'w-[25rem]'],
        large: ['h-[30rem]', 'w-[30rem]'],
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const BgRing = (props) => {
  return <span className={ring(props.size)} />;
};

export default function Home({ products }) {

	const [ringVisible, setRingVisible] = useState(false);

  useEffect(() => {
    setRingVisible(true);
  }, []);

  return (
    <div>
      <MyHead />
      <Hero />
      <Categories />

      {/* Why choose us section */}

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          </header>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <li className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-300">
              <FiTruck className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Free Shipping
              </h3>
              <p className="text-gray-700 text-center">
                Enjoy free shipping on all orders for initial days.
              </p>
            </li>

            <li className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-300">
              <FiCreditCard className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Easy Payments
              </h3>
              <p className="text-gray-700 text-center">
                We offer secure and hassle-free payment options for a seamless
                checkout experience.
              </p>
            </li>

            <li className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-300">
              <FiCornerDownLeft className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Money-Back Guarantee
              </h3>
              <p className="text-gray-700 text-center">
                Not satisfied with your purchase? Return it within 30 days for a
                full refund.
              </p>
            </li>

            <li className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-300">
              <FiStar className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-700 text-center">
                Experience the finest craftsmanship with our carefully curated
                selection of products.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* main products grid */}
      <section
        aria-labelledby="products-heading"
        className="xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div className="flex px-4 sm:px-6 py-4 sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2
            id="favorites-heading"
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            New Arrivals
          </h2>
          <NextLink href={'/search?sort=newest'} passHref>
            <p className="hidden md:block text-sm font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
              Browse all<span aria-hidden="true"> &rarr;</span>
            </p>
          </NextLink>
        </div>
        <ProductsGrid products={products?.slice(0, 8)} />
        <div className="block md:hidden -mt-4">
          <NextLink href={'/search?sort=newest'} passHref>
            <p className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
              Browse all<span aria-hidden="true"> &rarr;</span>
            </p>
          </NextLink>
        </div>
      </section>

			<section className="flex items-center max-lg:flex-col-reverse justify-around gap-8 max-lg:text-center">
        <div className="relative">
          <img
            width={370}
            src="/images/app/oie_Dyji5uNOjrWG.png"
            alt="Image of the mobile app"
          />

          {ringVisible && (
            <>
              <BgRing size={'small'} />
              <BgRing size={'medium'} />
              <BgRing size={'large'} />

              <span className="block w-8 h-8 rounded-full bg-yellow-500 absolute top-16 -right-4"></span>
              <span className="block w-4 h-4 rounded-full bg-slate-400 absolute top-12 -left-4"></span>
              <span className="block w-5 h-5 rounded-full bg-yellow-500 absolute bottom-24 -left-8"></span>
              <span className="block w-2 h-2 rounded-full bg-slate-400 absolute bottom-32 -right-8"></span>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

// get products from database
export async function getServerSideProps() {
  // connect to database
  await db.connect();
  // get products and convert it to js object
  const products = await Product.find({}, '-reviews')
    .sort({ createdAt: -1 })
    .lean();
  // disconect from database
  await db.disconnect();

  return {
    props: {
      // pass products and convert _id, createdAt, updateAt to string
      products: products.map(db.convertDocToObj),
    },
  };
}
