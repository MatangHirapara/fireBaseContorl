import React, { useState } from 'react'
import "./login.css"

const Login = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phone: ""
  })

  let name, value;
  const postuserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value })
  }

  
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, city, phone } = user
    if (firstName || lastName || email || city || phone) {
      
      const res = fetch("https://reactformproject-92806-default-rtdb.firebaseio.com/userDataRecord.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            city,
            phone
          })
        }
      );
      if (res) {
        setUser({
          firstName,
          lastName,
          email,
          city,
          phone
        })
        alert("Data Stored")
      } else {
        alert("plz fill the data")
      }
    } else {
      alert("plz fill the data")
    }
  }

  return (
    <>
      <div className='firstDiv' >
        <div className='secondDiv'>
          <input type="text" name='firstName' placeholder='First Name' value={user.firstName} onChange={postuserData} />
          <br />
          <br />
          <input type="text" name='lastName' placeholder='Last Name' value={user.lastName} onChange={postuserData} />
          <br />
          <br />
          <input type="email" name='email' placeholder='Email' value={user.email} onChange={postuserData} />
          <br />
          <br />
          <input type="text" name='city' placeholder='City' value={user.city} onChange={postuserData} />
          <br />
          <br />
          <input type="number" name='phone' placeholder='Phone-No' value={user.phone} onChange={postuserData} />
        </div>
        <br />
        <button id='demo' type='submit' onClick={submitData} >Submit</button>
      </div>
    </>
  )
}

export default Login