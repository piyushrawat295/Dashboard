import React, { useState } from "react";
import '../index.css';
import {
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface FocusData {
  month: string;
  maxFocus: number;
  minFocus: number;
}

const Focusing: React.FC = () => {
  // Sample demo data with months for y-axis
  const data: FocusData[] = [
    { month: "January", maxFocus: 4000, minFocus: 2400 },
    { month: "February", maxFocus: 3000, minFocus: 1398 },
    { month: "March", maxFocus: 2000, minFocus: 9800 },
    { month: "April", maxFocus: 2780, minFocus: 3908 },
    { month: "May", maxFocus: 1890, minFocus: 4800 },
    { month: "June", maxFocus: 2390, minFocus: 3800 },
    { month: "July", maxFocus: 3490, minFocus: 4300 },
  ];

  // State for the selected range
  const [range, setRange] = useState<string>("Last 6 months");

  // Calculate average focus values
  const averageMaxFocus = data.reduce((sum, d) => sum + d.maxFocus, 0) / data.length;
  const averageMinFocus = data.reduce((sum, d) => sum + d.minFocus, 0) / data.length;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="gap-4">
          <h2 className="text-xl font-semibold">Focusing</h2>
          <p className="text-gray-500">Productivity Analysis</p>
        </div>
        <div>
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="border rounded p-2"
          >
            <option value="Last 6 months">Last 6 months</option>
            <option value="Last 12 months">Last 12 months</option>
            <option value="Last 24 months">Last 24 months</option>
          </select>
        </div>
      </div>
      <AreaChart
        width={930}
        height={350}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorMax" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorMin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="maxFocus"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorMax)"
        />
        <Area
          type="monotone"
          dataKey="minFocus"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorMin)"
        />
      </AreaChart>
      <div className="mt-4 flex justify-end">
        <p className="text-gray-500">Average Max Focus: {averageMaxFocus.toFixed(2)}</p>
        <p className="text-gray-500 ml-4">Average Min Focus: {averageMinFocus.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Focusing;
