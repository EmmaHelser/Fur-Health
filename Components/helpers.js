const formatDate = (rawDate) => {
  let dateAndTime = rawDate.split('T');
  let date = dateAndTime[0];
  let yearMonthDay = date.split('-');
  let finalDate = months[yearMonthDay[1]] + ` ${yearMonthDay[2]}` + `, ${yearMonthDay[0]}`;

  return finalDate;
}

const months = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
}

export default formatDate;