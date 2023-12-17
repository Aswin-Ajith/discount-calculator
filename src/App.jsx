import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';
import { useState } from 'react';

function App() {
  const [amount,setamount]=useState('')
  const [discount,setdiscount]=useState('')
  const [result,setresult]=useState('')
 
  const cal=(e)=>{
    console.log(amount);
    let res=amount*discount/100
    let res1=amount-res
    setresult(res1)
  }
  const reset=(e)=>{
    setamount('')
    setdiscount('')
    setresult('')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6 first">
            <img id='discount' src="https://www.shutterstock.com/image-vector/discount-offer-tag-icon-shopping-600nw-1208529259.jpg" alt="" />
          </div>
          <div id='box' className="col-6 second">
            <h1>Discount Calculator</h1>
            <TextField className='text-box' onChange={e=>setamount(e.target.value)} id="standard-basic" label="Amount" variant="standard" value={amount} />
            <TextField className='text-box' onChange={e=>setdiscount(e.target.value)} id="standard-basic" label="Discount" variant="standard" value={discount} />
            <div className="button-group">
            <Button id='btn' onClick={cal} variant="outlined" color='error'>Discount</Button>
            <Button onClick={reset} variant="outlined"color='secondary' >Reset</Button>
            </div>
            <h3>Total Amount :{result}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
