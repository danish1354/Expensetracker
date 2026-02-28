import BudgetSummaryCard from "./BudgetSummaryCard";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <h1 className="dashboard__heading">Hello, Danish</h1>

      <div className="summaryRow">
        <BudgetSummaryCard title="Total Budget" amount={20000} />
        <BudgetSummaryCard title="Total Expense" amount={12500} />
        <BudgetSummaryCard title="Remaining Budget" amount={7790} />
      </div>
    </section>
  );
}
