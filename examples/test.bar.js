const ChartJs = require('..')
const cjs = new ChartJs(1080, 526)

const barConfig = {
  type: 'bar',
  data: {
    labels: ['2019/4', '2019/5', '2019/6', '2019/7', '2019/8', '2019/9', '2019/10', '2019/11', '2019/12', '2020/01', '2020/02', '2020/03', '2020/04'],
    datasets: [{
      label: 'Besucher',
      data: [0, 0, 0, 0, 0, 50, 300, 390, 320, 480, 460, 300, 400],
      backgroundColor: 'rgba(44, 130, 201, 0.2)',
      borderColor: 'rgba(75, 119, 190, 0.2)',
      borderWidth: 1
    },
    {
      label: 'Seitenaufrufe',
      data: [0, 0, 0, 0, 0, 100, 700, 730, 600, 900, 800, 600, 790],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  },
  defaults: {
    global: {
      defaultFontFamily: "Oswald"
    }
  }
}

cjs.makeChart(barConfig)
  .then(res => {
    cjs.drawChart();
    cjs.toFile('test.bar.png');
  })
  .catch(console.error)

