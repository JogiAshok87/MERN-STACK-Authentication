import React from 'react'

const Navbar = () => {
    const onClickLogout = () =>{
        localStorage.removeItem("token")
        window.location.href = "/login"
    }
  return (
    <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#000",color:"#ccc",padding:"10px",}}>
        <h3>Navbar</h3>
        <button on onClick={onClickLogout}>Logout</button>
    </div>
  )
}

export default Navbar