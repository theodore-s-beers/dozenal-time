const dozenalTimeSpan = document.getElementById('dozenalTime')
const dayBarDiv = document.getElementById('dayBar')
const twoHourBarDiv = document.getElementById('twoHourBar')
const tenMinuteBarDiv = document.getElementById('tenMinuteBar')
const fiftySecondBarDiv = document.getElementById('fiftySecondBar')
const phaseStartSpan = document.getElementById('phaseStart')
const phaseEndSpan = document.getElementById('phaseEnd')
function dozenal () {
  const currentDate = new Date()
  const timeInSeconds =
    currentDate.getHours() * 3600 +
    currentDate.getMinutes() * 60 +
    currentDate.getSeconds() +
    currentDate.getMilliseconds() / 1e3
  const twoHourCounter = Math.floor(timeInSeconds / 7200)
  const tenMinuteCounter = Math.floor((timeInSeconds % 7200) / 600)
  const fiftySecondCounter = Math.floor((timeInSeconds % 600) / 50)
  const secondsCounter = Math.floor((timeInSeconds % 50) / (50 / 12))
  const tinyCounter = Math.floor((timeInSeconds % (50 / 12)) / (50 / 12 / 12))
  let twoHourCounterNormalized = ''
  let tenMinuteCounterNormalized = ''
  let fiftySecondCounterNormalized = ''
  let secondsCounterNormalized = ''
  let tinyCounterNormalized = ''
  if (twoHourCounter === 11) {
    twoHourCounterNormalized = '\u0190'
  } else if (twoHourCounter === 10) {
    twoHourCounterNormalized = '\u03A7'
  } else {
    twoHourCounterNormalized = String(twoHourCounter)
  }
  if (tenMinuteCounter === 11) {
    tenMinuteCounterNormalized = '\u0190'
  } else if (tenMinuteCounter === 10) {
    tenMinuteCounterNormalized = '\u03A7'
  } else {
    tenMinuteCounterNormalized = String(tenMinuteCounter)
  }
  if (fiftySecondCounter === 11) {
    fiftySecondCounterNormalized = '\u0190'
  } else if (fiftySecondCounter === 10) {
    fiftySecondCounterNormalized = '\u03A7'
  } else {
    fiftySecondCounterNormalized = String(fiftySecondCounter)
  }
  if (secondsCounter === 11) {
    secondsCounterNormalized = '\u0190'
  } else if (secondsCounter === 10) {
    secondsCounterNormalized = '\u03A7'
  } else {
    secondsCounterNormalized = String(secondsCounter)
  }
  if (tinyCounter === 11) {
    tinyCounterNormalized = '\u0190'
  } else if (tinyCounter === 10) {
    tinyCounterNormalized = '\u03A7'
  } else {
    tinyCounterNormalized = String(tinyCounter)
  }
  const dozenalTime =
    twoHourCounterNormalized +
    tenMinuteCounterNormalized +
    fiftySecondCounterNormalized +
    '.' +
    secondsCounterNormalized +
    tinyCounterNormalized
  dozenalTimeSpan.innerText = dozenalTime
  const percentOfDay = (timeInSeconds / 86400) * 100
  const percentOfTwoHours = ((timeInSeconds % 7200) / 7200) * 100
  const percentOfTenMinutes = ((timeInSeconds % 600) / 600) * 100
  const percentOfFiftySeconds = ((timeInSeconds % 50) / 50) * 100
  document.documentElement.style.setProperty(
    '--day-bar-fill',
    `${percentOfDay}%`
  )
  document.documentElement.style.setProperty(
    '--two-hour-bar-fill',
    `${percentOfTwoHours}%`
  )
  document.documentElement.style.setProperty(
    '--ten-minute-bar-fill',
    `${percentOfTenMinutes}%`
  )
  document.documentElement.style.setProperty(
    '--fifty-second-bar-fill',
    `${percentOfFiftySeconds}%`
  )
  dayBarDiv.innerText = twoHourCounterNormalized
  twoHourBarDiv.innerText = tenMinuteCounterNormalized
  tenMinuteBarDiv.innerText = fiftySecondCounterNormalized
  fiftySecondBarDiv.innerText = secondsCounterNormalized
  dayBarDiv.setAttribute('aria-valuenow', String(percentOfDay))
  twoHourBarDiv.setAttribute('aria-valuenow', String(percentOfTwoHours))
  tenMinuteBarDiv.setAttribute('aria-valuenow', String(percentOfTenMinutes))
  fiftySecondBarDiv.setAttribute('aria-valuenow', String(percentOfFiftySeconds))
  let phaseStart = ''
  let phaseEnd = ''
  if (twoHourCounter === 11) {
    phaseStart = 'Night'
    phaseEnd = 'Midnight'
  } else if (twoHourCounter === 10) {
    phaseStart = 'Twilight'
    phaseEnd = 'Night'
  } else if (twoHourCounter === 9) {
    phaseStart = 'Evening'
    phaseEnd = 'Twilight'
  } else if (twoHourCounter === 8) {
    phaseStart = 'Late afternoon'
    phaseEnd = 'Evening'
  } else if (twoHourCounter === 7) {
    phaseStart = 'Midafternoon'
    phaseEnd = 'Late afternoon'
  } else if (twoHourCounter === 6) {
    phaseStart = 'Noon'
    phaseEnd = 'Midafternoon'
  } else if (twoHourCounter === 5) {
    phaseStart = 'Late morning'
    phaseEnd = 'Noon'
  } else if (twoHourCounter === 4) {
    phaseStart = 'Midmorning'
    phaseEnd = 'Late morning'
  } else if (twoHourCounter === 3) {
    phaseStart = 'Early morning'
    phaseEnd = 'Midmorning'
  } else if (twoHourCounter === 2) {
    phaseStart = 'Predawn'
    phaseEnd = 'Early morning'
  } else if (twoHourCounter === 1) {
    phaseStart = 'Witching'
    phaseEnd = 'Predawn'
  } else {
    phaseStart = 'Midnight'
    phaseEnd = 'Witching'
  }
  phaseStartSpan.innerText = phaseStart
  phaseEndSpan.innerText = phaseEnd
}
dozenal()
setInterval(dozenal, 347)
