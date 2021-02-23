
class UI{
    constructor(){
        this.incomeList = document.querySelector('.list__income');
        this.expenseList = document.querySelector('.list__expense');
        this.total = document.querySelector('.total__money_amount')
        this.totalIncome = document.querySelector('.total__income_amount');
        this.totalExpense = document.querySelector('.total__expense_amount');
        this.incomeName = document.querySelector('.income__name');
        this.incomeAmount = document.querySelector('.incomeAmount');
        this.expenseName = document.querySelector('.expense__name')
        this.expenseAmount = document.querySelector('.expenseAmount');
        this.ID = 0;
        this.moneyArr = [0];
    }


clearInput(){
    this.incomeName.value = '';
    this.expenseName.value = '';
    this.incomeAmount.value = '';
    this.expenseAmount.value = '';
}

addIncome(){
    if(this.incomeName.value === '' || this.incomeAmount.value < 0){
        alert('Value can not be empty or negative!');
        return
    }else{
        const income = document.createElement('div');
        income.classList.add('item');
        income.setAttribute('id', this.ID);
        income.innerHTML = `<p class="item__name">${this.incomeName.value}</p>
        <div class="info">
        <p class="item__amout">${this.incomeAmount.value}</p><span class="item__rate">zł</span>
        <button class="delete" onclick="deleteTransatcion(${this.ID})"><i class="far fa-trash-alt"></i></button>
        </div>`
        this.incomeList.appendChild(income);
        this.moneyArr.push(parseFloat(this.incomeAmount.value));
        console.log(this.moneyArr)
        this.ID++;
        this.countMoney(this.moneyArr);
        this.clearInput();
    } 
    }

addExpense(){
    if(this.expenseName.value === '' || this.expenseAmount.value < 0){
        alert('Value can not be empty or negative!');
        return
    } else {
        const expense = document.createElement('div');
        expense.classList.add('item');
        expense.innerHTML = `<p class="item__name">${this.expenseName.value}</p>
        <div class="info">
        <p class="item__amout">${-this.expenseAmount.value}</p><span class="item__rate">zł</span>
        <button class="delete" onclick="deleteTransatcion(${this.ID})"><i class="far fa-trash-alt"></i></button>
        </div>`
        this.expenseList.appendChild(expense);
        this.moneyArr.push(parseFloat(-this.expenseAmount.value));
        console.log(this.moneyArr)
        this.ID++;
        this.countMoney(this.moneyArr);
        this.clearInput();
    }
}

countMoney(){
    const totalIncome = this.moneyArr.filter(money => money >= 0).reduce((a,b) => a + b);
    const totalExp = this.moneyArr.filter(money => money <= 0).reduce((c, d) => c + d);
    const totalMoney = this.moneyArr.reduce((a,b)=> a+b);

this.total.textContent = `${totalMoney}`;
this.totalIncome.textContent = `${totalIncome}`;
this.totalExpense.textContent = `${totalExp}`;
}
}

function eventListeners(){
 const iconWallet = document.querySelector('.header svg');
 const incomeBtn = document.getElementById('income__btn');
 const expenseBtn = document.getElementById('expense__btn');
 const close = document.getElementById('close');
 const secondPanel = document.querySelector('.secondPanel');

 const ui = new UI();

 iconWallet.addEventListener('click', (e)=>{
     e.preventDefault();
secondPanel.style.visibility = 'visible';
close.style.visibility = 'visible';

})

 close.addEventListener('click', (e)=>{
     e.preventDefault();
secondPanel.style.visibility = 'hidden';
close.style.visibility = 'hidden';
})

incomeBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    ui.addIncome();
})

expenseBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    ui.addExpense();
})
}

document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
  })