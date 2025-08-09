import React from 'react'

const ChildComponent = React.memo(({btnName,handleClick}) => {
    let counter = 0;
    console.log("Btn is re-render",counter++);
    
  return (
    <div>
      <button onClick={handleClick}>
        {btnName}
      </button>
    </div>
  )
});

export default ChildComponent
