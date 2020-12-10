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
        hour: "09",
        meridiem: "am",
        note: ""
    },
    {
        id: "10",
        hour: "10",
        meridiem: "am",
        note: ""
    },
    {
        id: "11",
        hour: "11",
        meridiem: "am",
        note: ""
    },
    {
        id: "12",
        hour: "12",
        meridiem: "pm",
        note: ""
    },
    {
        id: "13",
        hour: "01",
        meridiem: "pm",
        note: ""
    },
    {
        id: "14",
        hour: "02",
        meridiem: "pm",
        note: ""
    },
    {
        id: "15",
        hour: "03",
        meridiem: "pm",
        note: ""
    },
    {
        id: "16",
        hour: "04",
        meridiem: "pm",
        note: ""
    },
    {
        id: "17",
        hour: "05",
        meridiem: "pm",
        note: ""
    },
];