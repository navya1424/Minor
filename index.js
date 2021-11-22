var line =["M1427,350 A70,70  25 0,1 445,245 ",

"M1427,350 A976,223  -10 0,0 1290,348",

"M1427,350 A976,223  -10 0,0 1542,280",

"M1427,350 A50,50   20 0,0 980,165" ,

"M1427,350 A976,223  -10 0,0 1039,177",

 "M1427,350 A976,223  -10 0,0 1010,169.8",

"M1427,350 A976,223  -10 0,0 1485,350",

 "M1427,350 A976,223  -10 0,0 1450,322",

];
var counter=0;
var element = document.getElementById("LINE-IN-USA");
var time = setInterval(change,3000);

function change(){
  element.setAttribute("d" ,line[counter]);
  counter++;

  if (counter>= line.length){
    counter=0;
  }

}


var circle =["445",
"1290",
"1542",
"980",
"1039",
"1010",
"1485",
"1450",
];
var counter1=0;
var element1 = document.getElementById("circle-1");
var time1 = setInterval(change1,3000);

function change1(){
  element1.setAttribute("cx" ,circle[counter1]);
  counter1++;

  if (counter1>= circle.length){
    counter1=0;
  }

}

var circle1 =["245",
"348",
"280",
"165",
"177",
"169.8",
"350",
"322",
];
var counter2=0;
var element2 = document.getElementById("circle-1");
var time2 = setInterval(change2,3000);

function change2(){
  element2.setAttribute("cy" ,circle1[counter2]);
  counter2++;

  if (counter2>= circle1.length){
    counter2=0;
  }

 // zoom
// let zoom = d3.zoom().on("zoom", zoomed);
//
// let svg = d3.select("svg")
//   .attr("width", "100%")
//   .attr("height", "100%")
//   .style("background-color", "#eeeeee")
//   .call(zoom)
//   .on("dblclick.zoom", null);
// let g = svg.append("g");
// //d3.selectAll("#zoom-section i").on("click", zoomClick);
// g.append("circle").attr("r", 50).attr("fill", "red");
// d3.select("#zoom_in").on("click", function() {
//   zoom.scaleBy(svg.transition().duration(750), 1.2);
// });
// d3.select("#zoom_out").on("click", function() {
//   zoom.scaleBy(svg.transition().duration(750), 0.8);
// });
//
// function zoomed() {
//     g.attr("transform", d3.event.transform);
}
