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
      <div className="flex flex-wrap w-full items-center bg-white shadow-shadow-one md:shadow-shadow-two rounded-6 mb-15">
        <div
          onClick={() => handleSetIndex(index)}
          className="flex w-full items-center"
        >
          <div className="flex w-full items-center py-15 lg:pb-11 px-20 md:pb-5 cursor-pointer">
            <div className="mr-20">
              {activeIndex === index ? (
                <Image src={buleIcon} alt="Picture of the author" />
              ) : (
                <Image src={blackIcon} alt="Picture of the author" />
              )}
            </div>
            {activeIndex === index ? (
              <div className="text-blue text-fs20 lg:text-fs16 font-medium">
                {title}
              </div>
            ) : (
              <div className="text-black text-fs20 lg:text-fs16  font-medium">
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
          <div className="text-gray text-fs20 lg:text-base2 pt-0 pr-30 pb-30 lg:pb-15 pl-66 w-full">
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default AccordionLayout;
