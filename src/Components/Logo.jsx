import { Link } from "react-router-dom";
import Styles from "./Logo.module.css";
export default function Logo() {
  return (
    <Link to="/">
      <div className={Styles.logo}>
        <h1>
          <span className="">Bl</span>
          og
        </h1>
      </div>
    </Link>
  );
}
