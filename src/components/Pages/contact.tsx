import React from "react";
import mailIcon from "../../assets/email.png";
import linkedinIcon from "../../assets/linkedin.png";

const Contact: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-3/4">
        <p className="">Get in Touch</p>
        <h3 className="text-5xl font-semibold">Contact Me</h3>
        <div className="flex border-0 md:border flex-col md:flex-row justify-center items-center rounded-2xl border-black p-1">
          <div className="flex m-3 items-center border md:border-0 border-black rounded-2xl">
            <img src={mailIcon} alt="Email Icon" className="w-12 h-12 m-2" />
            <a className="text-xl m-2">de.sharma993@gmail.com</a>
          </div>
          <div className="flex m-3 items-center">
            <img
              src={linkedinIcon}
              alt="LinkedIn Icon"
              className="w-10 h-10 m-2"
            />
            <a className="text-xl m-2">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
