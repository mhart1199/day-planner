var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(rightNow);
$(document).ready (function() {
    var today = JSON.stringify(rightNow);
    $('#currentDay').text(today);

})