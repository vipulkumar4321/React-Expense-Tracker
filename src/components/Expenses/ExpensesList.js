import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import { ReactComponent as CrossIcon } from "./cross.svg";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <li key={expense.id} className="expense-item-container">
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onRemoveExpense={props.onRemoveExpense}
            className="expense-item"
          />
          <button
            className="remove-button"
            onClick={() => props.onRemoveExpense(expense.id)}
          >
            <CrossIcon className="cross-icon" width="24" height="24" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
