class WeekCalc {
  constructor(year, day, month) {
    this.year = year;
    this.day = day;
    this.month = month;
  }

  leapYear() {
    let y = this.year;
    if(((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {
      return true;
    }
    else {
      return false;
  }
}

yearFit() {
  let yearSurgery = this.year.toString().split("").splice(2,2);
  let decadeCapture = yearSurgery.join("");
  let result = decadeCapture % 12;
  return result;
}

yearDifference() {
  let yearSurgery = this.year.toString().split("").splice(2,2);
  let decadeCapture = yearSurgery.join("");
  let result = decadeCapture % 12;
  let answer = decadeCapture - (result * 12);
  return answer;
}

}
export { WeekCalc };
