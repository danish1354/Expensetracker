import { useState } from "react";
import AddButton from "./components/AddButton";
import BudgetSummaryCard from "./components/BudgetSummaryCard";
import Dashboard from "./components/Dashboard";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Main1 from "./components/Main1";
import SearchBar from "./components/SearchBar";
import ExpensePopup from "./components/AddExpensePopUp";

function App() {
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  }


  return (
    <div>
      <Header />

      <Main1>
        <Dashboard />

        <Filters onAddExpenseClick={() => setIsExpenseOpen(true)} />
        




        {isExpenseOpen && (
          <ExpensePopup
            onClose={() => setIsExpenseOpen(false)}
            onAddExpense={handleAddExpense}
          />
        )}
      </Main1>
    </div>
  );
}

export default App;
