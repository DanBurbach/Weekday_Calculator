# Weekday Calculator
<sup>_Designed by:    
Daniel Burbach & Chris Rudnicky_</sup>

---
## Table of Contents
1. [Testing Specs]("#testing-specs")


---
### Testing Specs

1. The app should be able to capture a date based off of a yyyy-dd-mm format:
  > Input : weekCalc = new WeekCalc(1978, 11, 11)

  > Output : year = 1978; month = 11; day = 11

2. The app should gather the year and calculate if it is a leap year or not:
  > Input: weekCalc = new WeekCalc(1978, 11, 11)

  > Output : false

3. The app should be able to determine how many times the number of months in a year fits into the decade and year value of the given year:
  > Input: weekCalc = new WeekCalc(1978, 11, 11)

  > Output: 6

4. The app should find the difference between the last two digits of the year number and the returned product of the multiples of 12 from the remainder of 12 and the decade and year value of a given date:

  > Input: weekCalc = new WeekCalc(1978, 11, 11)

  > Output: 6

5. The app should be able to determine the doomsday based off of the given year:

  >Input: weekCalc = new WeekCalc(1978, 11, 11);  weekCalc.anchorDayFinder()

  >Output: 2
