
import React,{useState,useEffect} from 'react'

function IncDec() {
  const[num,setNum]=useState(0)
  const[use,setUse]=useState(false)

useEffect(() => {
  if (num <= 59) {
   const timeO= setTimeout(() => {
      setNum((num) => num + 1);
    }, 100);
    return () => clearTimeout(timeO);
  }
  }, [num]);

 function decN (){

  if ( num <=0){
    setNum(60);
  }

  else if (use == true){
    setNum(60);
  }
  setNum((num) =>num -5);
  setUse(false);
 }
  return (
    <div className="main_div">
       <div className="counter_div">
         <h1>{num}</h1>
        <div className="btn_div">

          <button onClick={decN}>decre</button>
    </div>
  </div>
</div>
  );
}

export default IncDec;

