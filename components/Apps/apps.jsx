import styles from "../../styles/header.module.css";

function Header() {
  return (
    <>
      <header className="bg-blue">
        <div className={styles.containerlg}>
          <div className="flex items-center">
            <div className="w-1/2">
              <div className={styles.sitettl}>
                <b>Me</b>volve
              </div>
            </div>
            <div className="flex justify-end w-1/2">
              <ul className={`flex items-center ${styles.menu}`}>
                <li>
                  <a href="#" className={styles.active}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
