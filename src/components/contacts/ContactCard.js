import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import styled from "styled-components";

const ContactCard = ({ firstName = "", lastName = "", phoneNumber = "", profilePic = ""}) => {
  return (
    <Card style= {{width: "75%", margin: "auto", backgroundColor: "white"}}>
      <Row >

        <Col style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <div>
            <Image
              src={profilePic}
              alt={`Profile of ${firstName} ${lastName}.`}
              roundedCircle
              width="140"
            />
          </div>
          <div>
            <p style={{fontFamily: "sans-serif", fontSize: "1.2em", color: "dimgrey"}}> &nbsp; &nbsp; {firstName} {lastName} </p>
            <p style={{fontFamily: "sans-serif", fontSize: "1.2em", color: "dimgrey"}}> &nbsp; &nbsp; {phoneNumber} </p>
          </div>
        </Col>

        <Col>
          <XButton>X</XButton>
        </Col>

      </Row>
    </Card>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const XButton = styled.button`
    border-radius: 50%;
    background-color: darkgrey;
    color: white;
    font-size: 1rem;
    font-weight: bold;
`;

export default ContactCard;