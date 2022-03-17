import React from "react";

const Footer = () => {
  return (
    <footer className="text-center lg:text-left bg-[#c8d8e4] text-[#2b6777]">
      <div className="mx-6 py-10 text-center md:text-left border-t mt-5">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
              Infoware
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas non
              consequatur numquam quaerat tenetur totam fugit quidem, suscipit
              dolor? Officia sint ea soluta quas cumque.
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Products
            </h6>
            <p className="mb-4">Kitchen</p>
            <p className="mb-4">Electronics</p>
            <p className="mb-4">Fashion</p>
            <p>Beauty</p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">abc</p>
            <p className="mb-4">abc</p>
            <p className="mb-4">abc</p>
            <p>abc</p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4">
              address
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              contact@xyz.com
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              +91 1234567890
            </p>
            <p className="flex items-center justify-center md:justify-start">
              +91 1234567890
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
