import React,{ useState } from 'react'

function Count() {
    const[count,setCount]=useState(0);

    let addIncrement=()=>{

        setCount(count+1)
    }
    let subtractIncrement=()=>{

        setCount(count-1)
    }
    let resetIncrement=()=>{

        setCount(0)
    }
    
    return (
        <div class="card">
            <div class="card-body">

            <h1>Count : {count}</h1>
            <button type="button" class="btn btn-primary mr-1" onClick={addIncrement}>Increment</button>

            <button type="button" class="btn btn-dark mr-1" onClick={resetIncrement}>Reset</button>

            <button type="button" class="btn btn-danger" onClick={subtractIncrement}>Decrement</button>
            </div>
        </div>
    )
}

export default Count;