import React from "react";
import Image from "next/image";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
  buleIcon,
  blackIcon,
}: {
  title: any;
  children: any;
  index: any;
  activeIndex: any;
  setActiveIndex: any;
  buleIcon: any;
  blackIcon: any;
}) => {
  const handleSetIndex = (index: any) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <>
      <div className="flex flex-wrap w-full items-center bg-white shadow-shadow-one md:shadow-shadow-two rounded-6 mb-30 lg:mb-24">
        <div
          onClick={() => handleSetIndex(index)}
          className="flex w-full items-center"
        >
          <div className="flex w-full items-center py-12 lg:pb-11 px-20 md:pb-5 cursor-pointer">
            <div className="mr-20 md:mr-14">
              {activeIndex === index ? (
                <Image src={buleIcon} alt="Icon" />
              ) : (
                <Image src={blackIcon} alt="Icon" />
              )}
            </div>
            {activeIndex === index ? (
              <div className="text-blue text-fs20 lg:text-base font-medium">
                {title}
              </div>
            ) : (
              <div className="text-black text-fs20 lg:text-base  font-medium">
                {title}
              </div>
            )}
          </div>
          <div className="arrowicon">
            {activeIndex === index ? (
              <BiChevronUp className="w-30 h-30 mr-20 active text-blue" />
            ) : (
              <BiChevronDown className="w-30 h-30 mr-20 " />
            )}
          </div>
        </div>

        {activeIndex === index && (
          <div className="text-gray text-fs20 lg:text-base2 pt-0 pr-30 pb-12 lg:pb-15 pl-65 md:pl-60 w-full">
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default AccordionLayout;
