import React, {useState} from "react";


function Counter() {

     const [counter, setCounter] = useState(0);



     return (
         <>
         <div>
              <h3>Current number <span>{counter}</span></h3>
             <button onClick={() => setCounter(counter + 1)}>Increase</button>
             <button onClick={() => setCounter(counter - 1)}>Decrease</button>
         </div>

         <div>
             <button onClick={() => setCounter(0)}>Reset</button>
         </div>
         </>
     )
}



export default Counter;