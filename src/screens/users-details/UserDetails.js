import React, { Component } from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import Graph1 from './../../assets/graph1.svg'
import Graph2 from './../../assets/graph2.svg'

import styles from './UserDetails.module.css'

const options1 = {
  colors: ['#BBDEFB'].reverse(),
  chart: {
    type: 'column',
    backgroundColor: '#fafafa',
    height: 350,
    style: {
      fontFamily: 'Roboto',
    },
  },
  title: {
    text: 'ATTENDANCE',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar'],
    title: {
      text: 'MONTHS',
      style: {
        color: '#2c2c2c',
        fontSize: '12px',
        fontFamily: 'Roboto',
      },
    },
    labels: {
      style: {
        fontSize: '12px',
        color: '#9a9a9a',
      },
    },
  },
  yAxis: {
    lineColor: '#eaeaea',
    lineWidth: 1,
    min: 0,
    title: {
      text: 'NO. OF DAYS',
      margin: 20,
      style: {
        color: '#2c2c2c',
        fontSize: '12px',
        fontFamily: 'Roboto',
      },
    },
    gridLineWidth: 0,
    stackLabels: {
      enabled: false,
      style: {
        fontWeight: 'bold',
        color: '#2c2c2c',
        fontFamily: 'Roboto',
      },
    },
    labels: {
      style: {
        fontSize: '12px',
        color: '#9a9a9a',
        fontFamily: 'Roboto',
      },
    },
  },
  legend: {
    align: 'right',
    x: 0,
    verticalAlign: 'top',
    y: -15,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#fafafa',
    shadow: false,
    itemStyle: {
      fontSize: '12px',
      fontFamily: 'Roboto, sans-serif',
      color: '#9a9a9a',
      fontWeight: '400',
    },
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: 'Total: {point.stackTotal}',
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: false,
      },
      colors: ['#BBDEFB'],
    },
  },
  series: [
    {
      name: 'Attendance',
      data: [29, 11, 6],
    },
  ],
}

const options2 = {
  chart: {
    backgroundColor: '#fafafa',
    height: 350,
    style: {
      fontFamily: 'Roboto',
    },
  },
  title: {
    text: 'Lines of code pushed in last 3 months',
  },

  subtitle: {
    text: 'SOAL',
  },

  yAxis: {
    title: {
      text: 'LINES OF CODE',
    },
  },

  xAxis: {
    categories: ['Jan', 'Feb', 'Mar'],
    title: {
      text: 'MONTHS',
      style: {
        color: '#2c2c2c',
        fontSize: '12px',
        fontFamily: 'Roboto',
      },
    },
    labels: {
      style: {
        fontSize: '12px',
        color: '#9a9a9a',
      },
    },
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#fafafa',
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      // pointStart: 2010,
    },
  },

  series: [
    {
      name: 'Lines of Code',
      data: [934, 503, 177],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },
}
export default class UserDetails extends Component {
  render() {
    return (
      <div className={styles.root}>
        <section className={styles.user_details}>
          <img
            className={styles.user_img}
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            alt=""
          />
          <span>87</span>
          <div className={styles.text_container}>
            <div>Your learning level points</div>
            <div>John, you did a great job last week!</div>
          </div>
          <div className={styles.details_graph}>
            <div>3.5 h</div>
            <div>Last Week</div>
            <img src={Graph1} alt="Details Graph" />
          </div>
          <div className={styles.details_graph}>
            <div>125 h</div>
            <div>Last Month</div>
            <img src={Graph2} alt="Details Graph" />
          </div>
        </section>

        <section className={styles.stats_section}>
          <div className={styles.attendance_card}>
            <HighchartsReact highcharts={Highcharts} options={options1} />
          </div>

          <div className={styles.bottom_cards}>
            <div className={styles.progress_cards_container}>
              <div>Course Progress</div>
              <div className={styles.progress_card}>
                <div className={styles.course_progress}>
                  <div className={styles.course_name}>Advanced React.Js</div>
                  <div className={styles.progress_percentage}>80%</div>
                  <div className={styles.progress}>
                    <div className={styles.filler}></div>
                  </div>
                </div>
              </div>
              <div className={styles.progress_card}>
                <div className={styles.course_progress}>
                  <div className={styles.course_name}>React + Django</div>
                  <div className={styles.progress_percentage}>70%</div>
                  <div className={styles.progress}>
                    <div className={styles.filler_2}></div>
                  </div>
                </div>
              </div>
              <div className={styles.progress_card}>
                <div className={styles.course_progress}>
                  <div className={styles.course_name}>Advanced Node.Js</div>
                  <div className={styles.progress_percentage}>60%</div>
                  <div className={styles.progress}>
                    <div className={styles.filler_3}></div>
                  </div>
                </div>
              </div>
              <div className={styles.progress_card}>
                <div className={styles.course_progress}>
                  <div className={styles.course_name}>React + GraphQL</div>
                  <div className={styles.progress_percentage}>90%</div>
                  <div className={styles.progress}>
                    <div className={styles.filler_4}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.code_card}>
              <HighchartsReact highcharts={Highcharts} options={options2} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
