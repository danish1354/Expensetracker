import BudgetSummaryCard from "./BudgetSummaryCard";

export default function Dashboard() {
  return (
    <div>
      <h1>Hello, Danish</h1>

      <div>
        <BudgetSummaryCard title="Total Budget" amount={20000} />

        <BudgetSummaryCard title="Total Expense" amount={12500} />

        <BudgetSummaryCard title="Remaining Budget" amount={7790} />
      </div>
    </div>
  );
}
