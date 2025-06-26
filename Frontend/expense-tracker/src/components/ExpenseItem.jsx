const ExpenseItem = (props) => {
  const { title, expense, deleteExpense, editExpense, id, isEditing } = props;
  const type = expense > 0 ? "income" : "expense";

  return (
    <div className={`expense-item ${type} ${isEditing ? 'editing' : ''}`}>
      <div>
        {title} : <span className="expense-amount">{expense}</span>
      </div>
      <div className="button-group hover-buttons">
        <button onClick={() => editExpense(id)} className="btn edit">Edit</button>
        <button onClick={() => deleteExpense(id)} className="btn delete">Delete</button>
      </div>
    </div>
  );
};

export default ExpenseItem;