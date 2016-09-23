window.onload = function() {
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["Understanding", "Conversation", "Collaboration", "Mannerisms", "Eloquence", "Honesty"],
      datasets: [{
        label: 'Strengths',
        data: [20, 35, 43, 12, 20, 33],
        backgroundColor: [
          'rgba(79, 196, 177, 0.7)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    })
  };
