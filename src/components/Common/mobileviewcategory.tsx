'use client';

import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircle, faGem, faSeedling, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const NavigationBar: FC = () => {
  return (
    <nav className="flex justify-around items-center py-4 border-t border-gray-300 bg-white fixed bottom-0 w-full">
      <Link href="/" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faHome} className="text-2xl" />
        <span className="text-sm mt-1">Home</span>
      </Link>
      <Link href="/bracelets" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faCircle} className="text-2xl" />
        <span className="text-sm mt-1">Bracelets</span>
      </Link>
      <Link href="/gemstones" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faGem} className="text-2xl" />
        <span className="text-sm mt-1">Gemstones</span>
      </Link>
      <Link href="/rudraksha" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faSeedling} className="text-2xl" />
        <span className="text-sm mt-1">Rudraksha</span>
      </Link>
      <Link href="/account" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faUser} className="text-2xl" />
        <span className="text-sm mt-1">Account</span>
      </Link>
    </nav>
  );
};

export default NavigationBar;
