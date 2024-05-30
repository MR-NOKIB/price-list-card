/* eslint-disable no-unused-vars */
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const students = [
        {
            id: 1,
            name: "Alice",
            phy: 85,
            chem: 90,
            math: 92
        },
        {
            id: 2,
            name: "Bob",
            phy: 78,
            chem: 84,
            math: 80
        },
        {
            id: 3,
            name: "Charlie",
            phy: 88,
            chem: 76,
            math: 89
        },
        {
            id: 4,
            name: "David",
            phy: 92,
            chem: 81,
            math: 85
        },
        {
            id: 5,
            name: "Eva",
            phy: 79,
            chem: 85,
            math: 91
        },
        {
            id: 6,
            name: "Frank",
            phy: 74,
            chem: 88,
            math: 77
        },
        {
            id: 7,
            name: "Grace",
            phy: 91,
            chem: 90,
            math: 86
        },
        {
            id: 8,
            name: "Hannah",
            phy: 83,
            chem: 87,
            math: 88
        },
        {
            id: 9,
            name: "Ivy",
            phy: 76,
            chem: 80,
            math: 84
        },
        {
            id: 10,
            name: "Jack",
            phy: 89,
            chem: 85,
            math: 87
        },
        {
            id: 11,
            name: "Kara",
            phy: 77,
            chem: 79,
            math: 82
        },
        {
            id: 12,
            name: "Leo",
            phy: 86,
            chem: 92,
            math: 90
        }
    ];

    return (
        <div className=''>
            <LineChart
            width={1000}
            height={300}
            data={students}
            >
                <Line dataKey="phy"></Line>
                <Line stroke="#82ca9d" dataKey="chem"></Line>
                <Line dataKey="math"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;