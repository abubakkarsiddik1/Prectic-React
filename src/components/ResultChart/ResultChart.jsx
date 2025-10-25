import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import renderCustomAxisTick from './RenderCastomTicx';

const resultData = [
  {
    "id": 1,
    "name": "Ariana Rahman",
    "physics": 85,
    "chemistry": 80,
    "math": 90,
    "total": 255,
    "average": 85
  },
  {
    "id": 2,
    "name": "Hasib Ahmed",
    "physics": 75,
    "chemistry": 70,
    "math": 78,
    "total": 223,
    "average": 74.33
  },
  {
    "id": 3,
    "name": "Nusrat Jahan",
    "physics": 92,
    "chemistry": 89,
    "math": 95,
    "total": 276,
    "average": 92
  },
  {
    "id": 4,
    "name": "Rakib Hossain",
    "physics": 68,
    "chemistry": 72,
    "math": 70,
    "total": 210,
    "average": 70
  },
  {
    "id": 5,
    "name": "Sadia Islam",
    "physics": 96,
    "chemistry": 94,
    "math": 98,
    "total": 288,
    "average": 96
  },
  {
    "id": 6,
    "name": "Tanjil Hasan",
    "physics": 81,
    "chemistry": 77,
    "math": 84,
    "total": 242,
    "average": 80.67
  },
  {
    "id": 7,
    "name": "Mitu Akter",
    "physics": 60,
    "chemistry": 65,
    "math": 58,
    "total": 183,
    "average": 61
  },
  {
    "id": 8,
    "name": "Fahim Rahman",
    "physics": 87,
    "chemistry": 85,
    "math": 88,
    "total": 260,
    "average": 86.67
  },
  {
    "id": 9,
    "name": "Rafiul Karim",
    "physics": 78,
    "chemistry": 74,
    "math": 79,
    "total": 231,
    "average": 77
  },
  {
    "id": 10,
    "name": "Tahmina Chowdhury",
    "physics": 90,
    "chemistry": 88,
    "math": 92,
    "total": 270,
    "average": 90
  }
]

  

const ResultChart = () => {
    return (
        <div>
            <div className='flex align-middle justify-center'>
            <LineChart width={800} height={500} data={resultData}>
               <Line dataKey={"math"}></Line>
               <Line dataKey="physics" stroke='red'></Line>
               <Line dataKey={"chemistry"} stroke='black'></Line>
               <Line dataKey={"total"}></Line>
               <Line dataKey={"average"} stroke='#82ca9d'></Line>
               <Line dataKey={'name'}></Line>
               <XAxis dataKey={'name'}></XAxis>          
               <YAxis></YAxis>
            </LineChart>
        </div>

        
        <div className='flex align-middle justify-center pt-10 pb-10'>
               <BarChart width={800} height={300} data={resultData} barCategoryGap="20%" barGap="5">
        <XAxis dataKey="name" tick={renderCustomAxisTick} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="physics" barSize={30} fill="#8884d8" />
        <Bar dataKey="chemistry" barSize={30} fill="#8884d8" />
        <Bar dataKey="math" barSize={30} fill="#8884d8" />
        <Bar dataKey="total" barSize={30} fill="#8884d8" />
      </BarChart>

        </div>
        </div>
    );
};

export default ResultChart;