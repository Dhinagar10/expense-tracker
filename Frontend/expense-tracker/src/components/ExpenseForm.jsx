import { useState, useEffect } from 'react';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const { editData } = props;

  useEffect(() => {
    if (editData) {
      setTitle(editData.title || '');
      setAmount(
        editData.expense != null ? editData.expense.toString() : ''
      );
    } else {
      setTitle('');
      setAmount('');
    }
  }, [editData]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      setError('Title is required');
      return;
    }

    if (!amount) {
      setError('Amount is required');
      return;
    }

    const parsedAmount = parseInt(amount);

    if (editData) {
      props.updateExpense(editData._id, title, parsedAmount);
      props.setEditData(null);
    } else {
      props.expenses(title, parsedAmount);
    }

    setTitle('');
    setAmount('');
    setError('');
  };

  const handleCancel = () => {
    props.setEditData(null);
    setTitle('');
    setAmount('');
    setError('');
  };

  const isEdit = !!editData;

  return (
    <div className="expense-form">
      <h3>{isEdit ? "Edit Expense" : "Add Expense"}</h3>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Expense Name</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <button type="submit">{isEdit ? "Update Expense" : "Add Expense"}</button>
        {isEdit && (
          <button type="button" onClick={handleCancel} style={{ marginTop: '10px' }}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default ExpenseForm;