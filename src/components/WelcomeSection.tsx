import React from "react";
import profile from '../logo2.png';
import '../profile.css';

const WelcomeSection: React.FC = () => {
  return (
    <div className="flex items-start justify-between p-4 relative">
      <div className="flex items-center"> 
        <div className="flex-shrink-0">
          <img 
            src={profile} 
            alt="Profile" 
            className="w-16 h-16 object-contain" 
          />
        </div>
        <div className="flex flex-col justify-start items-start ml-4"> 
          <h1 className="text-2xl font-semibold">Welcome, Piyush</h1>
          <p className="text-gray-500">Your personal dashboard overview</p>
        </div>
      </div>
      
      <div className="relative">
        <div className="input1-container flex items-center border border-gray-300 rounded-full overflow-hidden">
          <input 
            type="text" 
            name="text" 
            className="input1 pl-10 pr-4 py-2 rounded-full focus:outline-none" 
            placeholder="search..."
          />
          <span className="icon1 absolute right-2"> {/* Adjusted to the right */}
            <svg 
              width="19px" 
              height="19px" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_iconCarrier">
                <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
