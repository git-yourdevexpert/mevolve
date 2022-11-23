import styles from "../../styles/header.module.css";
import { useState } from "react";
function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <header className="bg-blue">
        <div className="containerlg">
          <div className="flex items-center">
            <div className="w-1/2">
              <div className={styles.sitettl}>
                <b>Me</b>volve
              </div>
            </div>
            <div className="flex justify-end w-1/2">
              <div className="md:block hidden">
                <button className="" onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-22 h-22 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-22 h-22 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div
                className={`flex justify-self-center mdm:block ${
                  navbar ? "block" : "hidden"
                }`}
              >
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
        </div>
      </header>
    </>
  );
}

export default Header;
