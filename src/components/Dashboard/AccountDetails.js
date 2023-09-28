'use client';
import React,{useState,useEffect} from "react";
import { useWeb3React } from "@web3-react/core";
import { truncateAddress } from "../../wallet/utils2";
import axios from "axios";
import Swal from "sweetalert2";
const AccountDetails = () => {
  const { account} = useWeb3React();

  useEffect(() => {
      axios.get(`api/myprofile/${localStorage.getItem('user_id')}`)
          .then(res => {
              if(res.data.status === 200){
                setInputField({
                  f_name : res.data.data.f_name,
                  l_name : res.data.data.l_name,
                  email : res.data.data.email,
                  phone : res.data.data.phone,
                  referal : res.data.data.referal,
                  account : res.data.data.userId 
                })
              }else{
                Swal.fire('error',res.data.data,'error')
              }
          })
  }, [])
  

  const [inputField, setInputField] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    account: truncateAddress(account),
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
    console.log('form');
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", inputField.f_name);
    formData.append("last_name", inputField.l_name);
    formData.append("email", inputField.email);
    formData.append("phone", inputField.phone);
    formData.append("account", inputField.account);
    formData.append("referal", inputField.referal);
    axios
      .post("api/user", formData)
      .then((res) => {
        console.log('submitted');
        if (res.data.status === 200) {
        console.log('success');
          console.log(res.data.data)
          Swal.fire('success','Thankyou for your Updating Profile.','success');
          // setInputField({
          //   f_name: "",
          //   l_name: "",
          //   email: "",
          //   phone: "",
          //   account: "",
          //   referal: "",
          //   error_log : []
          // });
          // Swal.fire('success','Thankyou for your Updating Profile.','success');
        } else {
          console.log('error');
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
        <h3 className="page-title-item">Account Details</h3>
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
            <div className="account-input-fluid-item">
              <label htmlFor="">Phone Number *</label>
              <input type="number"
                        onChange={inputsHandler}
                        value={inputField.phone}
                        name="phone"
                        
                        className="form-control"
                        placeholder="Enter phone number" />
              <span>
                This will be how your name will be displayed in the account
                section and in reviews
              </span>
            </div>
            <div className="account-input-fluid-item">
              <label htmlFor="">Email *</label>
              <input type="email"
                        onChange={inputsHandler}
                        value={inputField.email}
                        name="email"
                        
                        className="form-control"
                        placeholder="Enter Your email" />
            </div>                   
            <div className="input-fulname-fluid-item d-flex algin-items-center gap-3">
              <div className="account-input-fluid-item">
                <label htmlFor="">Public ETH Wallet Address* <span><img src="/images/dashboard/what-icon.svg" alt="" /></span> </label>
                
                <input type="text"
                        onChange={inputsHandler}
                        value={inputField.account}
                        name="account"
                        className="form-control"
                        readOnly
                        />
              </div>
              <div className="account-input-fluid-item">
                <label htmlFor="">Who Referred You?</label>
                <input type="text"
                        onChange={inputsHandler}
                        value={inputField.referal}
                        name="referal"
                        className="form-control"
                        placeholder="Enter Your referal"
                        />
              </div>
            </div>
            <button className="save-change-btn custom-btn" type="submit">
              SAVE CHANGES
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;