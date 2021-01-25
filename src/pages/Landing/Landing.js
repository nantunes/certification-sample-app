import logo from "./logo.png";
import "./Landing.css";

export default function Landing() {
  return (
    <>
      <img src={logo} className="Landing-logo" alt="logo" />
      <p>
        Edit the code in <code>src</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://lumada-design.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Use the HV UI Kit
      </a>
    </>
  );
}
