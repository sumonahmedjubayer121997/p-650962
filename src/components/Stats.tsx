/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useRef, useState } from "react";
import fb from "../../public/fb.png";
import github from "../../public/github.png";
import insta from "../../public/insta.png";
import linkedin from "../../public/linkedin.png";
import { randomBlob } from "@/hooks/randomBlob";

const Stats = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const blobRef = useRef(null);

  const socials = [
    {
      icon: github,
      link: "https://github.com/afnanFerdousi",
    },
    {
      icon: linkedin,
      link: "https://www.linkedin.com/in/afnanferdousi550/",
    },
    {
      icon: insta,
      link: "https://www.instagram.com/afnanferdousi130/",
    },
    {
      icon: fb,
      link: "https://www.facebook.com/afnanferdousi2006",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      randomBlob(blobRef);
    };

    randomBlob(blobRef);
    window.addEventListener("resize", handleResize);

    const intervalId = setInterval(() => {
      randomBlob(blobRef);
    }, 4000);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallDevice = windowWidth <= 480;

  return (
    <div className="max-w-[1380px] w-full mx-auto">
      <div className="flex items-center justify-center px-8 lg:h-[70vh] h-[50vh] gap-[3rem] lg:gap-[8rem]">
        <div
          ref={blobRef}
          className="blob2"
          style={{ filter: "blur(100px)" }}
        ></div>

        <div
          {...(!isSmallDevice
            ? {
                "data-aos": "fade-right",
                "data-aos-duration": "3000",
                "data-aos-offset": "100",
              }
            : {
                "data-aos": "fade-up",
                "data-aos-duration": "3000",
                "data-aos-offset": "100",
              })}
          className="flex flex-col items-start lg:text-gray-600 md:text-yellow-600"
        >
          <div className="relative flex flex-col items-end">
            <div className="absolute top-0 right-[23px] lg:right-[-32px]">
              <img
                src="https://i.ibb.co/sHqkJMP/image.png"
                alt="plus"
                width="40"
                height="40"
                className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]"
              />
            </div>
            <div className="pb-8">
              <h2 className="font-montserrat font-semibold text-4xl lg:text-8xl">
                40
              </h2>
              <p className="text-[12px] lg:text-lg w-max">Projects Finished</p>
            </div>
          </div>

          <hr className="border-t-2 border-gray-700 w-42 hidden lg:block" />

          <div className="relative flex flex-col items-end">
            <div className="absolute top-[30px] right-[12px] lg:right-[-32px]">
              <img
                src="https://i.ibb.co/sHqkJMP/image.png"
                alt="plus"
                width="40"
                height="40"
                className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]"
              />
            </div>
            <div className="pt-8">
              <h2 className="font-montserrat font-semibold text-4xl lg:text-8xl ">
                80
              </h2>
              <p className="text-[12px] lg:text-lg w-max">Video Created</p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-duration="4000"
          data-aos-easing="ease-in-sine"
          data-aos-offset="100"
        >
          <img
            src="https://i.ibb.co/vXMvzdy/logo.png"
            alt="blob"
            width="200"
            height="200"
          />
        </div>

        <div
          {...(!isSmallDevice
            ? {
                "data-aos": "fade-left",
                "data-aos-duration": "3000",
                "data-aos-offset": "100",
              }
            : {
                "data-aos": "fade-up",
                "data-aos-duration": "3000",
                "data-aos-offset": "100",
              })}
          className="flex flex-col items-end  lg:text-gray-600 md:text-yellow-600"
        >
          <div className="relative flex flex-col items-end ">
            <div className="absolute right-[-3px] lg:right-[-32px]">
              <img
                src="https://i.ibb.co/sHqkJMP/image.png"
                alt="plus"
                width="40"
                height="40"
                className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]"
              />
            </div>
            <div className="pb-8">
              <h2 className="font-montserrat font-semibold text-4xl lg:text-8xl">
                03
              </h2>
              <p className="text-[12px] lg:text-lg w-max">Companies</p>
            </div>
          </div>

          <hr className="border-t-2 border-gray-700 w-42 hidden lg:block" />

          <div className="relative flex flex-col items-end">
            <div className="absolute top-[30px] right-[12px] lg:right-[-32px]">
              <img
                src="https://i.ibb.co/sHqkJMP/image.png"
                alt="plus"
                width="40"
                height="40"
                className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]"
              />
            </div>
            <div className="pt-8">
              <h2 className="font-montserrat font-semibold text-4xl lg:text-8xl">
                75
              </h2>
              <p className="text-[12px] lg:text-lg w-max">Github Repo's</p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-zoom-in"
        data-aos-duration="3000"
        className="my-28 px-[40px]"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-[32px] items-center justify-even lg:justify-center">
          {socials.map((social, index) => (
            <div
              key={index}
              style={{ background: "rgba(217, 217, 217, 0.1)" }}
              className="cursor-pointer rounded-xl px-8 lg:px-24 py-[10px] mx-auto h-[70px] lg:h-auto flex items-center transform transition-transform hover:scale-110"
            >
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.icon}
                  alt={`Social Media ${index}`}
                  width="150"
                  height="40"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
