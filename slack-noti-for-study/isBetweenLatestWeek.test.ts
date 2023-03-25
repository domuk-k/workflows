import isBetweenLatestWeek from './isBetweenLatestWeek';

// 주어진 날짜 배열
describe('isBetweenLatestWeek', () => {
  it.each([
    ['2023-03-01', false],
    ['2023-03-02', false],
    ['2023-03-17', false],
    ['2023-03-18', false],
    ['2023-03-20', false],
    ['2023-03-21', false],
    ['2023-03-22', true],
    ['2023-03-23', true],
    ['2023-03-24', true],
    ['2023-03-26', true],
    ['2023-03-30', false],
  ])(
    'should return true if the date is between the latest week',
    (date, result) => {
      expect(isBetweenLatestWeek(date)).toEqual(result);
    }
  );
});
