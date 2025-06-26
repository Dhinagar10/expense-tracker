import History from './History';
import { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import BalanceContainer from './BalanceContainer';

const ExpenseContainer = () => {
  const [expenses, setExpenses] = useState([]);
  const [editData, setEditData] = useState(null);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('http://localhost:3000/expense');
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (title, expense) => {
    try {
      const response = await fetch('http://localhost:3000/expense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, expense }),
      });

      if (response.ok) {
        const newItem = await response.json();
        setExpenses(prev => [...prev, newItem]);
      } else {
        console.log("Failed to add expense");
      }
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/expense/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        await fetchExpenses();
      } else {
        console.error("Failed to delete expense");
      }
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const updateExpense = async (id, title, expense) => {
    try {
      const response = await fetch(`http://localhost:3000/expense/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, expense }),
      });

      if (response.ok) {
        const updatedItem = await response.json();
        setExpenses((prev) =>
          prev.map((item) => (item._id === id ? updatedItem : item))
        );
      } else {
        console.log("Failed to update expense");
      }
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const editExpense = (id) => {
    const itemToEdit = expenses.find((item) => item._id === id);
    setEditData(itemToEdit);
  };

  return (
    <div className="expense-container">
      <center><h2>Expense Tracker</h2></center>
      <BalanceContainer expenseArr={expenses} />
      <ExpenseForm
        expenses={addExpense}
        updateExpense={updateExpense}
        editData={editData}
        setEditData={setEditData}
      />
      <History
        expenses={expenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
        editData={editData}
      />
    </div>
  );
};

export default ExpenseContainer;