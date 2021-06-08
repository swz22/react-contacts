import { useState } from "react";
import styled from "styled-components";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmission(e) {
    e.preventDefault();
  }

  const FormContainer = styled.div`
    background-color: white;
    display: flex;
    text-align: center;
    margin: auto;
    width: 50%;
  `;

  const Form = styled.form`
    display: inline-block;
    margin: auto;
    padding: 150px;
  `;

  const Input = styled.input`
    width: 80%;
    padding: 10px 180px;
    margin: 0;
    text-align: center;
    box-sizing: border-box;
    font-size: 19px;
    border: none;
    outline: none;
    border-bottom: 2px solid grey;
    ::placeholder {
      color: black;
    }
  `;

  const ButtonDiv = styled.div`
    font-size: 18px;
    padding: 14px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Button = styled.button`
    background-color: #b4b8b5;
    font-size: 18px;
    padding: 12px 16px;
  `;

  return (
    <FormContainer>
      <Form onSubmit={handleSubmission}>
        <div>
          <label htmlFor="username"></label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p></p>

        <ButtonDiv>
          <Button type="submit">
            <b>LOGIN</b>
          </Button>
        </ButtonDiv>

        <p> Don't have an account? <a href="/register">Register</a>. </p>

        <p> Already have an account? <a href="/login">Login</a>. </p>
      </Form>
    </FormContainer>
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
