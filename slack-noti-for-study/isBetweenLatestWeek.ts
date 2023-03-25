import moment from 'moment';

function isBetweenWeek(date: moment.MomentInput, weekStartDay = 2): boolean {
  // 현재 시각을 구합니다.
  const now = moment();

  // 구간의 시작과 끝을 구합니다.
  const nextTuesday = now.clone().startOf('week').add(weekStartDay, 'days');
  const prevTuesday = now
    .clone()
    .subtract(1, 'weeks')
    .startOf('week')
    .add(weekStartDay, 'days');

  // 주어진 날짜가 구간에 속하는지 검사합니다.
  return (
    moment(date).isAfter(prevTuesday.endOf('D')) &&
    moment(date).isBefore(nextTuesday.endOf('D'))
  );
}

export default isBetweenWeek;
