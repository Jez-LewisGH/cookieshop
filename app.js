// DOM Nodes
const cookieImage = document.getElementById("cookieImage");
const cookiesCounter = document.getElementById("cookiesCounter");
const cookiesPerSecond = document.getElementById("cps");

// TODO get the upgrade button DOM node
const autoClick = document.getElementById("autoClick");
const enhancedOven = document.getElementById("enhancedOven");
const cookieFarm = document.getElementById("cookieFarm");
const robotBaker = document.getElementById("robotBaker");
const cookieFactory = document.getElementById("cookieFactory");
const magicFlour = document.getElementById("magicFlour");
const timeMachine = document.getElementById("timeMachine");
const quantumOven = document.getElementById("quantumOven");
const alienTechnology = document.getElementById("alienTechnology");
const interdimentionalBaker = document.getElementById("interdimentionalBaker");

// Gloabl Variables (state)
let currentCookies = 0;
let cps = 1;

// Timers
let addCookieInterval = setInterval(() => {
  console.log("Repeat every second.");
  currentCookies += cps;
  cookiesCounter.textContent = currentCookies;
}, 1000);

// Functions
function incrementCookies() {
  //Increase currentCookies
  currentCookies += cps;
  //Update counter on DOM
  cookiesCounter.textContent = currentCookies;
  console.log("countingUp");
}

function buyUpgradeClick(cost, increase) {
  if (currentCookies >= cost) {
    currentCookies -= cost;
    cps += increase;

    cookiesPerSecond.textContent = cps;
    cookiesCounter.textContent = currentCookies;
    console.log("Cost of Auto click upgrade @100 cookies subtracted from cps.");
  } else {
    alert(
      "Sorry, you do'nt have enough cookies for that just yet. Maybe try a smaller upgrade?"
    );
  }
}

// TODO write the function that is the upgrade being bought
// function affordability() {}

// Event Listeners
cookieImage.addEventListener("click", function () {
  incrementCookies();
});

autoClick.addEventListener("click", function () {
  buyUpgradeClick(100, 1);
});

enhancedOven.addEventListener("click", function () {
  buyUpgradeClick(500, 5);
});
cookieFarm.addEventListener("click", function () {
  buyUpgradeClick(1000, 10);
});
robotBaker.addEventListener("click", function () {
  buyUpgradeClick(2000, 20);
});
cookieFactory.addEventListener("click", function () {
  buyUpgradeClick(5000, 50);
});
magicFlour.addEventListener("click", function () {
  buyUpgradeClick(10000, 100);
});
timeMachine.addEventListener("click", function () {
  buyUpgradeClick(20000, 200);
});
quantumOven.addEventListener("click", function () {
  buyUpgradeClick(50000, 500);
});
alienTechnology.addEventListener("click", function () {
  buyUpgradeClick(100000, 1000);
});
interdimentionalBaker.addEventListener("click", function () {
  buyUpgradeClick(200000, 2000);
});

// TODO add an event listner to the upgrade button
