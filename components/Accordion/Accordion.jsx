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
import multithemecolor1 from "../../public/multithemecolor1.png";
import todos from "../../public/todos.png";
import styles from "../../styles/accordion.module.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={`${styles["twocol"]}`}>
      <div className="container">
        <div className="grid grid-cols-12 gap-4 items-center py-48 lg:py-50">
          <div className={`col-span-4 ${styles["leftcol"]}`}>
            {activeIndex === 1 && (
              <Image src={todos} alt="To-Do List" className="block md:hidden" />
            )}
            {activeIndex === 2 && (
              <Image
                src={features}
                alt="To-Do List"
                className="block md:hidden"
              />
            )}
            {activeIndex === 3 && (
              <>
                <Image
                  src={multithemecolor}
                  alt="To-Do List"
                  className="block md:hidden"
                />
                <Image
                  src={multithemecolor1}
                  alt="To-Do List"
                  className="block md:hidden imgtwo  ml-40 -mt-20"
                />
              </>
            )}
          </div>
          <div className="col-span-8">
            <h2>Customize the way you like</h2>
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
                  alt="To-Do List"
                  className="hidden md:block"
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
                  alt="To-Do List"
                  className="hidden md:block"
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
                  alt="To-Do List"
                  className="hidden md:block"
                />
                <Image
                  src={multithemecolor1}
                  alt="To-Do List"
                  className="hidden md:block"
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
