let workDay = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 AM": "",
    "1 AM": "",
    "2 AM": "",
    "3 AM": "",
    "4 AM": "",
    "5 AM": "",

};

$(document).ready(function(){
    if(!localStorage.getItem("workDay")){
        updateCalendarTasks(workDay);
    } else{
        updateCalendarTasks(JSON.parse(localStorage.getItem("workDay")));
    }
    
});

$("#currentDay h5").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

let counter = 1;
for (const property in workDay) {
    let desEntry = "#description" + counter;
    $(desEntry).text(workDay[property]);
    let hourId = "#hour" + counter;
    let presentHour = moment().hour();
    let timeString = $(hourId).text();
    let timeNumber = hourNumberFromHourString(timeString);
    if (timeNumber < presentHour) {
        $(desEntry).addClass("past");
    } else if (timeNumber > presentHour) {
        $(desEntry).addClass("future");
    } else {
        $(desEntry).addClass("present");
    }
    counter ++;
};

$("button").click(function(){
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();

    saveSchedule(hourString, value);
});

function hourNumberFromHourString(hourString) {
    switch(hourString) {
      case "8 AM": return 8;
      case "9 AM": return 9;
      case "10 AM": return 10;
      case "11 AM": return 11;
      case "12 PM": return 12;
      case "1 PM": return 13;
      case "2 PM": return 14;
      case "3 PM": return 15;
      case "4 PM": return 16;
      case "5 PM": return 17;
    }
  }

  function loadCorrectDataset() {
      result = localStorage.getItem("workDay")
      return (result ? result : workDay);
  }

  function initializeLocalStorage() {
      localStorage.setItem("workDay", JSON.stringify(workDay));
  }

  function saveToLocalStorage(dayObj) {
    localStorage.setItem("workDay", JSON.stringify(dayObj));
  }
  
  function saveSchedule(hourString, val) {
    if(!localStorage.getItem("workDay")) {
      initializeLocalStorage();
    }

    let workHours = JSON.parse(localStorage.getItem("workDay"));
    workHours[hourString] = val
  
    saveToLocalStorage(workHours);
  }
  
  function updateCalendarTasks(dayObject) {
    $("#calendar-row").each(function(index) {
      let res = $(this).children("div");
      $(this).children("textarea").text(dayObject[res.text()]);
    })
  }