import { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import './Dashboard.scss';

// src/pages/Dashboard.js
const Dashboard = () => {
    const [columnChartData, setColumnChartData] = useState(null);
    const [lineChartData, setLineChartData] = useState(null);
    const [candlestickChartData, setCandlestickChartData] = useState(null);

    // Fetch column chart data
    useEffect(() => {
        fetch('http://localhost:3001/sales')
            .then(response => response.json())
            .then(data => setColumnChartData(data));
    }, []);

    // Fetch line chart data
    useEffect(() => {
        fetch('http://localhost:3001/revenue')
            .then(response => response.json())
            .then(data => setLineChartData(data));
    }, []);

    // Fetch candlestick chart data
    useEffect(() => {
        fetch('http://localhost:3001/candlestick')
            .then(response => response.json())
            .then(data => setCandlestickChartData(data));
    }, []);

    if (!columnChartData || !lineChartData || !candlestickChartData) {
        return <div>Loading charts...</div>;
    }

    return (
        <div className="grid grid-rows-3 h-full">

            {/* First Row: 4 Columns */}
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-5">
                {/* Repeat the card component as needed */}
                {[...Array(4)].map((_, index) => (
                    <div className="bg-transparent" key={index}>
                        <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                            {/* Replace SVG and content as needed */}
                            <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                {/* Your SVG path here */}
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need help with Claims?</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Guideline on how to certify for your benefits:</p>
                            <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                                See our guideline
                                <svg className="w-3 h-3 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    {/* Your SVG path here */}
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Second Row: 3 Columns */}
            <div className="grid xl:grid-cols-3 lg:grid-cols-2">
                <div className="bg-transparent ">
                    <ApexCharts
                        options={{ xaxis: { categories: columnChartData.categories }, chart: { type: 'bar' } }}
                        series={columnChartData.series}
                        type="bar"
                    />
                </div>
                <div className="bg-transparent ">
                    <ApexCharts
                        options={{ xaxis: { categories: lineChartData.categories }, chart: { type: 'line' } }}
                        series={lineChartData.series}
                        type="line"
                    />
                </div>
                <div className="bg-transparent">
                    <ApexCharts
                        options={{ xaxis: { type: 'datetime' }, chart: { type: 'candlestick' } }}
                        series={candlestickChartData.series}
                        type="candlestick"
                    />
                </div>
            </div>

            {/* Third Row: 2 Columns */}
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-4">

                <div className="bg-transparent col-span-2 p-4">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">
                                        White
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                        Black
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Google Pixel Phone
                                    </th>
                                    <td class="px-6 py-4">
                                        Gray
                                    </td>
                                    <td class="px-6 py-4">
                                        Phone
                                    </td>
                                    <td class="px-6 py-4">
                                        $799
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple Watch 5
                                    </th>
                                    <td class="px-6 py-4">
                                        Red
                                    </td>
                                    <td class="px-6 py-4">
                                        Wearables
                                    </td>
                                    <td class="px-6 py-4">
                                        $999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-transparent p-4 h-20">
                    <ol class="relative border-s border-gray-200 dark:border-gray-700">
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg></a>
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                        <li class="ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
