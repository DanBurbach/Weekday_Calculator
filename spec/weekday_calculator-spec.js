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


})
