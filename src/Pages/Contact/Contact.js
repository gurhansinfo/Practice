import React from 'react'
import Banner from '../Home/Banner/Banner'
import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    comfirm: ""
  });
  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
    comfirmError: ""
  });

  // const updateText = (e) => {
  //   e.preventDefault()
  //   let isValid = false;
  //   if (!form.name) {
  //     setErrorMessage({
  //       ...errorMessage,
  //       nameError: "Enter name"
  //     })
  //     isValid = false;
  //   }
  //   if (!form.email) {
  //     setErrorMessage({
  //       ...errorMessage,
  //       emailError: "Enter email"
  //     })
  //     isValid = false;
  //   } 

  //   return isValid;

  // }


  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })

    // Check if the value is not empty and clear the corresponding error message
    // if (value.trim() !== '') {
    //   setErrorMessage({
    //     ...errorMessage,
    //     [`${name}Error`]: ''
    //   });
    // }
    if (value !== '') {
      setErrorMessage({
        ...errorMessage,
        [`${name}Error`]: ''
      });
    }
  }


  let isValid = true; // Initialize isValid to true initially.
  let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
  const updateText = (e) => {
    e.preventDefault();

    // Reset error messages.
    setErrorMessage({
      nameError: '',
      emailError: '',
      phoneError: '',
      passwordError: '',
      comfirmError: '',
    });

    if (!form.name) {
      setErrorMessage((prevState) => ({
        ...prevState,
        nameError: 'Enter name',
      }));
      isValid = false; // Set isValid to false if name is empty.
    }
    if (!form.email) {
      setErrorMessage((prevState) => ({
        ...prevState,
        emailError: 'Enter email',
      }));
      isValid = false; // Set isValid to false if email is empty.
    }
    if (!form.email) {
      setErrorMessage((prevState) => ({
        ...prevState,
        emailError: 'Enter email',
      }));
      isValid = false; // Set isValid to false if email is empty.
    }
    else if(!regex.test(form.email)){
      setErrorMessage((prevState) => ({
        ...prevState,
        emailError: 'Inalid email',
      }));
      isValid = false;
    }

    if (!form.phone) {
      setErrorMessage((prevState) => ({
        ...prevState,
        phoneError: 'Enter phone',
      }));
      isValid = false;
    }

    if (!form.password) {
      setErrorMessage((prevState) => ({
        ...prevState,
        passwordError: 'Enter password',
      }));
      isValid = false;
    }

    if (!form.comfirm) {
      setErrorMessage((prevState) => ({
        ...prevState,
        comfirmError: 'confirm password',
      }));
      isValid = false;
    }else if(form.password !== form.comfirm){
      setErrorMessage((prevState) => ({
        ...prevState,
        comfirmError: 'password NOT Matched',
      }));
      isValid = false;  
    }
    // Add similar checks for other fields if needed.

    if (isValid) {
      console.log("form data", form)
    }
  };

  
  return (
    <>
      <Banner title="contact" />
      <div className='container form_box'>
        <form onSubmit={updateText}>
          <input type="text" name='name' placeholder="Name" value={form.name} onChange={handelChange} />
          {errorMessage.nameError && <div>{errorMessage.nameError}</div>}
          <input type="email" name='email' placeholder="Email" value={form.email} onChange={handelChange} />
          {errorMessage.emailError && <div>{errorMessage.emailError}</div>}
          <input type="tel" name='phone' placeholder="Phone" value={form.phone} onChange={handelChange} />
          {errorMessage.phoneError && <div>{errorMessage.phoneError}</div>}
          <input type="password" name='password' placeholder="Password" value={form.password} onChange={handelChange} />
          {errorMessage.passwordError && <div>{errorMessage.passwordError}</div>}
          <input type="password" name='comfirm' placeholder="Confirm Password" value={form.comfirm} onChange={handelChange} />
          {errorMessage.comfirmError && <div>{errorMessage.comfirmError}</div>}
          <button type="submit" onClick={updateText}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact