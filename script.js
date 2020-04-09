let workDay = localStorage.getItem('workDay') ? JSON.parse(localStorage.getItem('workDay')) : {}
localStorage.setItem('test', JSON.stringify({name:'nicole'}))
$(document).ready(function(){
    // if(!localStorage.getItem("workDay")){
    //     updateCalendarTasks(workDay);
    // } else{
    //     updateCalendarTasks(JSON.parse(localStorage.getItem("workDay")));
    // }

    makeRows()
    function makeRows(){
        let hour = moment().hour();
        for(let i = 8; i< 18 ; i++){
            $('.container').append(`<div class="row justify-content-md-center border-top border-bottom calendar-row" id="calendar-row1">
        <div class="col-md-1" id="hour${i}">${i<12? `${i}AM`: i === 12 ? `12PM`: `${i-12}PM`}</div>
        <textarea class="col-md-10 description ${i<hour? 'past' : i>hour? 'future': 'present'}">${workDay[`hour${i}`] || ''}</textarea>
        <button class="col-md-1 saveBtn btn btn-primary"><i class="far fa-save"></i></button>
      </div>`)
        }
    }

$("#currentDay h5").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

//click event listener to set property of workDay obj and save to local storage
$(document).on('click', 'button',function(){
    console.log('you clicked a button!')
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings(".col-md-1").attr('id');
    workDay[hourString] = value;
    localStorage.setItem('workDay', JSON.stringify(workDay))
}); 

// for (const property in workDay) {
//     let desEntry = "#description" + counter;
//     $(desEntry).text(workDay[property]);
//     let hourId = "#hour" + counter;
//     let presentHour = moment().hour();
//     let timeString = $(hourId).text();
//     let timeNumber = hourNumberFromHourString(timeString);
//     if (timeNumber < presentHour) {
//         $(desEntry).addClass("past");
//     } else if (timeNumber > presentHour) {
//         $(desEntry).addClass("future");
//     } else {
//         $(desEntry).addClass("present");
//     }
//     counter ++;
// };
// $('#example').on('click', function(){
//     $('#btndiv').append('<button>IM NEW</button>')
// })



// function hourNumberFromHourString(hourString) {
//     switch(hourString) {
//       case "8 AM": return 8;
//       case "9 AM": return 9;
//       case "10 AM": return 10;
//       case "11 AM": return 11;
//       case "12 PM": return 12;
//       case "1 PM": return 13;
//       case "2 PM": return 14;
//       case "3 PM": return 15;
//       case "4 PM": return 16;
//       case "5 PM": return 17;
//     }
//   }

//   function loadCorrectDataset() {
//       result = localStorage.getItem("workDay")
//       return (result ? result : workDay);
//   }

//   function initializeLocalStorage() {
//       localStorage.setItem("workDay", JSON.stringify(workDay));
//   }

//   function saveToLocalStorage(dayObj) {
//     localStorage.setItem("workDay", JSON.stringify(dayObj));
//   }
  
  
//   function updateCalendarTasks(dayObject) {
//       console.log(dayObject)
//     $("#calendar-row").each(function(index) {
//       let res = $(this).children("div");
//       $(this).children("textarea").text(dayObject[res.text()]);
//     })
//   }
});