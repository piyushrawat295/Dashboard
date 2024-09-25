import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTrello, faSlack } from '@fortawesome/free-brands-svg-icons';

const Trackers: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Trackers connected</h2>
        <p className="text-gray-500">3 active connections</p>
      </div>
      <div className="flex space-x-4 mt-4">
        <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-200">
          <FontAwesomeIcon icon={faGoogle} className="text-3xl text-gray-800" />
        </div>
        <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-200">
          <FontAwesomeIcon icon={faTrello} className="text-3xl text-gray-800" />
        </div>
        <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-200">
          <FontAwesomeIcon icon={faSlack} className="text-3xl text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Trackers;
