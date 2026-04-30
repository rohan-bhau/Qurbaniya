import notFound from '@/assets/not-found.png';
import Link from 'next/link';
import { inter, poppins } from './layout';
import { Button } from '@heroui/react';

const NotFoundPage = () => {
  return (
    <div
      className={`${poppins.className} bg-cover bg-center bg-no-repeat h-screen flex items-center`}
      style={{ backgroundImage: `url(${notFound.src})` }}
    >
      <div className="w-full h-full bg-white/40 flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center w-full">
          <div className="text-left">
            <h1 className="text-6xl md:text-9xl font-bold text-green-700">
              404
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
              Page Not Found
            </h2>

            <p className="text-gray-600 mt-3 max-w-md">
              Oops! The page you are looking for doesn’t exist or has been
              moved.
            </p>

            <Link href="/">
              <Button className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg shadow transition cursor-pointer">
                Go Back Home
              </Button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
