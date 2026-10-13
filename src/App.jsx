import React,{useState} from "react";
import "./index.css";

function App() {
  //making state of our app
  const [weight,setWeight]=useState();
  const [height,setHeight]=useState();
  const [bmi,setBmi]=useState('');
  const [message,setMessage]=useState('');

  //logic
  let calcBmi=(e)=>{
    e.preventDefault();

    if(weight==0 || height==0){
      alert("Please enter a valid weight and height!!")
    }
    else{
      let bmi=(weight/(height*height))
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage("You are underweight!!!")
      }
      else if(bmi>=25 && bmi<30){
        setMessage("You are a heathy person.")
      }
      else {
        setMessage("You are overweight!!!!")
      }
    }
  }


  let reload=()=>{
    window.location.reload()
  }





  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kgs): </label>
            <input
              type="text"
              placeholder="Enter your weight here"
              value={weight}
              onChange={(e)=> setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (m): </label>
            <input
              type="text"
              placeholder="Enter your height here"
              value={height}
              onChange={(event)=> setHeight(event.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" type="submit" onClick={reload}>
            Reload
          </button>

          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
