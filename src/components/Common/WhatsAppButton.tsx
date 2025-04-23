// components/CallButton.tsx
import React from 'react';
import { FaPhone } from 'react-icons/fa';

interface CallButtonProps {
  phoneNumber: string;
  label?: string;
  className?: string;
}

const CallButton: React.FC<CallButtonProps> = ({
  phoneNumber,
  label = 'Call us',
  className = '',
}) => {
  // Format phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, '');

  // Create tel URL
  const telUrl = `tel:${formattedPhone}`;

  return (
    <div className={`fixed bottom-20 left-2 z-50 md:hidden ${className}`}>
      <a
        href={telUrl}
        className="flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#440404] text-white font-medium py-2 px-3 rounded-full shadow-lg transition-all duration-300"
        aria-label="Call us"
      >
        <FaPhone className="text-xl" />
        <span>{label}</span>
      </a>
    </div>
  );
};

export default CallButton;