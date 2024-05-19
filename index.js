let expenses = []; //список трат
const input = document.getElementById('js-input-expenses');
const button = document.getElementById('js-input-btn');
const historyList = document.getElementById('js-history__list');
const sumElement = document.getElementById('js-sum');

button.addEventListener('click', function(){

    //1 получение значения с input
    if(!input.value){ //проверка, если input пустой, о ничего не выводим в массив
        return;  
    }
    //ParseInt конвертирует строки в целочисленное значение
    const expense = parseInt(input.value);//получаем что ввёл пользователь
    input.value = ''; //сброс значения в input после нажатия кнопки "Добавить"

    //2 сохраняем значения 
    expenses.push(expense);//для добавления значений в массив

    //3 вывод списка
    let html = '';
    expenses.forEach(expense => {
      html  += `<li>${expense} руб.</li>`; //задаем шаблон строки, выводим поочередно каждый новый эелемент
    });
    historyList.innerHTML = `<ol>${html}</ol>`;

    //подсчет суммы и вывод 
    let sum = 0;
    expenses.forEach(expense => {
       sum += expense; //пробегаю по массиву
      });
      sumElement.innerText = sum;//выводим сумму


});