import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./demo.css"

const Addlist = () => {
  const navigate = useNavigate()
  const [user, setUsers] = useState({
    name: "",
    email: "",
    phone: "",
    city: ""
  })
  

  let name, value;
  const onhandlechange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUsers({ ...user, [name]: value })
  }
  const onsubmit = async (e) => {
    e.preventDefault();
    const { name, email, city, phone } = user
    if (name || email || city || phone) {
      
      const res = fetch("https://reactformproject-92806-default-rtdb.firebaseio.com/userDataRecord.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, email, city, phone 
        })
      }
      );
      if (res) {
        setUsers({
          name, email, city, phone 
        })
        alert("Data Stored")
      } else {
        alert("plz fill the data")
      }
    } else {
      alert("plz fill the data")
    }
    await axios.post("http://localhost:3002/users", user)
    navigate("/")
  }

return (
  <>
    <div className='firstDiv' >
      <form onSubmit={e => onsubmit(e)} style={{ display: "inline-grid", marginLeft: "5rem", marginTop: "3rem" }}>
        <div>
          <input type="text" onChange={onhandlechange} value={user.name} name='name' placeholder='Enter Your Name' />
        </div>
        <br />
        <div>
          <input type="email" onChange={onhandlechange} value={user.email} name='email' placeholder='Enter Your Email' />
        </div>
        <br />
        <div>
          <input type="number" onChange={onhandlechange} value={user.phone} name='phone' placeholder='Enter Your Number' />
        </div>
        <br />
        <div>
          <input type="text" onChange={onhandlechange} value={user.city} name='city' placeholder='Enter Your city' />
        </div>
        <br />
        <button>Add</button>
      </form>
    </div>
  </>
)
}

export default Addlist