import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  width: 50%;
  padding: 35px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: auto;
`;

const ContactDetailsCard = ({ contact }) => {
  return (
    <Container>
      <div>
        <Image
          src={contact?.profilePic}
          alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}
        />
      </div>
      <div>
        <h2>
          {contact?.firstName} {contact?.lastName}
        </h2>
        <p>
          {" "}
          <b>Phone Number:</b> {contact?.phoneNumber}
        </p>
        <p>
          {" "}
          <b>Email:</b> {contact?.email}{" "}
        </p>
        <p>
          {" "}
          <b>Address:</b> {contact?.address}
        </p>
      </div>
    </Container>
  );
};

export default ContactDetailsCard;
