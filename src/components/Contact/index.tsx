import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

const Contact = () => {
  return (
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>
          If you saw my potential or want to talk to me, don't hesitate to send
          me a message.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:harshdeveloper369@gmail.com">
            harshdeveloper369@gmail.com
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone" />
          <a href="tel:+918700326959">(+91) 8700326959</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
};

export default Contact;
