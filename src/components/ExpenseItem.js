import "./ExpenseItem.css";
function ExpenseItem() {
  const date = new Date(2021, 11, 18);
  const title = `Industrial vist`;
  const amount = 1500;
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
