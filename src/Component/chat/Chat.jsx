import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chat = () => {
    const data = [
        {name: 'Page A', uv: 0, pv: 200, amt: 600},
        {name: 'Page b', uv: 200, pv: 100, amt: 300},
        {name: 'Page c', uv: 300, pv: 400, amt: 200},
        {name: 'Page d', uv: 200, pv: 300, amt: 400},
        {name: 'Page e', uv: 500, pv: 200, amt: 400},
        {name: 'Page f', uv: 450, pv: 230, amt: 400},
        {name: 'Page g', uv: 250, pv: 110, amt: 400},
        {name: 'Page h', uv: 230, pv: 150, amt: 400},
  ];
    return (
    <div className='bg-purple-100 mx-10 mb-10'>
    <LineChart className='mx-auto' width={1000} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 10 }}/>
    <XAxis dataKey="name" />
    <YAxis dataKey="amt"/>
    <Tooltip />
    <Legend />
    <CartesianGrid strokeDasharray="4 4" />
    </LineChart>

        </div>
    );
};

export default Chat;