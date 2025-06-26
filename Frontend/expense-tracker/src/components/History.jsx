import ExpenseItem from './ExpenseItem';

const History = ({ expenses, deleteExpense, editExpense, editData }) => {
  return (
    <div>
      <h3>History</h3>
      {expenses.map((item) => (
        <ExpenseItem
          key={item._id}
          id={item._id}
          title={item.title}
          expense={item.expense}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
          isEditing={editData?._id === item._id}
        />
      ))}
    </div>
  );
};

export default History;