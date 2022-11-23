import Image from "next/image";
import playicon from "../../public/play-icon.svg";
import appleapp from "../../public/apple-app.png";
import anroidapp from "../../public/anroid-app.png";

function Banner({
  title,
  text,
  bannerimg,
}: {
  title: any;
  text: any;
  bannerimg: any;
}) {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:flex md:flex-col-reverse	 items-center">
        <div className="col-span-6 md:col-span-12 md:mb-30 text-center ">
          <h1>{title}</h1>
          <div className="text-dgray1 mb-30 lg:mb-20 md:mb-29  textsm">
            {text}
          </div>
          <div className="btnrow">
            <a href="#" className="btn video-btn">
              <Image
                src={playicon}
                alt="Watch Video"
                className="inline-block"
              />
              watch video
            </a>
          </div>
          <div className="flex justify-between mt-30 lg:mt-20 mx388">
            <Image
              src={appleapp}
              alt="
              Apple app"
              className="mxw"
            />
            <Image
              src={anroidapp}
              alt="Download the App store"
              className="mxw"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-12 text-center">
          <Image
            src={bannerimg}
            alt="Download the App store"
            width="482"
            height="482"
            layout="responsive"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
