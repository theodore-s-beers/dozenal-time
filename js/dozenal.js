function dozenal() {
  // Get current date and time
  var currentDate = new Date();

  // Express time as number of seconds elapsed so far today
  var timeInSeconds =
    currentDate.getHours() * 3600 +
    currentDate.getMinutes() * 60 +
    currentDate.getSeconds() +
    currentDate.getMilliseconds() / 1000;

  // Calculate percentages for progress bars
  var percentOfDay = (timeInSeconds / 86400) * 100;
  var percentOfTwoHours = ((timeInSeconds % 7200) / 7200) * 100;
  var percentOfTenMinutes = ((timeInSeconds % 600) / 600) * 100;
  var percentOfFiftySeconds = ((timeInSeconds % 50) / 50) * 100;

  // Set CSS variables with calculated percentages
  document.documentElement.style.setProperty(
    "--day-bar-fill",
    percentOfDay + "%"
  );
  document.documentElement.style.setProperty(
    "--two-hour-bar-fill",
    percentOfTwoHours + "%"
  );
  document.documentElement.style.setProperty(
    "--ten-minute-bar-fill",
    percentOfTenMinutes + "%"
  );
  document.documentElement.style.setProperty(
    "--fifty-second-bar-fill",
    percentOfFiftySeconds + "%"
  );

  // Calculate dozenal time values
  var twoHourCounter = Math.floor(timeInSeconds / 7200);
  var tenMinuteCounter = Math.floor((timeInSeconds % 7200) / 600);
  var fiftySecondCounter = Math.floor((timeInSeconds % 600) / 50);
  var secondsCounter = Math.floor((timeInSeconds % 50) / (50 / 12));
  var tinyCounter = Math.floor((timeInSeconds % (50 / 12)) / (50 / 12 / 12));

  // Initialize variables for base-12 values
  var twoHourCounterNormalized = "";
  var tenMinuteCounterNormalized = "";
  var fiftySecondCounterNormalized = "";
  var secondsCounterNormalized = "";
  var tinyCounterNormalized = "";

  // Set base-12 values
  if (twoHourCounter === 11) {
    twoHourCounterNormalized = "Ε";
  } else if (twoHourCounter === 10) {
    twoHourCounterNormalized = "Χ";
  } else {
    twoHourCounterNormalized = twoHourCounter.toString();
  }

  if (tenMinuteCounter === 11) {
    tenMinuteCounterNormalized = "Ε";
  } else if (tenMinuteCounter === 10) {
    tenMinuteCounterNormalized = "Χ";
  } else {
    tenMinuteCounterNormalized = tenMinuteCounter.toString();
  }

  if (fiftySecondCounter === 11) {
    fiftySecondCounterNormalized = "Ε";
  } else if (fiftySecondCounter === 10) {
    fiftySecondCounterNormalized = "Χ";
  } else {
    fiftySecondCounterNormalized = fiftySecondCounter.toString();
  }

  if (secondsCounter === 11) {
    secondsCounterNormalized = "Ε";
  } else if (secondsCounter === 10) {
    secondsCounterNormalized = "Χ";
  } else {
    secondsCounterNormalized = secondsCounter.toString();
  }

  if (tinyCounter === 11) {
    tinyCounterNormalized = "Ε";
  } else if (tinyCounter === 10) {
    tinyCounterNormalized = "Χ";
  } else {
    tinyCounterNormalized = tinyCounter;
  }

  // Define variable for final dozenal time
  var dozenalTime =
    twoHourCounterNormalized +
    tenMinuteCounterNormalized +
    fiftySecondCounterNormalized +
    "." +
    secondsCounterNormalized +
    tinyCounterNormalized;

  // Set dozenal time label
  document.getElementById("dozenalTime").innerHTML = dozenalTime;

  // Initialize variables for phase start and end values
  var phaseStart = "";
  var phaseEnd = "";

  // Determine current phase
  if (twoHourCounter === 11) {
    phaseStart = "Night";
    phaseEnd = "Midnight";
  } else if (twoHourCounter === 10) {
    phaseStart = "Twilight";
    phaseEnd = "Night";
  } else if (twoHourCounter === 9) {
    phaseStart = "Evening";
    phaseEnd = "Twilight";
  } else if (twoHourCounter === 8) {
    phaseStart = "Late afternoon";
    phaseEnd = "Evening";
  } else if (twoHourCounter === 7) {
    phaseStart = "Midafternoon";
    phaseEnd = "Late afternoon";
  } else if (twoHourCounter === 6) {
    phaseStart = "Noon";
    phaseEnd = "Midafternoon";
  } else if (twoHourCounter === 5) {
    phaseStart = "Late morning";
    phaseEnd = "Noon";
  } else if (twoHourCounter === 4) {
    phaseStart = "Midmorning";
    phaseEnd = "Late morning";
  } else if (twoHourCounter === 3) {
    phaseStart = "Early morning";
    phaseEnd = "Midmorning";
  } else if (twoHourCounter === 2) {
    phaseStart = "Predawn";
    phaseEnd = "Early morning";
  } else if (twoHourCounter === 1) {
    phaseStart = "Witching";
    phaseEnd = "Predawn";
  } else {
    phaseStart = "Midnight";
    phaseEnd = "Witching";
  }

  // Set phase start and end labels
  document.getElementById("phaseStart").innerHTML = phaseStart;
  document.getElementById("phaseEnd").innerHTML = phaseEnd;
}
