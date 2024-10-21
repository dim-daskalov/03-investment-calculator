import investmentImg from "../../assets/investment-calculator-logo.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header id={styles.header}>
      <h1>Investment Calculator</h1>
      <img src={investmentImg} alt="investment calculator logo" />
    </header>
  );
};

export default Header;
