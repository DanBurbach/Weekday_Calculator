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

  anchorDayFinder() {

    if (1800 <= this.year && this.year <= 1899) {
      return 5;
    } else if (1900 <= this.year && this.year <= 1999) {
      return 3;
    } else if (2000 <= this.year && this.year <= 2099) {
      return  2;
    } else if (2100 <= this.year && this.year <= 2199) {
      return  0;
    }
  }

  doomsdayFinder() {
    if(1800 > this.year && this.year > 2199) {
      return "Outside of acceptable date range";
    } else {
      let yearSurgery = this.year.toString().split("").splice(2,2);
      let decadeCapture = yearSurgery.join("");
      let result = decadeCapture % 12;
      let answer = parseInt(decadeCapture - (result * 12));
      let comparison = Math.floor(answer / 4);
      // let anchorDay = new WeekCalc();
      let value = this.anchorDayFinder();
      let doomsDay = result + answer + comparison + value;
      console.log("hello");
      return doomsDay % 7;
    }
  }
}
export { WeekCalc };
