'use client';

import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faCircle, 
  faGem, 
  faSeedling, 
  faUser,
  faHouseChimney,
  faRing,
  faGem as faGemSolid,
  faLeaf,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const NavigationBar: FC = () => {
  return (
    <nav className="md:hidden flex justify-around items-center py-4 border-t border-gray-200 bg-white fixed bottom-0 left-0 right-0 w-full shadow-lg z-50">
      <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-[#800000] transition-colors duration-200">
        <FontAwesomeIcon icon={faHouseChimney} className="text-xl" />
        <span className="text-xs mt-1 font-medium">Home</span>
      </Link>
      <Link href="/bracelets" className="flex flex-col items-center text-gray-600 hover:text-[#800000] transition-colors duration-200">
        <FontAwesomeIcon icon={faRing} className="text-xl" />
        <span className="text-xs mt-1 font-medium">Bracelets</span>
      </Link>
      <Link href="/gemstones" className="flex flex-col items-center text-gray-600 hover:text-[#800000] transition-colors duration-200">
        <FontAwesomeIcon icon={faGemSolid} className="text-xl" />
        <span className="text-xs mt-1 font-medium">Gemstones</span>
      </Link>
      <Link href="/rudraksha" className="flex flex-col items-center text-gray-600 hover:text-[#800000] transition-colors duration-200">
        <FontAwesomeIcon icon={faLeaf} className="text-xl" />
        <span className="text-xs mt-1 font-medium">Rudraksha</span>
      </Link>
      <Link href="/account" className="flex flex-col items-center text-gray-600 hover:text-[#800000] transition-colors duration-200">
        <FontAwesomeIcon icon={faUserCircle} className="text-xl" />
        <span className="text-xs mt-1 font-medium">Account</span>
      </Link>
    </nav>
  );
};

export default NavigationBar;