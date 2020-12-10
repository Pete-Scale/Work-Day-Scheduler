dayjs.extend(window.dayjs_plugin_advancedFormat)

function headerDate() {
    console.log(dayjs().format('dddd, MMMM Do, YYYY'));
}
headerDate()