import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import whatsappIcon from "../../assets/whatsapp.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>H</span>
        <span>S</span>
      </a>
      <div>
        <p>
          This site was made with a <img src={reactIcon} alt="React" /> lot of
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/harsh-singhal-401510145/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/HARSH419"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/143_harsh_369/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://wa.me/message/VMOMWBWJAQLHB1?src=qr"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsappIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  );
}
