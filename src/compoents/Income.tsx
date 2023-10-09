import React from 'react'

export default function Income() {
  return ( <div>
        <form action="">
            <label htmlFor="">income source</label> <br />
            <input type="number" /> <br />

            <label htmlFor="">amount of income</label> <br />
            <input type="number" /> <br />

            <label htmlFor="">date of income</label> <br />
            <input type="date" /> <br />

            <button>add income</button> 

        </form>

    </div>
  )
}