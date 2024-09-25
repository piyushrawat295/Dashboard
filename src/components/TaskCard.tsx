import React from 'react';
import '../index.css'; // Import the corresponding CSS for styling

const TaskCard: React.FC = () => {
    return (
      <div className='flex gap-10'>
        <div className="card1">
            <div className="banner">
                <span className="banner-text">Type 1</span>
                <span className="banner-text">Prioritized</span>
            </div>
            <span className="card1__title">Prioritized Task</span>
            <span className="card1__titlex">85%</span>
            <p className="card1__subtitle">Avg Completed</p>
        </div>
      
        <div className="card1">
            <div className="banner">
                <span className="banner-text">Type 2</span>
                <span className="banner-text">Additional</span>
            </div>
            <span className="card1__title">Additional Task</span>
            <span className="card1__titlex">75%</span>
            <p className="card1__subtitle">Avg Completed</p>
        </div>
      </div>
    );
};

export default TaskCard;
