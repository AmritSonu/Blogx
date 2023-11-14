// Footer.js
import Styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerContent}>
        <p className={Styles.footerParagraph}>
          &copy; 2023 Your Blog Name. All rights reserved.
        </p>
        <p className={Styles.footerAnchor}>
          Designed and developed by Amritpal Singh
        </p>
      </div>
    </footer>
  );
}
