import youtubeLogo from "../../youtube.svg";
import instagramLogo from "../../instagram.svg";
import facebookLogo from "../../facebook.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <h5>Contact</h5>
          <ul>
            <li>Phone: +48 123 456 789</li>
            <li>Email: contact@rs-freaks.com</li>
          </ul>
        </div>

        <div>
          <h5>Links</h5>
          <ul className="footer--links">
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Forum</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h5>Social Media</h5>
          <div className="social-media-icons">
            <span>
              <img src={youtubeLogo} alt="youtube logo" />
            </span>
            <span>
              <img src={facebookLogo} alt="youtube logo" />
            </span>
            <span>
              <img src={instagramLogo} alt="youtube logo" />
            </span>
          </div>
        </div>
        <div>
          <h5>Newsletter</h5>
          <div className="footer--input">
            <input type="mail" placeholder="example@mail.com" />
            <button>Join</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2022 Design and developed by &lt; CODE &gt;
      </div>
    </footer>
  );
};
