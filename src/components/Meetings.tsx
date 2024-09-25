import React from "react";
import { Calendar } from "lucide-react";
import { FaGoogle, FaVideo } from "react-icons/fa"; // Import icons from react-icons

interface Meeting {
  day: string;
  time: string;
  title: string;
  platform: string;
  platformIcon: JSX.Element; // Type for React elements
}

const meetingsData: Meeting[] = [
  {
    day: "Tue, 11 Jul",
    time: "08:15 am",
    title: "Quick Daily Meeting",
    platform: "Zoom",
    platformIcon: <FaVideo size={16} />, // Zoom icon as video icon
  },
  {
    day: "Tue, 11 Jul",
    time: "09:30 pm",
    title: "John Onboarding",
    platform: "Google Meet",
    platformIcon: <FaGoogle size={16} />, // Google Meet icon as Google logo
  },
  {
    day: "Tue, 12 Jul",
    time: "02:30 pm",
    title: "Call With a New Team",
    platform: "Google Meet",
    platformIcon: <FaGoogle size={16} />, // Google Meet icon
  },
  {
    day: "Tue, 15 Jul",
    time: "04:00 pm",
    title: "Lead Designers Event",
    platform: "Zoom",
    platformIcon: <FaVideo size={16} />, // Zoom icon
  },
];

const Meetings: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My meetings</h2>
        <Calendar size={20} />
      </div>
      <ul>
        {meetingsData.map((meeting, index) => (
          <li key={index} className="mb-3 flex justify-between items-center">
            {/* Date and Time */}
            <div className="flex flex-col items-start">
              <p className="text-gray-500 text-sm">{meeting.day}</p>
              <p className="font-medium text-gray-700">{meeting.time}</p>
            </div>

            {/* Title and Platform Icon */}
            <div className="flex-1 ml-4">
              <p className="font-medium">{meeting.title}</p>
              <div className="flex items-center mt-2">
                <span className="mr-2">{meeting.platformIcon}</span>
                <p className="text-gray-500 text-sm">{meeting.platform}</p>
              </div>
            </div>

            {/* Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-gray-400" // Adjusted size for the arrow
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
        ))}
      </ul>

      <div className="mt-4 text-center">
        <a href="#" className="text-blue-500 font-medium hover:underline">
          See all meetings
        </a>
      </div>
    </div>
  );
};

export default Meetings;
