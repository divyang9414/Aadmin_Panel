const ctx1 = document.getElementById('myChart1');
  new Chart(ctx1, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100, 220, 122],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 99, 12)',
          'rgb(54, 12, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
        },
        title: {
          display: true
        }
      }
    }
  });


const ctx2 = document.getElementById('myChart2');
  new Chart(ctx2, {
    type: 'bubble',
    data: {
      datasets: [{
        label: 'tu ja re',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 24,
          y: 16,
          r: 15
        }, {
          x: 28,
          y: 20,
          r: 15
        }, {
          x: 32,
          y: 14,
          r: 15
        }, {
          x: 36,
          y: 22,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(205, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 99, 12)',
          'rgb(54, 12, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
        },
        title: {
          display: true
        }
      }
    }
  });


// const ctx3 = document.getElementById('myChart3');
//   new Chart(ctx3, {
//     type: 'line',
//     data: {
//       datasets: [{
//         data: [60, 80, 60, 80, 65, 70],
//         backgroundColor: 'rgb(75, 192, 192)',
//         fill: true,
//         borderColor: 'rgb(75, 192, 192)'
//       }]
//     },
//     options: {
//       plugins: {
//         title: {
//           display: true,
//         }
//       }
//     }
//   });