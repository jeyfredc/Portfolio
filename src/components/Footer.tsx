import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center footer_links">
        <Tooltip id="LinkedIn" />
        <Tooltip id="gitHub" />
        <Tooltip id="instagram" />
        <a
          data-tooltip-id="LinkedIn"
          data-tooltip-content="LinkedIn"
          className="icon_link"
          href="https://www.linkedin.com/in/jeyfredc/"
          target="_blank"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          data-tooltip-id="gitHub"
          data-tooltip-content="Git Hub"
          className="icon_link"
          href="https://github.com/jeyfredc"
          target="_blank"
        >
          <FaGithub className="icon" />
        </a>
        <a
          data-tooltip-id="instagram"
          data-tooltip-content="Instagram"
          className="icon_link"
          href="https://www.instagram.com/jeyfred/"
          target="_blank"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
      <div className="h4 title text-center sign">Jeyfred Calderon</div>
    </footer>
  );
}
