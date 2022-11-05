import './App.css';
import {useState} from 'react';
function App() {
  let [details,setDetails]=useState({
    age:"",
    height:"",
    weight:""
  })
  let [bmi,setBmi]=useState("");
  let [category,setCategory]=useState("");
  function handleInput(e){
    setDetails({ ...details, [ e.target.name ] : e.target.value})
  }
  function checkAge(){
    if(details.age<2 || details.age >120 || isNaN(details.age)){
      let errorAge = document.getElementById("error-age");
      errorAge.style.display="block";
      return false;
    }else{
      let errorAge = document.getElementById("error-age");
      errorAge.style.display="none";
      return true;
    }
  }
  function checkHeight(){
    if(isNaN(details.height)){
      let errorHeight = document.getElementById("error-height");
      errorHeight.style.visibility="visible";
      return false;
    }else{
      let errorHeight = document.getElementById("error-height");
      errorHeight.style.visibility="hidden";
      return true;
    }
  }
  function checkWeight(){
    if(isNaN(details.weight)){
      let errorHeight = document.getElementById("error-weight");
      errorHeight.style.visibility="visible";
      return false;
    }else{
      let errorHeight = document.getElementById("error-weight");
      errorHeight.style.visibility="hidden";
      return true;
    }
  }
  function calculate(){
    if(checkAge() & checkHeight() & checkWeight()){
      let cal = (details.weight)/((details.height/100)*(details.height/100));
      setBmi(cal);
      if(cal < 16){
        setCategory("Severe Thiness");
      }else if(cal>=16 && cal<17){
        setCategory("Moderate Thiness");
      }else if(cal>=17 && cal<18.5){
        setCategory("Mild Thiness");
      }else if(cal>=18.5 && cal<25){
        setCategory("Normal");
      }else if(cal>=25 && cal<30){
        setCategory("Over Weight");
      }else if(cal>=30 && cal<35){
        setCategory("Obese Class 1");
      }else if(cal>=35 && cal<=40){
        setCategory("Obese Class 2");
      }else if(cal>40){
        setCategory("Obese Class 3");
      }
      let result = document.getElementById("bmi-result");
      result.style.display="block";
    }else{
      let result = document.getElementById("bmi-result");
      result.style.display="none";
    }
  }
  function clear(){
    window.location.reload();
  }
  return (
    <div className="App">
      <div className="BMI">
        <div className="calculator">
          
          <div className="info">
            <label htmlFor="age">Age</label>
            <input type="text" id="age" name="age" onChange={handleInput}/>
            <div className="age-info"> age : 2 - 120 </div>
          </div>
          <div className="info">
            <label htmlFor="gender">Gender</label>
            <label><input type="radio" id="gender" name="gender"/>Male</label>
            <label><input type="radio" id="gender" name="gender"/>Female</label>
          </div>
          <div className="info">
            <label htmlFor="height">Height</label>
            <input type="text" id="height" name="height" placeholder="cm" onChange={handleInput}/>
            <div id="error-height" className="error">Positive Numbers Only</div>
          </div>
          <div className="info">
            <label htmlFor="weight">Weight</label>
            <input type="text" id="weight" name="weight" placeholder="kg" onChange={handleInput}/>
            <div id="error-weight" className="error">Positive Numbers Only</div>
          </div>
          <div className="info">
            <label></label>
            <button onClick={calculate} id="calculate">Calculate</button>
            <button onClick={clear} id="clear">Clear</button>
          </div>
        </div>
        <div className="result">
          <h1>Result</h1>
          <div id="error-age">Please provide an age between 2 and 120</div>
          <div id="bmi-result">
            <p><b>BMI = {bmi} kg/m<sup>2</sup></b> (<span id="red">{category}</span>)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
