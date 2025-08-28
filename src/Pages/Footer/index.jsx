import styles from "./footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.contacto}>
      <a href="https://github.com/Veserad" target="_blank">
        <FaGithub size={60} color="rgb(189, 187, 187)" />
      </a>
      <a href="https://www.linkedin.com/in/sergioruizdiaz2012/" target="_blank">
        <FaLinkedin size={60} color="rgb(189, 187, 187)" />
      </a>
    </div>
  );
}
export default Footer;
