import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const Statistics = () => {
    const marksArray = [
        {
          name:"Html",
          assignment:"assignment-1",
          marks:50
        },
        {
          name:"Html",
          assignment:"assignment-2",
          marks:53
        },
        {
          name:"Html",
          assignment:"assignment-3",
          marks:60,
          
        },
        {
          name:"Html",
          assignment:"assignment-4",
          marks:59
        },
        {
          name:"Html",
          assignment:"assignment-5",
          marks:58
        },
        {
          name:"Html",
          assignment:"assignment-6",
          marks: 58      
         },
        {
          name:"Html",
          assignment:"assignment-7",
          marks:60
        }
    ]
    return (
          <div>
               <div className='banner d-flex justify-content-start'>
                <img src="./images/Vector.png"/>
                <h2 className='text-justify mx-5 px-5 py-5'>Statistics</h2>

               </div>  
            <div className='p-3'>
            <ResponsiveContainer className=''width="80%" height={300}>  
            <ComposedChart
            data={marksArray}>
          <Bar dataKey="marks" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="assignment" stroke="#ff7300" />
          <XAxis dataKey="assignment" />
                <YAxis dataKey="marks"></YAxis>
                <Tooltip />
                <Legend/>
            </ComposedChart>
      </ResponsiveContainer>
        </div>       
            
        </div>   
        
    );
};

export default Statistics;