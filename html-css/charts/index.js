var ctx = document.getElementById('myChart').getContext('2d');

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = [0, 10, 5, 2, 20, 30, 45];

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: data,
      }
    ]
  },

  // Configuration options go here
  options: {}
});

setInterval(() => {
  const value = data[data.length - 1] + 1;
  data.push(value);
  labels.push(`X ${value}`);
  chart.update();
}, 1000);

