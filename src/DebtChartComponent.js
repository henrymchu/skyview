import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

function DebtChartComponent() {
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
        type: 'pie'
      },
      title: {
        text: 'Breakdown'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Debt Breakdown',
        colorByPoint: true,
        data: [{
          name: 'Home Loan',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'College Loan',
          y: 11.84
        }, {
          name: 'Auto Loan',
          y: 10.85
        }, {
          name: 'Back Taxes',
          y: 4.67
        }, {
          name: 'Credit Cards',
          y: 4.18
        }, {
          name: 'Others',
          y: 7.05
        }]
      }]
    };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
}

export default DebtChartComponent;