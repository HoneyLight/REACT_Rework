import Navigation from "../components/Navigation";
import { Navigate, useLocation } from "react-router-dom";

function UserDetails() {
  const { state } = useLocation();

  if (state !== null) {
    return (
      <div>
        <Navigation />
        <div className="header">
          <h2>User Details</h2>
        </div>
        <div className="user_details">
          <div className="user_detail">
            <h3>Full name</h3>
            <p>
              {state.first_name} {state.last_name}
            </p>
          </div>
          <div className="user_detail">
            <h3>Email Address</h3>
            <p>{state.email}</p>
          </div>
          <div className="user_detail">
            <h3>Phone number</h3>
            <p>{state.phone_number}</p>
          </div>
          <div className="user_detail">
            <h3>Age</h3>
            <p>{state.age}</p>
          </div>
          <div className="user_detail">
            <h3>Gender</h3>
            <p>{state.gender}</p>
          </div>
          <div className="user_detail">
            <h3>Occupation</h3>
            <p>{state.occupation}</p>
          </div>
          <div className="user_detail">
            <h3>Message</h3>
            <p>{state.message}</p>
          </div>
          <div className="user_detail">
            <h3>Promotional Emails</h3>
            <p>{state.emailInfo ? "I Accept to get Promotional Emails" : "Does not want Promotional Emails"}</p>
          </div>
        </div>
      </div>
    );
  }
  return <Navigate to="/contact" />;
}

export default UserDetails;




// import Navigation from "../components/Navigation";
// import { useLocation } from "react-router-dom";

// function UserDetails() {
//     const resp = useLocation();
//     const result = resp.state;

//         // const navigate = useNavigate();
//     // result === null ? navigate("/contact") : console.log("Welcome");

//     return(
//         <div>
//             <Navigation/>
//             <div className="header">
//                 <h2>User Details</h2>
//             </div>
//             <div className="user_details">
//                 <div className="user_detail">
//                     <h3>Full Name</h3>
//                     <p>{result.first_name} {result.last_name}</p>
//                 </div>
//                 <div className="user_detail">
//                     <h3>Email</h3>
//                     <p>{result.email}</p>
//                 </div>
//                 <div className="user_detail">
//                     <h3>Phone Number</h3>
//                     <p>{result.phone_number}</p>
//                 </div>
//                 <div className="user_detail">
//                     <h3>Age</h3>
//                     <p>{result.age}</p>
//                 </div>
//                 <div className="user_detail">
//                     <h3>Gender</h3>
//                     <p>{result.gender}</p>
//                 </div>
//                 <div className="user_detail">
//                     <h3>Occupation</h3>
//                     <p>{result.occupation}</p>
//                 </div>
//                 <div className="user_detail">
//                     <h3>Message</h3>
//                     <p>{result.message}</p>
//                 </div>
//                 <div className="user_detail">
//                     <h3>Promotion Emails</h3>
//                     <p>{result.emailInfo ? "I Accept to get promotional emails" : "Do not want Promotional emails"}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UserDetails;