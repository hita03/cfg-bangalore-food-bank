import React from 'react';
import Chart from 'react-apexcharts';


function Impact() {

    let obj={
        width:"50%", 
        margin: "90px"


    }
    var options = {
        chart: {

          height: 150,
          type: "line",
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#FF1654", "#247BA0"],
        series: [
          {
            name: "Number of NGO's reached",
            data: [14, 22, 30, 35, 38, 49, 64, 72]
          },
          {
            name: "Number of lives touched",
            data: [20000, 64500, 82312, 104342, 135432, 156743, 190342, 282333]
          }
        ],
        stroke: {
          width: [4, 4]
        },
        plotOptions: {
          bar: {
            columnWidth: "20%"
          }
        },
        xaxis: {
          categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#FF1654"
            },
            labels: {
              style: {
                colors: "#FF1654"
              }
            },
            title: {
              text: "Number of NGO's reached",
              style: {
                color: "#FF1654"
              }
            }
          },
          {
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#247BA0"
            },
            labels: {
              style: {
                colors: "#247BA0"
              }
            },
            title: {
              text: "Number of lives touched",
              style: {
                color: "#247BA0"
              }
            }
          }
        ],
        tooltip: {
          shared: false,
          intersect: true,
          x: {
            show: false
          }
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40
        }
      };
      
      
      
  return (
    <div>
      <h5 style={obj}>Our Progress</h5>
    <Chart options={options} style={obj}
        series={
            [
                {
                  name: "Number of NGO's reached",
                  data: [10, 14, 19, 22, 27, 34, 41, 46]
                },
                {
                  name: "Number of lives touched",
                  data: [20000, 29000, 57235, 66543, 76343, 97245, 104234, 163322]
                }
              ]
        }
    />

    </div>
  )
}

export default Impact