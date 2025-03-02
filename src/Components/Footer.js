import "../css/footer.css";
import "../css/App.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="footerGridItem">
          <h3 className="footerH3">Contact</h3>
          <p className="footerP">
            Phone: <a href="tel:801-380-2857">(801)-380-2857</a>
          </p>
          <p className="footerP">Fax: (801)-303-7083</p>
          <p className="footerP">
            Email:{" "}
            <a href="mailto:jennifer@firstclasshomemortgage.com">
              jennifer@firstclasshomemortgage.com
            </a>
          </p>
          <div className="socialContainer">
            <a
              href="https://www.instagram.com/moore_than_mortgages_jen_moore/"
              className="footerP"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/MortgageswithJenniferMoore"
              className="footerP"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/jennifer-moore-48646b353/"
              className="footerP"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">License Info</h3>
          <p className="footerP">Jennifer Moore (NMLS #2104281)</p>
          <p className="footerP">
            Regulated by State of Utah Division of Real Estate NMLS #1843
          </p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">Address</h3>
          <p className="footerP">First Class Home Mortgage</p>
          <p className="footerP">
            <a
              href="https://goo.gl/maps/o97dcDxGxFcAcRheA"
              target="_blank"
              rel="noreferrer"
            >
              10808 River Front Parkway, Suite #3035,{<br />} South Jordan, UT
              84095
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
