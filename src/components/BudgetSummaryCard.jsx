import React from 'react'

export default function BudgetSummaryCard({title,amount}) {
  return (
      <div className='budget-Summary'>
          <p>{title}</p>
          <h3>{amount}</h3>
      
    </div>
  )
}
