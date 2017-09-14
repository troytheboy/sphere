const clockArray = ["12am", "1230am", "1am", "130am", "2am", "230am", "3am",
    "330am", "4am", "430am", "5am", "530am", "6am", "630am", "7am", "730am",
    "8am", "830am", "9am", "930am", "10am", "1030am", "11am", "1130am",
    "12pm", "1230pm", "1pm", "130pm", "2pm", "230pm", "3pm", "330pm", "4pm",
    "430pm", "5pm", "530pm", "6pm", "630pm", "7pm", "730pm", "8pm", "830pm",
    "9pm", "930pm", "10pm", "1030pm", "11pm", "1130pm", "12am"];
  let day;

// when a checkbox is clicked
$('.checkbox').click(function(){
    // Only mobile devices
    if ($(window).width() < 769 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Store input's id as a variable
      let startDateTime = this.childNodes[1].id;
      // and show the time select menu
      displayMenu(startDateTime);
    }
});


// time select menu
function displayMenu(startDateTime) {
  // normalize time
  var length = startDateTime.length;
  day = capitalize(startDateTime.slice(0,3));
  length = startDateTime.length;
  var startTime = startDateTime.slice(3, length - 2);
  length = startDateTime.length;
  var division = startDateTime.slice(length - 2).toUpperCase();
  var index = clockArray.indexOf(startTime + division.toLowerCase());
  var endTimes = clockArray.slice(index + 1);
  var elementList = buildElementList(clockArray);
  $("#selectStartTime").find('option').remove().end(); // clear
  $("#selectStartTime").append(elementList);
  $('#selectStartTime option:eq(' + index +')').prop('selected', true);
  $("#selectEndTime").find('option').remove().end();
  $("#selectEndTime").append(elementList);
  $('#selectEndTime option:eq(' + (index + 1) +')').prop('selected', true);
  $('#timeSelect').show();
}

function capitalize(string) {
  string = string.charAt(0).toUpperCase() + string.substr(1);
  return string;
}

function buildElementList(clockArray) {
  var elementList;
  clockArray.forEach(function(value) {
    elementList += "<option value='"+ value +"''>" + value + "</option>";
  })
  return elementList;
}

// When create button is clicked
$('#createEvent').click(function(){
  let startTime = $('#selectStartTime').find(":selected").text();
  let endTime = $('#selectEndTime').find(":selected").text();
  let selectedTimes = clockArray.slice(clockArray.indexOf(startTime), clockArray.indexOf(endTime) - 1);
  selectedTimes.forEach(function(time) {
    let id = '#' + day.toLowerCase() + time;
    $(id)[0].checked = true;
  })
  $('#timeSelect').hide();
});
