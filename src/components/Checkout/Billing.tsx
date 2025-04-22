'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Billing = ({ onSubmit }) => {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Australia',
    address: '',
    addressTwo: '',
    town: '',
    state: '',
    phone: '',
    email: '',
    createAccount: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);
    // Load form data from local storage on mount
  useEffect(() => {
      const savedData = localStorage.getItem('billingData');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }, []);
  
    // Handle input changes and save to local storage
  const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => {
        const updatedData = {
          ...prev,
          [name]: type === 'checkbox' ? checked : value,
        };
        // Save to local storage immediately
        localStorage.setItem('billingData', JSON.stringify(updatedData));
        return updatedData;
      });
    };
  
  // Load data from URL params and localStorage
  useEffect(() => {
    const loadData = () => {
      try {
        // Get URL parameters
        const urlParams = {
          firstName: searchParams?.get('firstName') || '',
          lastName: searchParams?.get('lastName') || '',
          companyName: searchParams?.get('companyName') || '',
          country: searchParams?.get('country') || 'Australia',
          address: searchParams?.get('address') || '',
          addressTwo: searchParams?.get('addressTwo') || '',
          town: searchParams?.get('town') || '',
          state: searchParams?.get('state') || '',
          phone: searchParams?.get('phone') || '',
          email: searchParams?.get('email') || '',
        };

        // Merge data sources (URL params override localStorage)
        return {
          ...urlParams
        };
      } catch (error) {
        console.error('Error loading form data:', error);
        localStorage.removeItem('billingData');
        return {
          firstName: '',
          lastName: '',
          companyName: '',
          country: 'Australia',
          address: '',
          addressTwo: '',
          town: '',
          state: '',
          phone: '',
          email: '',
          createAccount: false,
        };
      }
    };

    const initialData = loadData();
    setIsLoading(false);
  }, [searchParams]);

  // Auto-save to localStorage when formData changes
 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = [
      'firstName', 'lastName', 'country',
      'address', 'town', 'state', 'phone', 'email'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }
    
    // Validate phone format
    if (!/^[\d\s\-()+]+$/.test(formData.phone)) {
      alert('Please enter a valid phone number');
      return;
    }
    
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    onSubmit(formData);
  };
  useEffect(() => {
    const savedBillingData = localStorage.getItem("billingData");
    console.log(savedBillingData)
    if (savedBillingData) {
      try {
        const parsedData = JSON.parse(savedBillingData);
        const { firstName, email, phone } = parsedData;
  
        console.log("firstName:", firstName);
        console.log("Email:", email);
        console.log("Phone:", phone);
      } catch (error) {
        console.error("Failed to parse billingData from localStorage:", error);
      }
    } else {
      console.warn("No billingData found in localStorage");
    }
  }, []);
  
  const resetForm = () => {
    if (confirm('Are you sure you want to reset all fields?')) {
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        country: 'Australia',
        address: '',
        addressTwo: '',
        town: '',
        state: '',
        phone: '',
        email: '',
        createAccount: false,
      });
      localStorage.removeItem('billingData');
      setHasChanges(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#800000]"></div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex justify-between items-center mb-5.5">
        <h2 className="font-medium text-dark text-xl sm:text-2xl">
          Billing Details
        </h2>
        {hasChanges && (
          <span className="text-sm text-gray-500">Unsaved changes</span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
        {/* First Name */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
          <div className="w-full">
            <label htmlFor="firstName" className="block mb-2.5">
              First Name <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              required
            />
          </div>

          {/* Last Name */}
          <div className="w-full">
            <label htmlFor="lastName" className="block mb-2.5">
              Last Name <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              required
            />
          </div>
        </div>

        {/* Company Name */}
        {/* <div className="mb-5">
          <label htmlFor="companyName" className="block mb-2.5">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />
        </div> */}

        {/* Country */}
        <div className="mb-5">
          <label htmlFor="country" className="block mb-2.5">
            Country/Region <span className="text-red">*</span>
          </label>
          <div className="relative">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full bg-gray-1 rounded-md border border-gray-3 text-dark-4 py-3 pl-5 pr-9 duration-200 appearance-none outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              required
            >
              <option value="Australia">India</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-4">
              <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.41469 5.03569L2.41467 5.03571L2.41749 5.03846L7.76749 10.2635L8.0015 10.492L8.23442 10.2623L13.5844 4.98735L13.5844 4.98735L13.5861 4.98569C13.6809 4.89086 13.8199 4.89087 13.9147 4.98569C14.0092 5.08024 14.0095 5.21864 13.9155 5.31345C13.9152 5.31373 13.915 5.31401 13.9147 5.31429L8.16676 10.9622L8.16676 10.9622L8.16469 10.9643C8.06838 11.0606 8.02352 11.0667 8.00039 11.0667C7.94147 11.0667 7.89042 11.0522 7.82064 10.9991L2.08526 5.36345C1.99127 5.26865 1.99154 5.13024 2.08609 5.03569C2.18092 4.94086 2.31986 4.94086 2.41469 5.03569Z"
                  fill=""
                  stroke=""
                  strokeWidth="0.666667"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Address Fields */}
        <div className="mb-5">
          <label htmlFor="address" className="block mb-2.5">
            Street Address <span className="text-red">*</span>
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="House number and street name"
            value={formData.address}
            onChange={handleChange}
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            required
          />
          <div className="mt-5">
            <input
              type="text"
              name="addressTwo"
              id="addressTwo"
              placeholder="Apartment, suite, unit, etc. (optional)"
              value={formData.addressTwo}
              onChange={handleChange}
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            />
          </div>
        </div>

        {/* Town/City */}
        <div className="mb-5">
          <label htmlFor="town" className="block mb-2.5">
            Town/City <span className="text-red">*</span>
          </label>
          <input
            type="text"
            name="town"
            id="town"
            value={formData.town}
            onChange={handleChange}
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            required
          />
        </div>

        {/* State */}
        <div className="mb-5">
          <label htmlFor="state" className="block mb-2.5">
            State <span className="text-red">*</span>
          </label>
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={handleChange}
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2.5">
            Phone <span className="text-red">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-5.5">
          <label htmlFor="email" className="block mb-2.5">
            Email Address <span className="text-red">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            required
          />
        </div>

        {/* Create Account Checkbox */}
        <div className="mb-5">
          <label htmlFor="createAccount" className="text-dark flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                name="createAccount"
                id="createAccount"
                checked={formData.createAccount}
                onChange={handleChange}
                className="sr-only"
              />
              {/* <div className="mr-2 flex h-4 w-4 items-center justify-center rounded border border-gray-4">
                {formData.createAccount && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4.00006" width="16" height="16" rx="4" fill="#800000"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.3103 9.25104C16.471 9.41178 16.5612 9.62978 16.5612 9.85707C16.5612 10.0844 16.471 10.3024 16.3103 10.4631L12.0243 14.7491C11.8635 14.9098 11.6455 15.0001 11.4182 15.0001C11.191 15.0001 10.973 14.9098 10.8122 14.7491L8.24062 12.1775C8.08448 12.0158 7.99808 11.7993 8.00003 11.5745C8.00199 11.3498 8.09214 11.1348 8.25107 10.9759C8.41 10.8169 8.62499 10.7268 8.84975 10.7248C9.0745 10.7229 9.29103 10.8093 9.4527 10.9654L11.4182 12.931L15.0982 9.25104C15.2589 9.09034 15.4769 9.00006 15.7042 9.00006C15.9315 9.00006 16.1495 9.09034 16.3103 9.25104Z" fill="white"/>
                  </svg>
                )}
              </div> */}
            </div>
          </label>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2.5 px-5 bg-[#800000] text-white rounded-md hover:bg-[#600000] duration-200"
        >
          Submit Billing Details
        </button>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={resetForm}
            className="py-2 px-4 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Reset Form
          </button>
          {/* <button
            type="submit"
            className="py-2.5 px-5 bg-[#800000] text-white rounded-md hover:bg-[#600000] duration-200 disabled:opacity-50"
            disabled={!hasChanges}
          >
            {hasChanges ? 'Save & Continue' : 'Continue'}
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Billing;