import React, { useState } from "react";
import { Data } from "../App";
type Prop = {
  ob2: React.Dispatch<React.SetStateAction<number | undefined>>;
  saving: number | undefined;
  balance: number;
};

export default function Saving(props: Prop) {
  const [saving, setSaving] = useState(0);
  function getUserSaving(event: React.ChangeEvent<HTMLInputElement>) {
    setSaving(Number(event.target.value));
  }

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(saving);
    props.ob2(saving);
    setSaving(0);
  }
  return (
    <div>
      <h3>current balance:</h3>

      <h3>current balance:{props.balance}</h3>
      <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="">Transfer to saving account</label>
        <input type="number" />
        <input type="number" onChange={getUserSaving} value={saving} />
        <button>Transfer</button>
      </form>
    </div>
  );
}
