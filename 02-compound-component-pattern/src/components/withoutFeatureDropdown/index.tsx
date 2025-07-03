import React from 'react'

const DropDown:React.FC = () => {
  return (
    <div>
      <select style={{width:"200px", padding:"10px", margin:"10px"}}>
        <option>option 1</option>
        <option selected>option 2</option>
        <option>option 3</option>
        <option>option 4</option>
        <option>option 5</option>
      </select>
    </div>
  )
}

export default DropDown