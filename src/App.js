import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 14.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 999.49, date: new Date(2020, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 150,
    date: new Date(2021, 5, 12),
  },
  { id: "e5", title: "PS5", amount: 799.49, date: new Date(2021, 4, 29) },
  { id: "e6", title: "PS3", amount: 899.49, date: new Date(2019, 4, 13) },
  { id: "e7", title: "PC", amount: 1299.49, date: new Date(2019, 7, 15) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
