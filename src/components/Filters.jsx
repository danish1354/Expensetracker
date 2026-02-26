import SearchBar from "./SearchBar";
import AddButton from "./AddButton";
import FilterButton from "./FilterButton";

export default function Filters({ onAddExpenseClick, onAddBudgetClick }) {
  const categories = [
    "All Expenses",
    "Food & Drinks",
    "Groceries",
    "Travel",
    "Health",
  ];

  return (
    <div>
      <SearchBar />

      {categories.map((c) => (
        <FilterButton key={c} label={c} />
      ))}

      <AddButton type="Budget" onClick={onAddBudgetClick} />
      <AddButton type="Expense" onClick={onAddExpenseClick} />
    </div>
  );
}
