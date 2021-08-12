import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import links from '../data/footerLinks'
import ExternalLink from "./utilities/ExternalLink";

const Footer = () => {
  let today = new Date();
  return (
    <footer className="shadow-inner bottom-0 pb-8">
      <div className="grid grid-rows-2 text-center">
        <div className='m-8'>Copyright &copy; Kamal Sacranie {String(today.getFullYear())}</div>
        <div className="grid grid-cols-3 py-3">
          <ExternalLink link={links.github} content={<AiFillGithub className="h-10 w-10 m-auto" />} />
          <ExternalLink link={links.linkedin} content={<AiFillLinkedin className="h-10 w-10 m-auto" />} />
          <ExternalLink link={links.email} content={<AiOutlineMail className="h-10 w-10 m-auto" />} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
