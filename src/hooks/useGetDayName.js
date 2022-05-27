const useGetDayName = (dt, timezone) => {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const date = new Date(dt * 1000 + timezone * 1000).getDay()
  return weekDays[date]
}

export default useGetDayName
