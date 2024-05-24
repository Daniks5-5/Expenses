let expenses = []; //список трат
const LIMIT = 20000;
const valute = 'руб';
const STATUS_GOOD = 'Всё хорошо';
const STATUS_BAD = 'Всё плохо';

const input = document.getElementById('js-input-expenses');
const button = document.getElementById('js-input-btn');
const historyList = document.getElementById('js-history__list');
const sumElement = document.getElementById('js-sum');
const limit = document.getElementById('js-limit');
const sumLimit =  document.getElementById('js-limit');
const status = document.getElementById('js-status');
const allSum = document.getElementById('js-limit-sum');
const cleanButton = document.getElementById('js-clean-btn');
const withdraw = document.getElementById('status-inner');
const withdrawCalc = document.getElementById('calc');
limit.innerText = LIMIT;

init(expenses);

button.addEventListener('click', function(){
    //2 сохраняем значения 
    inputValue(input);
    renderStatus(expenses);
    renderHistory(expenses);
    renderSum(expenses);
});
cleanButton.addEventListener('click', function(){
    clean();

});

function init(expenses){
  
    withdrawCalc.innerText = calculateExpenses(expenses);
};

function calculateExpenses(expenses){
     //подсчет суммы и вывод 
     let sum = 0;
     expenses.forEach(expense => {
        sum += expense; //пробегаю по массиву
       });
       return sum;
};

function renderHistory(expenses) {
     //3 вывод списка
     let html = '';
     expenses.forEach(expense => {
       html  += `<li>${expense} ${valute}.</li>`; //задаем шаблон строки, выводим поочередно каждый новый эелемент
     });
     
    historyList.innerHTML = `<ol>${html}</ol>`;
};

function renderSum(expenses){
    withdrawCalc.innerHTML = `<p class="calc">${calculateExpenses(expenses)} ${valute}</p>`;//выводим сумму
};
function renderStatus(expenses){  //5 вывод статуса
    if(calculateExpenses(expenses)>LIMIT){
        withdraw.innerHTML = `<p class = "status-inner-bad"> ${STATUS_BAD} </p>`;
    }
    else{
        withdraw.innerHTML = `<p class = "status-inner"> ${STATUS_GOOD} </p>`;
    }
};
function inputValue(input){
    //1 получение значения с input
    if(!input.value){ //проверка, если input пустой, о ничего не выводим в массив
        return;  
    }
    //ParseInt конвертирует строки в целочисленное значение
    const expense = parseInt(input.value);//получаем что ввёл пользователь
    input.value = ''; //сброс значения в input после нажатия кнопки "Добавить"
    expenses.push(expense);//для добавления значений в массив
};

//чистка лимита
function clean(){
    historyList.innerHTML = `<ol></ol>`;
    expenses.length = 0;
    withdrawCalc.innerText = 0;
    withdraw.innerHTML = ``;
}