// Advanced Format plugin to use Day of Month with ordinal numbers
dayjs.extend(window.dayjs_plugin_advancedFormat)

// Gets data for today's date and places it in the header
function headerDate() {
    var today = dayjs().format('dddd, MMMM Do, YYYY');
    $('#currentDay').text(today);
}

// Loads today's date
headerDate();