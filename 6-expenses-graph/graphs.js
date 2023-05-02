let graph = document.getElementById("graph");
let weekDays = document.getElementById("week-days");
let weeklyButton = document.getElementById("weekly");
let monthlyButton = document.getElementById("monthly");
let yearlyButton = document.getElementById("yearly");

let weeklyGraph = `<div id="graph" class="fade-in">
<div class="money" >
  <div class="quantify">
    <p>4K</p>
    <p>3K</p>
    <p>2K</p>
    <p>1K</p>
    <p>0</p>
  </div>
  <div class="ruler">
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
  </div>
</div>
<div id="graph-bars" class="fade-in">
  <div class="graph-set">
    <div class="bar-1" style="height: 22rem"></div>
    <div class="bar-2" style="height: 10rem"></div>
  </div>
  <div class="graph-set">
    <div class="bar-1" style="height: 14rem"></div>
    <div class="bar-2" style="height: 5rem"></div>
  </div>
  <div class="graph-set">
    <div class="bar-1" style="height: 9rem"></div>
    <div class="bar-2" style="height: 3rem"></div>
  </div>
  <div class="graph-set">
    <div class="bar-1" style="height: 20rem"></div>
    <div class="bar-2" style="height: 10rem"></div>
  </div>
  <div class="graph-set">
    <div class="bar-1" style="height: 13rem"></div>
    <div class="bar-2" style="height: 8rem"></div>
  </div>
  <div class="graph-set">
    <div class="bar-1" style="height: 9rem"></div>
    <div class="bar-2" style="height: 5rem"></div>
  </div>
  <div class="graph-set">
    <div class="bar-1" style="height: 4rem"></div>
    <div class="bar-2" style="height: 3rem"></div>
  </div>
</div>
</div>`;

let monthlyGraph = `<div class="money" class="fade-in">
<div class="quantify">
  <p>25K</p>
  <p>20K</p>
  <p>15K</p>
  <p>10K</p>
  <p>0</p>
</div>
<div class="ruler">
  <hr />
  <hr />
  <hr />
  <hr />
  <hr />
</div>
</div>
<div id="graph-bars" class="fade-in">
<div class="graph-set">
  <div class="bar-1" style="height: 22rem"></div>
  <div class="bar-2" style="height: 10rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 14rem"></div>
  <div class="bar-2" style="height: 5rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 9rem"></div>
  <div class="bar-2" style="height: 3rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 20rem"></div>
  <div class="bar-2" style="height: 10rem"></div>
</div>
</div>
`;

let yearlyGraph = `<div class="money" class="fade-in">
<div class="quantify">
  <p>98K</p>
  <p>95K</p>
  <p>85K</p>
  <p>75K</p>
  <p>0</p>
</div>
<div class="ruler">
  <hr />
  <hr />
  <hr />
  <hr />
  <hr />
</div>
</div>
<div id="graph-bars" class="fade-in">
<div class="graph-set">
  <div class="bar-1" style="height: 22rem"></div>
  <div class="bar-2" style="height: 10rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 14rem"></div>
  <div class="bar-2" style="height: 5rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 9rem"></div>
  <div class="bar-2" style="height: 3rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 20rem"></div>
  <div class="bar-2" style="height: 10rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 22rem"></div>
  <div class="bar-2" style="height: 10rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 14rem"></div>
  <div class="bar-2" style="height: 5rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 9rem"></div>
  <div class="bar-2" style="height: 3rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 20rem"></div>
  <div class="bar-2" style="height: 10rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 22rem"></div>
  <div class="bar-2" style="height: 10rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 14rem"></div>
  <div class="bar-2" style="height: 5rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 9rem"></div>
  <div class="bar-2" style="height: 3rem"></div>
</div>
<div class="graph-set">
  <div class="bar-1" style="height: 20rem"></div>
  <div class="bar-2" style="height: 10rem"></div>
</div>
</div>
`;

weeklyButton.onclick = function () {
  graph.innerHTML = weeklyGraph;

  weekDays.innerHTML =
    "<p>Mon</p><p>Tue</p><p>Wed</p><p>Thu</p><p>Fri</p><p>Sat</p><p>Sun</p>";
  weeklyButton.classList.add("selected");
  monthlyButton.classList.remove("selected");
  yearlyButton.classList.remove("selected");
};

monthlyButton.onclick = function () {
  graph.innerHTML = monthlyGraph;

  weekDays.innerHTML =
    "<p>First Week</p><p>Second Week</p><p>Third Week</p><p>Forth Week</p>";
  weeklyButton.classList.remove("selected");
  monthlyButton.classList.add("selected");
  yearlyButton.classList.remove("selected");
};

yearlyButton.onclick = function () {
  graph.innerHTML = yearlyGraph;

  weekDays.innerHTML =
    "<p>Jan</p><p>Feb</p><p>Mar</p><p>Apr</p><p>May</p><p>Jun</p><p>Jul</p><p>Aug</p><p>Sep</p><p>Oct</p><p>Nov</p><p>Dec</p>";
  weeklyButton.classList.remove("selected");
  monthlyButton.classList.remove("selected");
  yearlyButton.classList.add("selected");
};
