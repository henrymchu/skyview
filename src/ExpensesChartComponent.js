import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

function ExpensesChartComponent() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://your-backend.com/data');
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartOptions = {
    chart: {
      type: 'bar',
      borderWidth: 0,
      plotBorderWidth: 0,
      plotShadow: false,
      shadow: false,
      borderColor: 'transparent',
      plotBorderColor: 'transparent'
    },
    title: {
      text: 'Analysis'
    },
    xAxis: {
      categories: ['Mortage', 'Auto', 'Health Insurance', 'Groceries', 'Restaurants', 'Gas', 'Clothes', "Memberships"]
    },
    yAxis: {
      title: {
        text: 'Percentage'
      }
    },
    series: [{
      name: 'Jennifer',
      data: [
        {y: 35, color: '#33FF57'},
        {y: 15, color: '#FF5733'},
        {y: 15, color: '#3357FF'},
        {y: 9, color: '#F1C40F'},
        {y: 9, color: '#9B59B6'},
        {y: 8, color: '#074C3C'},
        {y: 5, color: '#1ABC9C'},
        {y: 5, color: '#34495E'}
      ]
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
}

export default ExpensesChartComponent;