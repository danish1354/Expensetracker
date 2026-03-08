import { useState, useEffect } from "react";
import AddButton from "./components/AddButton";
import BudgetSummaryCard from "./components/BudgetSummaryCard";
import Dashboard from "./components/Dashboard";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Main1 from "./components/Main1";
import SearchBar from "./components/SearchBar";
import AddExpensePopup from "./components/AddExpensePopUp";
import AddBudgetPopUp from "./components/AddBudgetPopUp";
import ExpenseTable from "./components/ExpenseTable";
import EditPopUp from "./components/EditPopUp";
import DeletePopup from "./components/DeletePopup";

function App() {
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [expenses, setExpenses] = useState(() => {
    const savedExpense = localStorage.getItem("expenses");
    if (savedExpense) {
      return JSON.parse(savedExpense);
    } else {
      return [];
    }
  });

  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem("budget");
    if (savedBudget) {
      return JSON.parse(savedBudget);
    } else {
      return 0;
    }
  });
  const [editExpense, setEditEditexpense] = useState(null);

  const handleAddExpense = (expense) => {
    console.log("Expense :", expense);
    setExpenses([...expenses, expense]);
  };

  const handleAddBudget = (amount) => {
    console.log("Budget", amount);
    setBudget(amount);
  };

  const handleEditExpense = (expense) => {
    setEditEditexpense(expense);
    setIsEditOpen(true);
  };

  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    const updatedExpenses = expenses.filter((item) => item.id !== deleteId);
    setExpenses(updatedExpenses);
    setIsDeleteOpen(false);
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  let filteredExpenses;

  if (selectedCategory === "All") {
    filteredExpenses = expenses;
  } else {
    filteredExpenses = expenses.filter((item) => {
      return item.category === selectedCategory;
    });
  }
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]);
  console.log("Selected category:", selectedCategory);
  console.log("Expenses:", expenses);

  return (
    <div className="app">
      <Header />

      <Main1>
        <Dashboard budget={budget} expenses={expenses} />

        <Filters
          onAddExpenseClick={() => setIsExpenseOpen(true)}
          onAddBudgetClick={() => setIsBudgetOpen(true)}
          onCategoryClick={(category) => setSelectedCategory(category)}
        />

        {isExpenseOpen && (
          <AddExpensePopup
            onClose={() => setIsExpenseOpen(false)}
            onAddExpense={handleAddExpense}
            budget={budget}
          />
        )}

        {isBudgetOpen && (
          <AddBudgetPopUp
            onClose={() => setIsBudgetOpen(false)}
            onAddBudget={handleAddBudget}
          />
        )}

        {isEditOpen && (
          <EditPopUp
            expense={editExpense}
            onClose={() => setIsEditOpen(false)}
          />
        )}
        {isDeleteOpen && (
          <DeletePopup
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={confirmDelete}
          />
        )}

        <ExpenseTable
          expenses={filteredExpenses}
          onAddEditClick={handleEditExpense}
          onDeleteClick={handleDeleteClick}
        />
      </Main1>
    </div>
  );
}

export default App;
