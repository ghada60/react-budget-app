import React from 'react'

export default function Expense() {
  return (  <div>
        <form action="">
        <label htmlFor="">expense source</label> <br />
            <input type="number" /> <br />

            <label htmlFor="">amount of expense</label> <br />
            <input type="number" /> <br />

            <label htmlFor="">date of expense</label> <br />
            <input type="date" /> <br />

            <button>add expense</button>
        </form>

    </div>
  )
}