import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../public/calender-icon.svg";
import refershicon from "../public/refresh-icon.svg";
import notbookicon from "../public/notbook-icon.svg";
import notebook1icon from "../public/notebook1-icon.svg";
import listicon from "../public/list-icon.svg";
import playicon from "../public/play-icon.svg";
import anroidapp from "../public/anroid-app.png";
import appleapp from "../public/apple-app.png";
import bannerimg from "../public/banner-img.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "../components/Accordion/Accordion";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  const settings = {
    dots: true,
  };

  return (
    <div className={styles.body}>
      <Head>
        <title>mevolve</title>
        <meta name="description" content="Customize the way you like" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className="pt-50 pb-70 lg:py-39">
            <Slider {...settings}>
              <div>
                <Banner
                  title="Automate self-development"
                  children="Evolve daily by efficiently managing your time, thoughts,
                      tasks and routines in a simple app."
                  bannerimg={bannerimg}
                />
              </div>
              <div>
                <Banner
                  title="Automate self-development"
                  children="Evolve daily by efficiently managing your time, thoughts,
                      tasks and routines in a simple app."
                  bannerimg={bannerimg}
                />
              </div>
              <div>
                <Banner
                  title="Automate self-development"
                  children="Evolve daily by efficiently managing your time, thoughts,
                      tasks and routines in a simple app."
                  bannerimg={bannerimg}
                />
              </div>

              {/* <div>
                <div className="grid grid-cols-12 gap-4 items-center md:flex md:flex-col-reverse">
                  <div className="col-span-6 text-center ">
                    <h1>Automate self-development</h1>
                    <div className={`text-dgray1 mb-30 ${styles.textsm}`}>
                      Evolve daily by efficiently managing your time, thoughts,
                      tasks and routines in a simple app.
                    </div>
                    <div className={styles.btnrow}>
                      <a
                        href="#"
                        className={`${styles["btn"]} ${styles["video-btn"]}`}
                      >
                        <Image src={playicon} alt="Watch Video" />
                        watch video
                      </a>
                    </div>
                    <div
                      className={`flex justify-between mt-30 ${styles["mx338"]}`}
                    >
                      <Image
                        src={appleapp}
                        alt="
                      Apple app"
                      />
                      <Image src={anroidapp} alt="Download the App store" />
                    </div>
                  </div>
                  <div className="col-span-6 text-center">
                    <Image src={bannerimg} alt="Download the App store" />
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
        <div
          className={`bg-lgray pt-28 pb-32 lg:py-20 md:pt-24 md:pb-4 md:-mx-15 ${styles["applist"]}`}
        >
          <h2 className="text-fs20 text-lbalck text-center lg:text-fs16 lg:mb-20">
            One App To Rule Them All
          </h2>
          <div
            className={`flex justify-between	md:flex-wrap md:justify-center ${styles.container}`}
          >
            <div className={styles.box}>
              <Image src={profilePic} alt="To-Do List" />
              <span>To-Do List</span>
            </div>
            <div className={styles.box}>
              <Image src={refershicon} alt="Habit Tracker" />
              <span>Habit Tracker</span>
            </div>
            <div className={styles.box}>
              <Image src={notbookicon} alt="Journaling" />
              <span>Journaling</span>
            </div>
            <div className={styles.box}>
              <Image src={notebook1icon} alt="Notes" />
              <span>Notes</span>
            </div>
            <div className={styles.box}>
              <Image src={listicon} alt="List" />
              <span>List</span>
            </div>
          </div>
        </div>
        <Accordion />
      </main>
    </div>
  );
}
