Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#333';
//var x;

function myFunction(){
  //  var x = document.getElementById("dropdown").value;
  //document.getElementById("demo").innerHTML = "You selected: " + x;
  // Request data using D3
  d3.csv('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2814973/atp_wta.csv').then(makeChart);
}

//document.getElementById("demo").innerHTML = "You selected: " + x;
const changeHiddenInput = (objDropDown) =>{
  console.log(objDropDown.value);
}

function makeChart(players) {
  
  // players is an array of objects where each object is something like:
  // {
  //   "Name": "Steffi Graf",
  //   "Weeks": "377",
  //   "Gender": "Female"
  // }


  var playerLabels = players.map(function(d) {return d.Name});
  var weeksData = players.map(function(d) {return +d.Weeks});
  var playerColors = players.map(function(d) {return d.Gender === 'Female' ? '#F15F36' : '#19A0AA';});


  var x = document.getElementById("dropdown").value;
  console.log(x);
  var chart = new Chart('chart', {
    type: x,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Weeks at No.1',
              fontSize: 16
            }
          }
        ]
      }
    },
    data: {
      labels: playerLabels,
      datasets: [
        {
          data: weeksData,
          backgroundColor: playerColors
        }
      ]
    }
  })
}



