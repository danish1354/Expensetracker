import BudgetSummaryCard from "./BudgetSummaryCard";

export default function Dashboard({ AddBudgetPopUp, budget, expenses }) {
  const totalExpense = expenses.reduce((sum, item) => {
    return sum + Number(item.amount);
  }, 0);

  const remainingBudget = budget - totalExpense;
  return (
    <section className="dashboard">
      <h1 className="dashboard__heading">Hello, Danish Ansari</h1>

      <div className="summaryRow">
        <BudgetSummaryCard title="Total Budget" amount={budget} />
        <BudgetSummaryCard title="Total Expense" amount={totalExpense} />
        <BudgetSummaryCard title="Remaining Budget" amount={remainingBudget} />
      </div>
    </section>
  );
}
