import React from "react";
import logo from "../assets/synovus-logo-red.svg";
import * as Fa from "react-icons/fa";
import badge from "../assets/companyBadge.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f2f2f2]">
      <div className="flex max-w-full mx-auto p-7 justify-between flex-wrap">
        <div>
          <img src={logo} alt="footer-logo" className="w-44 mb-10 lg:text-start text-center" />
        </div>

        <div className="flex flex-wrap lg:gap-36 gap-10">
          <div>
            <h1 className="lg:mb-6 mb-3 font-extrabold text-lg">Customer Service</h1>
            <p className="lg:mb-3 mb-1 lg:text-base text-sm">Contact us</p>
            <p className="lg:mb-3 mb-1 lg:text-base text-sm">Find a location</p>
            <p className="lg:mb-3 mb-1 lg:text-base text-sm">Safety and security </p>
            <p className="lg:mb-3 mb-1 lg:text-base text-sm">Website terms of use</p>
            <p className="lg:mb-3 mb-1 lg:text-base text-sm">Privacy </p>
            <p className="lg:mb-3 mb-1 lg:text-base text-sm">Accessible Banking</p>
          </div>
          <div>
            <h1 className="lg:mb-6 mb-3 font-extrabold text-lg">Synovus</h1>
            <p className="lg:mb-3 mb-1 lg:text-base text-sm">Investor Relations </p>
            <p className="lg:mb-3 mb-1 lg:text-base text-sm">Careers</p>
            <p className="lg:mb-3 mb-1 lg:text-base text-sm">Media</p>
            <p className="lg:mb-3 mb-1 lg:text-base text-sm">Community outreach</p>
            <p className="lg:mb-3 mb-1 lg:text-base text-sm">COVID-19</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex mb-6 gap-2">
              <div>
                <h1 className="font-bold text-base">Follow us:</h1>
              </div>
              <div className="flex gap-3 text-2xl text-white">
                <Fa.FaFacebook className=" bg-gray-600 rounded-full" />
                <Fa.FaInstagram className=" bg-gray-600 rounded-full" />
                <Fa.FaTwitter className=" bg-gray-600 rounded-full" />
                <Fa.FaLinkedin className=" bg-gray-600 rounded-full" />
              </div>
            </div>
            <Link
              to="https://www.greatplacetowork.com/certified-company/5003469"
              target="_blank"
            >
              <img src={badge} alt="" className="max-w-[100px] w-full" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
