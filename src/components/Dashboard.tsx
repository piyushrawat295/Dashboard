import React from "react";
import WelcomeSection from "./WelcomeSection";
import ProfileCard from "./ProfileCard";
import Trackers from "./Trackers";
import Focusing from "./Focusing";
import Meetings from "./Meetings";
import DevelopedAreas from "./DevelopedAreas";
import TaskCard from "./TaskCard";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex-1 space-y-10">
        <WelcomeSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center w-full">
            <ProfileCard />
          </div>

          <div className="flex flex-col space-y-7">
            <TaskCard /> {/* First Task Card */}
            <Trackers /> {/* Tracker Component */}
          </div>
        </div>

        <Focusing />
      </div>
      <div className="w-full md:w-1/3 space-y-6">
        <Meetings />
        <DevelopedAreas />
      </div>
    </div>
  );
};

export default Dashboard;
