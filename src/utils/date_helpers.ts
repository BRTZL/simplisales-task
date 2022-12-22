import moment from 'moment'

export function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return new Date(dateString).toLocaleDateString('en-US', options)
}

export function getTimeStops(
  start?: string,
  end?: string,
  interval: number = 30,
) {
  if (!start || !end) {
    return []
  }
  var startTime = moment(start, 'HH:mm')
  var endTime = moment(end, 'HH:mm')

  if (endTime.isBefore(startTime)) {
    endTime.add(1, 'day')
  }

  var timeStops = []

  while (startTime <= endTime) {
    timeStops.push(startTime.format('HH:mm'))
    startTime.add(interval, 'minutes')
  }
  return timeStops
}
