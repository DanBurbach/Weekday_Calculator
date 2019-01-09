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

  it('should gather the year and calculate if it is a leap year or not', function(){
    expect(weekCalc.leapYear()).toEqual(false);
  });

  it('should return the remainder of 12 and the decade and year value of a given date', function(){
    expect(weekCalc.yearFit()).toEqual(6);
  });

  it('should find the difference between the last two digits of the year number and the returned product of the multiples of 12 from the remainder of 12 and the decade and year value of a given date', function(){
    expect(weekCalc.yearDifference()).toEqual(6);
  });

});
