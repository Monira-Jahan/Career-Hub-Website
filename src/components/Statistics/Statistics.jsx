import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const Statistics = () => {
    const marksArray = [
        {
          id: 1,
          assignment_1:50
        },
        {
          id: 2,
          assignment_2:53
        },
        {
          id: 3,
          assignment_3:60,
          
        },
        {
          id: 4,
          assignment_4:59
        },
        {
          id: 5,
          assignment_5:58
        },
        {
          id: 6,
          assignment_6: 58      
         },
        {
          id: 7,
          assignment_7:60
        }
    ]
    return (
        <div>
                 
        <PieChart width={700} height={700}
        >
          <Pie
            dataKey="assignment_1"
        
            startAngle={180}
            endAngle={0}
            data={marksArray}
            
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="assignment_2"
        
            startAngle={180}
            endAngle={0}
            data={marksArray}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          

          <Tooltip/>
          
        </PieChart>
      
                
            
            
        </div>
    );
};

export default Statistics;