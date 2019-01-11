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
    if (1800 > this.year || this.year > 2199) {
      return "Outside of acceptable date range";
    } else {
      let yearSurgery = this.year.toString().split("").splice(2,2);
      let decadeCapture = yearSurgery.join("");
      let result = decadeCapture % 12;
      // console.log(result);
      let answer = Math.abs(decadeCapture - (result * 12));
      // console.log(answer);
      let comparison = Math.floor(answer / 4);
      // console.log(comparison);
      let value = this.anchorDayFinder();
      // console.log(value);
      let doomsDay = (result + answer + comparison + value) % 7;
      // console.log(doomsDay);
      return doomsDay;
    }
  }

  doomDay() {
    let monthDay;
    if (this.month == 1 && this.leapYear() == true) {
      monthDay = 4;
    } else if (this.month == 1 && this.leapYear() == false) {
      monthDay = 3;
    } else if (this.month == 2 && this.leapYear() == true) {
      monthDay = 29;
    } else if (this.month == 2 && this.leapYear() == false) {
      monthDay = 28;
    } else if (this.month == 3 && this.leapYear() == true) {
      monthDay = 29;
    } else if (this.month == 3 && this.leapYear() == false) {
      monthDay = 28;
    } else if (this.month == 4) {
      monthDay = 4;
    } else if (this.month == 5) {
      monthDay = 9;
    } else if (this.month == 6) {
      monthDay = 6;
    } else if (this.month == 7) {
      monthDay = 11;
    } else if (this.month == 8) {
      monthDay = 8;
    } else if (this.month == 9) {
      monthDay = 5;
    } else if (this.month == 10) {
      monthDay = 10;
    } else if (this.month == 11) {
      monthDay = 7;
      // test here
    } else if (this.month == 12) {
      monthDay = 12;
    }
    return monthDay;
  }

  doomCalculate() {
    let numberDay;
    let numberDay1;
    let numberDay2;
    if (this.day > this.doomDay()) {
      numberDay = ((this.day - this.doomDay()) + this.anchorDayFinder() - 1) % 7;
    }
    else if (this.day < this.doomDay()) {
      console.log("doomday: " + this.doomDay());
      console.log("day: " + this.day);
      numberDay = ((this.doomDay() - this.day) + this.anchorDayFinder()) % 7;
      numberDay1 = (this.day + 7) % 7;
      numberDay2 =((this.day % this.doomDay())) + this.doomDay() % 7 ;
    }
    console.log(this.day - this.doomDay());
    console.log("nd: " + numberDay);
    console.log("nd1: " + numberDay1);
    console.log("nd2: " + numberDay2);
    return numberDay;
  }

  translate() {
    if(this.doomCalculate() == 0) {
      return "Sunday";
    }
    else if(this.doomCalculate() == 1) {
      return "Monday";
    }
    else if(this.doomCalculate() == 2) {
      return "Tuesday";
    }
    else if(this.doomCalculate() == 3) {
      return "Wednesday";
    }
    else if(this.doomCalculate() == 4) {
      return "Thursday";
    }
    else if(this.doomCalculate() == 5) {
      return "Friday";
    }
    else if(this.doomCalculate() == 6) {
      return "Saturday";
    }
    }
  }
export { WeekCalc };
