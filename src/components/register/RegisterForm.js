import { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmission(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmission}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default RegisterForm;


//OLD CODE BELOW (CLASS BASED COMPONENT)

// import React from 'react';

// class RegisterForm extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             username: '',
//             password: '',
//         }

//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     }

//     handleInputChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     handleFormSubmit(event) {
//         event.preventDefault();

//     }

//     render() {
//         return (
//             <form onSubmit={this.handleFormSubmit}>
//                 <div>
//                     <label htmlFor="username">Username</label>
//                     <input
//                         id="username"
//                         name="username"
//                         type="text"
//                         placeholder="Username"
//                         value={this.state.username}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         placeholder="Password"
//                         value={this.state.password}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                 <div>
//                     <button type="submit">Login</button>
//                 </div>
//             </form>
//         )
//     }
// }

// export default RegisterForm;
