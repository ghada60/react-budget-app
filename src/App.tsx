import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Target from "./compoents/Target";
import Saving from "./compoents/Saving";
import Expense from "./compoents/Expense";
import Income from "./compoents/Income";

export interface Data {
  income: string;
  amount: number;
  date: string;
}

function App() {
  const [userIncome, setUserIncome] = useState({
    income: "",
    amount: 0,
    date: "",
  });
  const [userInformationList, setUserInformationList] = useState<
    { income: string; amount: number; date: string }[]
  >([]);

  const [userInput, setUserInput] = useState({
    expense: "",
    amount: 0,
    date: "",
  });
  const [userExpense, setUserExpense] = useState<
    { expense: string; amount: number; date: string }[]
  >([]);

  const [savingInput, setSavingInput] = useState<number>();
  const [targetInput, setTargetInput] = useState<number>();

  const [balance, setBalance] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const calculateBalance = (): void => {
    const incomeAmount = userInformationList.reduce(
      (total, info) => total + info.amount,
      0
    );
    const expenseAmount = userExpense.reduce(
      (total, info) => total + info.amount,
      0
    );
    const savingAmount = savingInput || 0;
    const calculatedBalance = incomeAmount - expenseAmount - savingAmount;
    setBalance(calculatedBalance);
  };
  useEffect(calculateBalance, [userInformationList, userExpense, savingInput]);

  const calculateProgress = (): void => {
    const targetAmount = targetInput || 0;
    const savingAmount = savingInput || 0;
    const calculatedProgress = (savingAmount / targetAmount) * 100;
    setProgress(calculatedProgress);
  };
  useEffect(calculateProgress, [savingInput, targetInput]);

  return (
    <div className="App">
      <Income
        ob={setUserIncome}
        income={userIncome}
        a={userInformationList}
        b={setUserInformationList}
        balance={calculateBalance}
      />

      <Expense
        ob1={setUserInput}
        expense={userInput}
        a={userExpense}
        b={setUserExpense}
        balance={calculateBalance}
      />
      <Target
        saving={savingInput}
        ob3={setTargetInput}
        target={targetInput}
        progress={progress}
      />
      <Saving ob2={setSavingInput} saving={savingInput} balance={balance} />
    </div>
  );
}

export default App;
