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
          <img src={logo} alt="footer-logo" className="w-44" />
        </div>

        <div className="flex lg:gap-36 gap-24">
          <div>
            <h1 className="mb-6 font-extrabold text-lg">Customer Service</h1>
            <p className="mb-3">Contact us</p>
            <p className="mb-3">Find a location</p>
            <p className="mb-3">Safety and security </p>
            <p className="mb-3">Website terms of use</p>
            <p className="mb-3">Privacy </p>
            <p className="mb-3">Accessible Banking</p>
          </div>
          <div>
            <h1 className="mb-6 font-extrabold text-lg">Synovus</h1>
            <p className="mb-3">Investor Relations </p>
            <p className="mb-3">Careers</p>
            <p className="mb-3">Media</p>
            <p className="mb-3">Community outreach</p>
            <p className="mb-3">COVID-19</p>
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
