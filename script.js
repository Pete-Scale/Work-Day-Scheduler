// Advanced Format plugin to use Day of Month with ordinal numbers
dayjs.extend(window.dayjs_plugin_advancedFormat)

// Array of time-block objects
var schedule = [
    {
        id: '09',
        hour: '9',
        meridiem: 'AM',
    },
    {
        id: '10',
        hour: '10',
        meridiem: 'AM',
    },
    {
        id: '11',
        hour: '11',
        meridiem: 'AM',
    },
    {
        id: '12',
        hour: '12',
        meridiem: 'PM',
    },
    {
        id: '13',
        hour: '1',
        meridiem: 'PM',
    },
    {
        id: '14',
        hour: '2',
        meridiem: 'PM',
    },
    {
        id: '15',
        hour: '3',
        meridiem: 'PM',
    },
    {
        id: '16',
        hour: '4',
        meridiem: 'PM',
    },
    {
        id: '17',
        hour: '5',
        meridiem: 'PM',
    },
];

// Gets data for today's date and places it in the header
function todaysDate() {
    var today = dayjs().format('dddd, MMMM Do, YYYY');
    $('#currentDay').text(today);
}

// Creates the Day Planner schedule
for (var i = 0; i < schedule.length; i++) {
    var container = $('.container');
    // Creates time-block row div
    var timeBlockRowDiv = $('<div>').attr('class', 'time-block row');
    container.append(timeBlockRowDiv)[i];
    // Creates hour div 
    var hourDiv = $('<div>').text(schedule[i].hour + ' ' + schedule[i].meridiem).attr('class', 'col-lg-1 col-md-2 col-2 hour'); 
    timeBlockRowDiv.append(hourDiv)[i];
    // Creates textarea div
    var textAreaDiv = $('<textarea>').attr({'id': schedule[i].id, 'class': 'col-lg-10 col-md-8 col-8 description'});
    timeBlockRowDiv.append(textAreaDiv)[i];
    // Styles textarea div according to past, present, and future
    if (schedule[i].id < dayjs().format('HH')) {
        var past = textAreaDiv.addClass('past');
        textAreaDiv.append(past);
    } else if (schedule[i].id == dayjs().format('HH')) {
        var present = textAreaDiv.addClass('present');
        textAreaDiv.append(present);
    } else if (schedule[i].id> dayjs().format('HH')) {
        var future = textAreaDiv.addClass('future');
        textAreaDiv.append(future);
    };
    // Creates save button
    var saveBtn = $('<button>').attr('class', 'col-lg-1 col-md-2 col-2  saveBtn');
    timeBlockRowDiv.append(saveBtn)[i];
    var saveBtnIcon = $('<i>').attr('class', 'fas fa-lock');
    saveBtn.append(saveBtnIcon);
}

// Click saveBtn to save to local storage
$('.saveBtn').on('click', function(){
    var hour = $(this).siblings('textarea').attr('id');
    console.log(hour);
    var note = $(this).siblings('textarea').val();
    console.log(note);
    localStorage.setItem(hour, note);
}); 

// Load local storage by key and put the value in the textareas by id
function setSchedule () {
    for (var i = 0; i < schedule.length; i++){
        console.log(schedule[i].id);
        var saveKey = localStorage.getItem(schedule[i].id);
        console.log(saveKey);
        if (saveKey !== null) {
            $('#' + schedule[i].id).val(saveKey);
        }
    }
}

// Loads today's date and sets the saved schedule
todaysDate();
setSchedule();