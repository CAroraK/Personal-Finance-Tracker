Personal Finance Tracker:
A simple and advanced web application for tracking personal finances, including income and expenses, categorized spending, and real-time data visualization with interactive charts. The project is built using JavaScript, HTML, CSS, and Chart.js.

Features:

Add Transactions - Add income or expenses with descriptions, amounts, and categories (income, food, rent, entertainment, others).

Categorized Expenses - Track expenses by different categories.

Expense Summary - Displays total income, total expenses, and overall balance.

Data Persistence - Stores transaction data in localStorage, so the data is retained between sessions.

Expense Visualization - Uses Chart.js to render a doughnut chart showing expenses by category.

Project Structure
- index.html  (Main HTML file)
- styles.css  (Styles for the app)
- app.js  (Main JavaScript logic)
    
Technologies Used

HTML: For creating the structure of the app.

CSS: To style the application interface.

JavaScript: The core logic for handling transactions, updating the summary, managing data, and visualizing charts.

Chart.js: For rendering interactive charts.

localStorage: To persist the user’s data (transactions) across browser sessions.

How to Use Add Transactions:

Enter a description, amount, and select a category from the dropdown.
Press the Add Transaction button to save the transaction.
The transaction will be displayed in the transaction list, and the summary (income, expenses, and balance) will be updated.
Delete Transactions:

Press the X button next to any transaction in the list to delete it.
The summary and the chart will update accordingly.
Expense Visualization:

A doughnut chart shows a breakdown of expenses by category.
Setup Instructions
Clone or download the repository.
Ensure the following files are in the same directory:

index.html

styles.css

app.js

Open index.html in your web browser.

Future Improvements: 

User Authentication - Implement a login system to allow multiple users.

Monthly Budgets - Add features to set and manage monthly budgets.

Export Data - Allow users to export their transaction data to a CSV or Excel file.
