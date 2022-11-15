const button = document.querySelector('start-game');

const MONTHS = ['Январь', 'Февраль'];

function month() {
  const monthNumber = prompt('Введите номер месяца от 1 до 12');

  const month = MONTHS[monthNumber];

  if (!month) {
    console.log('Месяца не существует');
    return;
  }
  return month;
}
