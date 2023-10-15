import React, { useState } from 'react'


type Prop ={
  expense:{
    expense: string;
    amount: number;
    date: string; }
   ob1: React.Dispatch<React.SetStateAction<{
    expense: string;
    amount: number;
    date: string;
}>>
a: {
  expense: string;
  amount: number;
  date: string;
}[]
b: React.Dispatch<React.SetStateAction<{
  expense: string;
  amount: number;
  date: string;
}[]>>
balance: () => void

}

export default function Expense(props:Prop) {



function getUserExpense(event:React.ChangeEvent<HTMLInputElement>){

  props.ob1({...props.expense, expense:event.target.value})

}
function getUserAmount(event:React.ChangeEvent<HTMLInputElement>){

  props.ob1({...props.expense, amount:Number(event.target.value)})

}
function getUserDate(event:React.ChangeEvent<HTMLInputElement>){

  props.ob1({...props.expense, date:event.target.value})

}
function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
  event.preventDefault();

  props.b([...props.a,props.expense]);
  props.balance();
  props.ob1({ ...props.expense, expense: "" , amount:0, date:""})

}

  return (
    <div>
        <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="">expense source</label> <br />
           
            <input type="text" onChange={getUserExpense} value={props.expense.expense}/> <br />

            <label htmlFor="">amount of expense</label> <br />
    
            <input type="number" onChange={getUserAmount} value={props.expense.amount}/> <br />

            <label htmlFor="">date of expense</label> <br />
          
            <input type="date" onChange={getUserDate} value={props.expense.date}/> <br />

            <button>add expense</button>
        </form>

        <div>
      
        {props.a.map((user)=> {
          return(
            <li> {user.expense}: {user.amount} EUR on {user.date} </li>)})}

            </div>
            </div>
        )}