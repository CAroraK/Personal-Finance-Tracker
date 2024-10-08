// app.js
const transactionForm = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');
const totalIncomeElement = document.getElementById('total-income');
const totalExpensesElement = document.getElementById('total-expenses');
const balanceElement = document.getElementById('balance');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction(e) {
  e.preventDefault();
  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;

  const transaction = {
    id: Date.now(),
    description,
    amount,
    category,
  };

  transactions.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));

  renderTransactions();
  updateSummary();
  updateChart();
  transactionForm.reset();
}

function deleteTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  renderTransactions();
  updateSummary();
  updateChart();
}

function renderTransactions() {
  transactionList.innerHTML = '';
  transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${transaction.description} - $${transaction.amount} (${transaction.category})
      <button onclick="deleteTransaction(${transaction.id})">X</button>
    `;
    transactionList.appendChild(li);
  });
}

function updateSummary() {
  const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);

  totalIncomeElement.innerText = income.toFixed(2);
  totalExpensesElement.innerText = (-expenses).toFixed(2);
  balanceElement.innerText = (income + expenses).toFixed(2);
}

function updateChart() {
  const categories = ['income', 'food', 'rent', 'entertainment', 'others'];
  const categoryTotals = categories.map(category =>
    transactions
      .filter(transaction => transaction.category === category)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
  );

  const chart = new Chart(document.getElementById('expense-chart').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: categories,
      datasets: [{
        data: categoryTotals,
        backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#2196f3', '#9c27b0'],
      }],
    },
    options: {
      responsive: true,
    },
  });
}

transactionForm.addEventListener('submit', addTransaction);
window.addEventListener('load', () => {
  renderTransactions();
  updateSummary();
  updateChart();
});
