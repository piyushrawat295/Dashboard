import React from "react";

const DevelopedAreas: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold">Developed areas</h2>
      <p className="text-gray-500">Most common areas of interests</p>
      <div className="container">
        <div className="skill-box">
          <span className="title">Python</span>
          <div className="skill-bar">
            <span className="skill-per html" style={{ width: '80%' }}>
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">PHP</span>
          <div className="skill-bar">
            <span className="skill-per css" style={{ width: '30%' }}>
              <span className="tooltip">30%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Java</span>
          <div className="skill-bar">
            <span className="skill-per javascript" style={{ width: '40%' }}>
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">C++</span>
          <div className="skill-bar">
            <span className="skill-per nodejs" style={{ width: '60%' }}>
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopedAreas;
