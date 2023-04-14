import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const PhonePriceChat = () => {
    const [phone, setPhone] = useState([])
      
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const lodeData = data.data.data;
            const phoneData = lodeData.map(phone => {
                  const part = phone.slug.split('-')
                  const price = parseInt(part[1])
                  const phoneInfo = {
                      name:phone.phone_name,
                      price:price

                  }
                  return phoneInfo
                 })
            setPhone(phoneData)
        })

    },[])
    
    return (
        <div>
            <BarChart
          width={500}
          height={300}
          data={phone}
          barSize={20}
        >
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name" scale="point" />
          <YAxis />
        
        </BarChart>
        </div>
    );
};

export default PhonePriceChat;