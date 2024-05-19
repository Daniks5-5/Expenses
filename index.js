let expenses = []; //список трат
const input = document.getElementById('js-input-expenses');
const button = document.getElementById('js-input-btn');

button.addEventListener('click', function(){
    //ParseInt конвертирует строки в целочисленное значение
    const expense = parseInt(input.value);//получаем что ввёл пользователь
    expenses.push(expenses);//для добавления значений в массив
    console.log(expenses);

});