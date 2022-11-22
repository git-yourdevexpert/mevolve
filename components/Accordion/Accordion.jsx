import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout/AccordionLayout";
import switchicon from "../../public/switch.svg";
import switchiconb from "../../public/switch-b.svg";
import lighticon from "../../public/light-icon.svg";
import lighticonb from "../../public/light-iconb.svg";
import themecolor from "../../public/themecolor.svg";
import themecolorb from "../../public/themecolorb.svg";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
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
      </AccordionLayout>
    </div>
  );
};
export default Accordion;
