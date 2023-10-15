import { type } from 'os';
import React, { useState }from 'react'

type Prop ={

  ob3: React.Dispatch<React.SetStateAction<number | undefined>>
  saving: number | undefined
  target: number | undefined
  progress: number
}

export default function Target(props:Prop) {
  const [target,setTarget] = useState (0)
  // const [targetInput, setTargetInput]= useState<number>(target);


  function getUserTarget(event: React.ChangeEvent<HTMLInputElement>){
    setTarget(Number(event.target.value));


    };
    function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      console.log(target);
      props.ob3(target);
      setTarget(0);
    }


  return (
    <div>
        
        <form action="" onSubmit={onSubmitHandler}  >
            <label htmlFor="">set target</label>
            <input type="number" onChange={getUserTarget} />
            <input type="number" value={target}onChange={getUserTarget} />
            <button>add</button>


        </form>

        <div>
        <p>Target: </p>
          <p>Current Saving:</p>
          <p>Progress: %</p>
        <p>Target: {props.target} </p>
          <p>Current Saving:{props.saving}</p>
          <p>Progress: {props.progress} %</p>

          <progress id="file" value="0" max="100"></progress>
          <progress id="file"  value={props.progress}  max={props.target}></progress>
        </div>

        </div>

  )}