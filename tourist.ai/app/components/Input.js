"use client"
const Input = () => {
  return (
    <div className="input">
        <input type="text" placeholder="enter your trip details"  onChange={(e)=>{e.target.value}}/>
      </div>
  )
}

export default Input