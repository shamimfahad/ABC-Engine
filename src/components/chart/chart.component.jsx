import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

const Chart = ({ labels, values }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'X',
        data: values,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

const mapStateToProps = (state) => ({
  labels: state.chartData.kp,
  values: state.chartData.x,
});

export default connect(mapStateToProps)(Chart);
