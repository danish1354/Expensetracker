import { useState } from "react";
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
import { use } from "react";
import EditPopUp from "./components/EditPopUp";

function App() {
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [edit, setEdit] = useState("");

  const handleAddExpense = (expense) => {
    console.log("Expense :", expense);
    setExpenses([...expenses, expense]);
  };

  const handleAddBudget = (amount) => {
    console.log("Budget", amount);
    setBudget(amount);
  };

  return (
    <div className="app">
      <Header />

      <Main1>
        <Dashboard />

        <Filters
          onAddExpenseClick={() => setIsExpenseOpen(true)}
          onAddBudgetClick={() => setIsBudgetOpen(true)}
        />

        {isExpenseOpen && (
          <AddExpensePopup
            onClose={() => setIsExpenseOpen(false)}
            onAddExpense={handleAddExpense}
          />
        )}

        {isBudgetOpen && (
          <AddBudgetPopUp
            onClose={() => setIsBudgetOpen(false)}
            onAddBudget={handleAddBudget}
          />
        )}

        {isEditOpen && <EditPopUp onClose={() => setIsEditOpen(false)} />}

        <ExpenseTable
          expenses={expenses}
          onAddEditClick={() => setIsEditOpen(true)}
        />
      </Main1>
    </div>
  );
}

export default App;
