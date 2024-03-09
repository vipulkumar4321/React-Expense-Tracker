import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  // Expenses for year 1
  {
    id: "e1",
    title: "Groceries",
    amount: 50.0,
    date: new Date(2024, 0, 1),
  },
  {
    id: "e2",
    title: "Rent/Mortgage",
    amount: 55.0,
    date: new Date(2024, 5, 5),
  },
  {
    id: "e3",
    title: "Electricity",
    amount: 80.0,
    date: new Date(2024, 9, 10),
  },
  {
    id: "e4",
    title: "Fuel",
    amount: 40.0,
    date: new Date(2024, 0, 15),
  },
  // Expenses for year 2
  {
    id: "e5",
    title: "Dining Out",
    amount: 30.0,
    date: new Date(2023, 5, 20),
  },
  {
    id: "e6",
    title: "Movies",
    amount: 15.0,
    date: new Date(2023, 12, 25),
  },
  {
    id: "e7",
    title: "Clothing",
    amount: 50.0,
    date: new Date(2023, 3, 28),
  },
  {
    id: "e8",
    title: "Health Insurance",
    amount: 150.0,
    date: new Date(2023, 7, 30),
  },
  // Expenses for year 3
  {
    id: "e9",
    title: "Flight Tickets",
    amount: 300.0,
    date: new Date(2021, 7, 31),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const removeExpenseHandler = (id) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => expense.id !== id
      );
      return updatedExpenses;
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onRemoveExpense={removeExpenseHandler} />
    </div>
  );
};

export default App;
