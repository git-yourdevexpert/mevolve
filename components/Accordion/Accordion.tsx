import React, { useState } from "react";
import Image from "next/image";
import AccordionLayout from "./AccordionLayout/AccordionLayout";
import switchicon from "../../public/switch.svg";
import switchiconb from "../../public/switch-b.svg";
import lighticon from "../../public/light-icon.svg";
import lighticonb from "../../public/light-iconb.svg";
import themecolor from "../../public/themecolor.svg";
import themecolorb from "../../public/themecolorb.svg";
import features from "../../public/features.png";
import multithemecolor from "../../public/multithemecolor.png";
import multithemecolorone from "../../public/multithemecolor1.png";
import todos from "../../public/todos.png";
import styles from "../../styles/accordion.module.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={`${styles["twocol"]}`}>
      <div className="container">
        <div className="grid grid-cols-12 gap-4 items-center py-48 lg:py-50 md:py-32">
          <div className={`col-span-4 md:hidden ${styles["leftcol"]}`}>
            {activeIndex === 1 && (
              <Image
                src={todos}
                alt="Turn Off-On the features"
                className="block md:hidden"
              />
            )}
            {activeIndex === 2 && (
              <Image
                src={features}
                alt="Light and Dark mode"
                className="block"
              />
            )}
            {activeIndex === 3 && (
              <>
                <Image
                  src={multithemecolor}
                  alt="To-Do List"
                  className="block"
                />
                <Image
                  src={multithemecolorone}
                  alt="Multi theme colors"
                  className="block imgtwo  ml-40 -mt-20"
                />
              </>
            )}
          </div>
          <div className="col-span-8 md:col-span-12 pl-10 md:pl-0">
            <h2 className="md:text-center">Customize the way you like</h2>
            <div className="flex flex-wrap">
              <AccordionLayout
                title="Turn Off-On the features"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                buleIcon={switchicon}
                blackIcon={switchiconb}
              >
                Mevolve was developed to help you reach your goals and be more
                consistent.
                <Image
                  src={todos}
                  alt="Turn Off-On the features"
                  className="hidden md:block mt-24"
                />
              </AccordionLayout>

              <AccordionLayout
                title="Light and Dark mode"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                buleIcon={lighticon}
                blackIcon={lighticonb}
              >
                Mevolve was developed to help you reach your goals and be more
                consistent.
                <Image
                  src={features}
                  alt="Light and Dark mode"
                  className="hidden md:block  mt-24"
                />
              </AccordionLayout>

              <AccordionLayout
                title="Multi-theme colors"
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                buleIcon={themecolor}
                blackIcon={themecolorb}
              >
                Mevolve was developed to help you reach your goals and be more
                consistent.
                <Image
                  src={multithemecolor}
                  alt="Multi theme colors"
                  className="hidden md:block  mt-24"
                />
                <Image
                  src={multithemecolorone}
                  alt="Multi theme colors"
                  className="hidden md:block  ml-40 -mt-20"
                />
              </AccordionLayout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
