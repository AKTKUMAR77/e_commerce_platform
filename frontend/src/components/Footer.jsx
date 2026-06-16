import React from "react";
import { assets } from "../assets/assets";
function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            officia corporis doloremque ullam tempora in odit tenetur, ad
            laudantium quo nam sint, quibusdam ducimus deserunt porro.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium">COMPANY</h2>
          <ul className="flex flex-col gap-1 text-gray-600 mt-5">
            <li className="">Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 7578806979</li>
            <li>231210017@nitdelhi.ac.in</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          &copy; Copyright 2026@ forever.com All Right Reseved
        </p>
      </div>
    </div>
  );
}

export default Footer;
