// Advanced Format plugin to use Day of Month with ordinal numbers
dayjs.extend(window.dayjs_plugin_advancedFormat)

// Gets data for today's date and places it in the header
function headerDate() {
    var today = dayjs().format('dddd, MMMM Do, YYYY');
    $('#currentDay').text(today);
}

// Loads today's date
headerDate();

// Array of time-block objects
var schedule = [
    {
        id: "9",
        hour: "9",
        meridiem: "AM",
        note: ""
    },
    {
        id: "10",
        hour: "10",
        meridiem: "AM",
        note: ""
    },
    {
        id: "11",
        hour: "11",
        meridiem: "AM",
        note: ""
    },
    {
        id: "12",
        hour: "12",
        meridiem: "PM",
        note: ""
    },
    {
        id: "13",
        hour: "1",
        meridiem: "PM",
        note: ""
    },
    {
        id: "14",
        hour: "2",
        meridiem: "PM",
        note: ""
    },
    {
        id: "15",
        hour: "3",
        meridiem: "PM",
        note: ""
    },
    {
        id: "16",
        hour: "4",
        meridiem: "PM",
        note: ""
    },
    {
        id: "17",
        hour: "5",
        meridiem: "PM",
        note: ""
    },
];
// var saveBtn = $('.saveBtn');

// saveBtn.on('click', function() {
    
// })

// function saveNotes() {
//     localStorage.setItem("schedule", JSON.stringify(schedule));
// }

for (var i = 0; i < schedule.length; i++) {
    var container = $('.container');
    // Creates time-block row div
    var timeBlockRowDiv = $('<div>').attr({'class': 'time-block row'})
    container.append(timeBlockRow)[i]
    // Creates hour div 
    var hourDiv = $('<div>').text(schedule[i].hour + ' ' + schedule[i].meridiem).attr({'class': 'col-lg-1 col-md-1 col-2 hour'}) 
    timeBlockRow.append(hourDiv)[i]
    
}
