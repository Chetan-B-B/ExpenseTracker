import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [hide, updateForm] = useState("hidden");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    updateForm("hidden");
  };

  const addExpense = (e) => {
    updateForm("");
  };
  const cancelHandler = () => {
    updateForm("hidden");
  };

  return (
    <div className="new-expense">
      <button onClick={addExpense}>Add New Expense</button>
      <ExpenseForm
        hideForm={hide}
        onsaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    </div>
  );
};
export default NewExpense;
