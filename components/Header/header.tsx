import styles from "../../styles/header.module.css";
import Link from "next/link";
import { useState } from "react";
function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <header className="bg-blue h-70 md:h-56 md:flex md:items-center z-9999 fixed top-0 left-0 w-full">
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
                      className="w-18 h-18 text-white"
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
                      className="w-18 h-18 text-white"
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
                className={`flex justify-self-center mdm:block  ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul
                  className={`mobheader flex md:block md:w-full z-9999 items-center ${styles.menu}`}
                >
                  <li>
                    <Link href="/" className={styles.active}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/">Features</Link>
                  </li>
                  <li>
                    <Link href="/">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
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
