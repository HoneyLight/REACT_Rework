import Navigation from "../components/Navigation";
import Btn from "../components/Btn";
import { useState } from "react";
// the navigate here when imported and used helps you to navigate to another page from a page just like doing windows.href in js
import { Navigate, useNavigate } from "react-router-dom";

function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [msg, setMsg] = useState("");
  const [emailInfo, setEmailInfo] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleEmailInfo = (e) => {
    e.target.checked ? setEmailInfo(true) : setEmailInfo(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fname === "" || lname === "" || age === "" || email === "" || phone === "" || gender === "" || occupation === "" || msg === "") {
      setErr(true);
      return;
    }
    let userInfo = {
      first_name: fname,
      last_name: lname,
      age: age,
      email: email,
      phone_number: phone,
      gender: gender,
      occupation: occupation,
      message: msg,
      emailInfo: emailInfo,
    };
    navigate("/user_details", { state: userInfo})
    // console.log(userInfo);
  };

  return (
    <div className="form-container">
      <Navigation />
      <div className="header">
        <h2>Contact Us</h2>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
            {err === true && fname === "" ? <span>First Name Required</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Last name</label>
            <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
            {err === true && lname === "" ? <span>Last Name Required</span> : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {err === true && email === "" ? <span>Email Required</span> : null}
        </div>
        <div className="form-group">
          <label htmlFor="">Phone Number</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          {err === true && phone === "" ? <span>Phone number Required</span> : null}
        </div>
        <div className="form-group">
          <label htmlFor="">Age</label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          {err === true && age === "" ? <span>Age Required</span> : null}
        </div>
        <div className="form-group">
          <label htmlFor="">Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {err === true && gender === "" ? <span>Gender Required</span> : null}
        </div>
        <div className="form-group">
          <label htmlFor="">Occupation</label>
          <select value={occupation} onChange={(e) => setOccupation(e.target.value)}>
            <option value="">Select Occupation</option>
            <option value="Doctor(Medical)">Doctor(Medical)</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Nurse">Nurse</option>
            <option value="ICT Personnel">ICT Personnel</option>
            <option value="Farmer">Farmer</option>
            <option value="Chef">Chef</option>
            <option value="Other">Other</option>
          </select>
          {err === true && occupation === "" ? <span>Occupation Required</span> : null}
        </div>
        <div className="form-group">
          <label htmlFor="">Message</label>
          <textarea value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
          {err === true && msg === "" ? <span>Message Required</span> : null}
        </div>
        <div className="form-checkbox">
          <input type="checkbox" checked={emailInfo} onChange={handleEmailInfo} />
          <span>Send promotions to my Email</span>
        </div>
        {emailInfo == true ? <span>You have accepted Promotion Emails from us</span> : null}
        <Btn title="Submit" bgColor="#58B7A4" width="100%" />
      </form>
    </div>
  );
}
export default Contact;
