'use client';
import React,{useState} from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';

const ContactUs = () => {

  const [inputField, setInputField] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    account: "",
    referal: "",
    message: "",
    error_log : []
  });
  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };
  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", inputField.f_name);
    formData.append("last_name", inputField.l_name);
    formData.append("email", inputField.email);
    formData.append("phone", inputField.phone);
    formData.append("account", inputField.account);
    formData.append("referal", inputField.referal);
    formData.append("message", inputField.message);
    axios
      .post("api/contract", formData)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.data)
          setInputField({
            f_name: "",
            l_name: "",
            email: "",
            phone: "",
            message: "",
            account: "",
            referal: "",
            error_log : []
          });
          Swal.fire('success','Thankyou for your message.','success');
        } else {
          console.log(res.data.error)
          setInputField( {
            ...inputField,
            error_log : res.data.error
          })
        }
      });
  };
  return (
    <>
     <div className="content-eas-nft-wrapper">
        <h3 className="page-title-item">Contact Us</h3>
        <div className="account-details-from">
          <form onSubmit={allInfoSubmit}>
            <div className="input-fulname-fluid-item d-flex algin-items-center gap-3">
              <div className="account-input-fluid-item">
                <label htmlFor="">First name *</label>
                <input type="text"
                        onChange={inputsHandler}
                        value={inputField.f_name}
                        name="f_name"
                        
                        className="form-control"
                        placeholder="Enter first Name" />
              </div>
              <div className="account-input-fluid-item">
                <label htmlFor="">Last name *</label>
                <input type="text"
                        onChange={inputsHandler}
                        value={inputField.l_name}
                        name="l_name"
                        
                        className="form-control"
                        placeholder="Enter last Name" />
              </div>
            </div>
            <div className="input-fulname-fluid-item d-flex algin-items-center gap-3">
              <div className="account-input-fluid-item">
                <label htmlFor="">Email *</label>
                <input type="email"
                        onChange={inputsHandler}
                        value={inputField.email}
                        name="email"
                        
                        className="form-control"
                        placeholder="Enter Your email" />
              </div>
              <div className="account-input-fluid-item">
                <label htmlFor="">Your Phone *</label>
                <input type="number"
                        onChange={inputsHandler}
                        value={inputField.phone}
                        name="phone"
                        
                        className="form-control"
                        placeholder="Enter phone number" />
              </div>
            </div>
            <div className="account-input-fluid-item">
              <label htmlFor="">Message *</label>
           <textarea type="text"
                        onChange={inputsHandler}
                        value={inputField.message}
                        name="message"
                        
                        className="form-control"
                        placeholder="Enter Your message" cols="30" rows="5"></textarea>
            </div>
    
            <button className="save-change-btn custom-btn" type="submit">
              SAND
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactUs