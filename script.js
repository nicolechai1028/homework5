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
    if(!localStorage.getItem('workDay')){
        updateCalendarTasks(workDay);
    } else{
        updateCalendarTasks(JSON.parse(localStorage.getItem('workDay')));
    }
    
});

$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));


