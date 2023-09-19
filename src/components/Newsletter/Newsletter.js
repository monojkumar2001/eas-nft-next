import React,{useState} from 'react'
import SocialMediaLinkItem from "../SocialMediaLink/SocialMediaLinkItem";
import axios from 'axios';
import '../../styles/layout/Header.css'
const Newsletter = () => {

    const [inputField, setInputField] = useState({
        email: "",
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
        formData.append("email", inputField.email);
        axios
          .post("api/subscriber", formData)
          .then((res) => {
            if (res.data.status === 200) {
              alert(res.data.msg);
              setInputField({
                email: "",
                error_log : []
              });
            }else {
                console.log(res.data.data)
              setInputField( {
                ...inputField,
                error_log : res.data.data
              })
            }
          });
      };
    

  return (
    <div className="footer-item-fluid footer-items-content">
    <SocialMediaLinkItem />
    <p>Be the first to know about special announcements:</p>
    <form onSubmit={allInfoSubmit}>
    <div className="footer-email-fluid mt-4">
        <input type="email"
                    required
                    name="email"
                    onChange={inputsHandler}
                    value={inputField.email} 
                    placeholder="Email*" />
    </div>
    <small style={{ color:'red' }}>{inputField.error_log.email}</small>
    <div className="footer-email-submit-btn">
        <button type="submit">I want in!</button>
    </div>
    </form>
    </div>
  )
}

export default Newsletter