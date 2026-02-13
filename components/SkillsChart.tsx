import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, BarChart, Bar, XAxis, YAxis, Cell } from 'recharts';
import { Skill, RoleType } from '../types';
import { COLORS } from '../constants';

interface SkillsChartProps {
  skills: Skill[];
  roleType: RoleType;
}

const SkillsChart: React.FC<SkillsChartProps> = ({ skills, roleType }) => {
  const color = COLORS[roleType].hex;

  // Split technical/tools vs soft skills for variety
  const techSkills = skills.filter(s => s.category !== 'soft');

  return (
    <div className="w-full h-[300px] mt-8">
       {/* Use Bar Chart for minimalist readability */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={techSkills}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis type="number" hide domain={[0, 100]} />
            <YAxis 
              dataKey="name" 
              type="category" 
              tick={{ fill: '#a3a3a3', fontSize: 12, fontFamily: 'JetBrains Mono' }} 
              width={100}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ backgroundColor: '#171717', border: '1px solid #333', color: '#fff' }}
            />
            <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
              {techSkills.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={color} fillOpacity={0.8 + (index * 0.05)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;
