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

function App() {
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleAddBudget = (amount) => {
    setBudget(amount);
  };

  return (
    <div>
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
      </Main1>
    </div>
  );
}

export default App;
