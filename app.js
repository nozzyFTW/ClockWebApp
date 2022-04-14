/////////////
//  CLOCK  //
/////////////
var noon = 12;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
      minutes = "0" + minutes;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes;
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  showCurrentTime();
};
setInterval(() => {updateClock()}, 1000);

////////////
//  DATE  //
////////////
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var showCurrentDate = function()
{
  var date = document.getElementById('date');

  var currentDate = new Date();

  var dayWeek = currentDate.getDay();
  var dayMonth = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();

  // Getting name of Day
  var dayName = days[dayWeek];

  // Getting name of month
  var monthName = months[month];

  var dateData = dayName + ", " + dayMonth + " " + monthName + " " + year;

  date.innerText = dateData;
};

var updateDate = function() 
{
  showCurrentDate();
};
setInterval(() => {updateDate()}, 1000);

////////////////////////
//  READ MORE BUTTON  //
////////////////////////
var showMoreBtn = document.querySelector(".showMore");
var gamesList = document.querySelector(".gamesList");
var moreGamesList = document.querySelector(".moreGames");

showMoreBtn.addEventListener("click", (e) => {
  gamesList.classList.toggle("show-more");
  if (showMoreBtn.innerHTML === 'Show More <i class="fa fa-chevron-down"></i>')
  {
    showMoreBtn.innerHTML = 'Show Less <i class="fa fa-chevron-up"></i>';
    moreGamesList.setAttribute('style', 'display: revert;');
  }
  else
  {
    showMoreBtn.innerHTML = 'Show More <i class="fa fa-chevron-down"></i>';
    moreGamesList.setAttribute('style', 'display: none;')
  }
});