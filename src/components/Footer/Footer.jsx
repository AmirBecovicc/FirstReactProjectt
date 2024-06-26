import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="info">
        <h2 className="footer-text">CorneliusInnovations</h2>
        <p className="footer-text">Rifata Burdzevica 99</p>
        <p className="footer-text">Novi Pazar 36300</p>
        <p className="footer-text">Phone:062-971-69-88</p>
        <p className="footer-text">E-mail:amirbecovic60@gmail.com</p>
      </div>
      {/* <div className="icons">
        <FaInstagram size="50px" className="instagram" />
        <CiFacebook size="50px" />
        <CiTwitter size="50px" />
      </div> */}
    </footer>
  );
}
