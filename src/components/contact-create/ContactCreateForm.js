import { useState } from "react";
import styled from "styled-components";

const ContactCreateForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState("");

  function handleSubmission(e) {
    e.preventDefault();
  }

  const FormContainer = styled.div`
    background-color: #e4e4e4;
    display: flex;
    text-align: center;
    margin: auto;
  `;

  const Form = styled.form`
    display: inline-block;
    text-align: left;
    padding: 150px
  `;

  const Input = styled.input`
  width: 90%;
  padding: 10px 180px;
  margin: 0;
  box-sizing: border-box;
  font-size: 19px;
  border: none;
  outline: none;
  border-bottom: 2px solid grey;
  background-color: #e4e4e4;
  ::placeholder {
    color: black;
  }
  `;



  return (
    <div class="container" style={{ backgroundColor: "darkgray" }}>
      <FormContainer>
        
        <Form onSubmit={handleSubmission}>

        <img src ="https://i.pinimg.com/originals/e9/80/f7/e980f7be96698681e64bac92221cfb7d.png"></img>

            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <Input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Profile Picture Url"
              name="profilePic"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
            />

          <button type="submit">Add Contact</button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default ContactCreateForm;

//OLD CODE BELOW (CLASS BASED COMPONENT)

// class ContactCreateForm extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             firstName: '',
//             lastName: '',
//             phoneNumber: '',
//             email: '',
//             address: '',
//             profilePic: '',
//         };

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
//                     <img src={this.state.profilePic} alt="Profile preview." />
//                 </div>
//                 <div>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="First Name"
//                             name="firstName"
//                             value={this.state.firstName}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Last Name"
//                             name="lastName"
//                             value={this.state.lastName}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="tel"
//                             placeholder="Phone Number"
//                             name="phoneNumber"
//                             value={this.state.phoneNumber}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             name="email"
//                             value={this.state.email}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Address"
//                             name="address"
//                             value={this.state.address}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Profile Picture Url"
//                             name="profilePic"
//                             value={this.state.profilePic}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <button type="submit">Add Contact</button>
//                     </div>
//                 </div>
//             </form>
//         )
//     }
// }

// export default ContactCreateForm;
