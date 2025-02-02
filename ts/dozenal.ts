// Global DOM variables
const dozenalTimeSpan = document.getElementById(
  "dozenalTime",
) as HTMLSpanElement;
const dayBarDiv = document.getElementById("dayBar") as HTMLDivElement;
const twoHourBarDiv = document.getElementById("twoHourBar") as HTMLDivElement;
const tenMinuteBarDiv = document.getElementById(
  "tenMinuteBar",
) as HTMLDivElement;
const fiftySecondBarDiv = document.getElementById(
  "fiftySecondBar",
) as HTMLDivElement;
const phaseStartSpan = document.getElementById("phaseStart") as HTMLSpanElement;
const phaseEndSpan = document.getElementById("phaseEnd") as HTMLSpanElement;

// Main function
function dozenal(): void {
  // Get current date and time
  const currentDate = new Date();

  // Express time as number of seconds elapsed so far today
  const timeInSeconds =
    currentDate.getHours() * 3600 +
    currentDate.getMinutes() * 60 +
    currentDate.getSeconds() +
    currentDate.getMilliseconds() / 1000;

  // Calculate dozenal time values
  const twoHourCounter = Math.floor(timeInSeconds / 7200);
  const tenMinuteCounter = Math.floor((timeInSeconds % 7200) / 600);
  const fiftySecondCounter = Math.floor((timeInSeconds % 600) / 50);
  const secondsCounter = Math.floor((timeInSeconds % 50) / (50 / 12));
  const tinyCounter = Math.floor((timeInSeconds % (50 / 12)) / (50 / 12 / 12));

  // Declare variables for base-12 values
  let twoHourCounterNormalized;
  let tenMinuteCounterNormalized;
  let fiftySecondCounterNormalized;
  let secondsCounterNormalized;
  let tinyCounterNormalized;

  // Set base-12 values
  if (twoHourCounter === 11) {
    twoHourCounterNormalized = "Ɛ";
  } else if (twoHourCounter === 10) {
    twoHourCounterNormalized = "Χ";
  } else {
    twoHourCounterNormalized = String(twoHourCounter);
  }

  if (tenMinuteCounter === 11) {
    tenMinuteCounterNormalized = "Ɛ";
  } else if (tenMinuteCounter === 10) {
    tenMinuteCounterNormalized = "Χ";
  } else {
    tenMinuteCounterNormalized = String(tenMinuteCounter);
  }

  if (fiftySecondCounter === 11) {
    fiftySecondCounterNormalized = "Ɛ";
  } else if (fiftySecondCounter === 10) {
    fiftySecondCounterNormalized = "Χ";
  } else {
    fiftySecondCounterNormalized = String(fiftySecondCounter);
  }

  if (secondsCounter === 11) {
    secondsCounterNormalized = "Ɛ";
  } else if (secondsCounter === 10) {
    secondsCounterNormalized = "Χ";
  } else {
    secondsCounterNormalized = String(secondsCounter);
  }

  if (tinyCounter === 11) {
    tinyCounterNormalized = "Ɛ";
  } else if (tinyCounter === 10) {
    tinyCounterNormalized = "Χ";
  } else {
    tinyCounterNormalized = String(tinyCounter);
  }

  // Define variable for final dozenal time
  const dozenalTime =
    twoHourCounterNormalized +
    tenMinuteCounterNormalized +
    fiftySecondCounterNormalized +
    "." +
    secondsCounterNormalized +
    tinyCounterNormalized;

  // Set dozenal time label
  dozenalTimeSpan.innerText = dozenalTime;

  // Calculate percentages for progress bars
  const percentOfDay = (timeInSeconds / 86400) * 100;
  const percentOfTwoHours = ((timeInSeconds % 7200) / 7200) * 100;
  const percentOfTenMinutes = ((timeInSeconds % 600) / 600) * 100;
  const percentOfFiftySeconds = ((timeInSeconds % 50) / 50) * 100;

  // Set CSS variables with calculated percentages
  document.documentElement.style.setProperty(
    "--day-bar-fill",
    `${percentOfDay}%`,
  );
  document.documentElement.style.setProperty(
    "--two-hour-bar-fill",
    `${percentOfTwoHours}%`,
  );
  document.documentElement.style.setProperty(
    "--ten-minute-bar-fill",
    `${percentOfTenMinutes}%`,
  );
  document.documentElement.style.setProperty(
    "--fifty-second-bar-fill",
    `${percentOfFiftySeconds}%`,
  );

  // Add labels to progress bars
  dayBarDiv.innerText = twoHourCounterNormalized;
  twoHourBarDiv.innerText = tenMinuteCounterNormalized;
  tenMinuteBarDiv.innerText = fiftySecondCounterNormalized;
  fiftySecondBarDiv.innerText = `.${secondsCounterNormalized}`;

  // Set aria-valuenow attributes
  dayBarDiv.setAttribute("aria-valuenow", String(percentOfDay));
  twoHourBarDiv.setAttribute("aria-valuenow", String(percentOfTwoHours));
  tenMinuteBarDiv.setAttribute("aria-valuenow", String(percentOfTenMinutes));
  fiftySecondBarDiv.setAttribute(
    "aria-valuenow",
    String(percentOfFiftySeconds),
  );

  // Declare variables for phase start and end values
  let phaseStart;
  let phaseEnd;

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
  phaseStartSpan.innerText = phaseStart;
  phaseEndSpan.innerText = phaseEnd;
}

// Run function on page load
dozenal();

// Rerun function at intervals
setInterval(dozenal, 347);
