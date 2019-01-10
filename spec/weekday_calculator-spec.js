import { WeekCalc } from './../src/weekday_calculator.js';

describe('date object', function() {
  let weekCalc;
  beforeEach(function(){
    weekCalc = new WeekCalc(1978, 11, 11);
  });

  it('should capture a date based off of a yyyy-dd-mm format', function(){
    expect(weekCalc.year).toEqual(1978);
    expect(weekCalc.day).toEqual(11);
    expect(weekCalc.month).toEqual(11);
  });

  it('should gather the year and calculate if it is a leap year or not', function() {
    expect(weekCalc.leapYear()).toEqual(false);
  });

  it('should return the remainder of 12 and the decade and year value of a given date', function() {
    expect(weekCalc.yearFit()).toEqual(6);
  });

  it('should find the difference between the last two digits of the year number and the returned product of the multiples of 12 from the remainder of 12 and the decade and year value of a given date', function() {
    expect(weekCalc.yearDifference()).toEqual(6);
  });


  it('should find the number of times that number 4 is divisible by the difference between the last two digits of the year and the returned products of the multiples of 12 from the remainder of 12 and the decade and year value of a given date', function() {
    expect(weekCalc.yearComparison()).toEqual(1);
  });

  it('should return the numeric value of a date where 0 = sunday and 6 = saturday', function(){
    expect(weekCalc.anchorDayFinder(1978)).toEqual(3);
  });

  it('should return a value in relation to the day of the week', function(){
    expect(weekCalc.doomsdayFinder(1978, 11, 11)).toEqual(2);
  });

  it('should return the doomsday date based off of a given month', function (){
    expect(weekCalc.doomMonths()).toEqual(7);
  })

});
