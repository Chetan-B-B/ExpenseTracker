import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredyear, setYear] = useState(new Date().getFullYear().toString());
  const filterChangeHandler = (year) => {
    setYear(year);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredyear}
        onFilterData={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />

      {filteredExpenses.length === 0 ? (
        <p className="expenses-list__fallback">
          What did you do with all of the cash?👀👀
        </p>
      ) : (
        filteredExpenses.map((expense) => {
          if (+filteredyear === expense.date.getFullYear()) {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          }
        })
      )}
    </Card>
  );
}

export default Expenses;
