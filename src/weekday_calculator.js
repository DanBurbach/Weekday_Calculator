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

    yearComparison() {
      let yearSurgery = this.year.toString().split("").splice(2,2);
      let decadeCapture = yearSurgery.join("");
      let result = decadeCapture % 12;
      let answer = parseInt(decadeCapture - (result * 12));
      let comparison = Math.floor(answer / 4);
      return comparison;
    }

    anchorDayFinder(yyyy) {
      let returnInt;
      if (1800 <= yyyy && yyyy <= 1899) {
        returnInt = 5;
        return returnInt;
      } else if (1900 <= yyyy && yyyy <= 1999) {
        returnInt = 3;
        return returnInt;
      } else if (2000 <= yyyy && yyyy <= 2099) {
        returnInt =  2;
        return returnInt;
      } else if (2100 <= yyyy && yyyy <= 2199) {
        returnInt =  0;
        return returnInt;
      }
    }

    doomsdayFinder() {
      if(1800 > this.year && this.year > 2199) {
        let error ="Outside of acceptable date range";
        return error;
      } else {
        let yearSurgery = this.year.toString().split("").splice(2,2);
        let decadeCapture = yearSurgery.join("");
        let result = decadeCapture % 12;
        let answer = parseInt(decadeCapture - (result * 12));
        let comparison = Math.floor(answer / 4);
        // let anchorDay = new WeekCalc();
        let value = this.anchorDayFinder(this.year);
        let doomsDay = result + answer + comparison + value;
        return doomsDay % 7;
    }
  }
}
export { WeekCalc };
