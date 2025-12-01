import { type JSX } from "react";
import { Input } from "~/components/";
import { Button } from "~/components/";
import { MailIcon } from "lucide-react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const footerLinks = {
  company: {
    title: "COMPANY",
    links: ["About", "Features", "Works", "Career"],
  },
  help: {
    title: "HELP",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  faq: {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  resources: {
    title: "RESOURCES",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
};

const socialIcons = [
  { icon: FaTwitter, href: "#" },
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaGithub, href: "#" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="bg-black rounded-[20px] px-6 md:px-16 py-9 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 -mb-[90px]">
          <h2 className="font-['Integral_CF-Bold',Helvetica] font-bold text-white text-2xl md:text-[40px] leading-[35px] md:leading-[45px] text-center md:text-left max-w-full md:max-w-[550px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <div className="flex flex-col gap-3.5 w-full md:w-[350px]">
            <div className="relative">
              <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00000066]" />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-12 pl-12 pr-4 rounded-[62px] bg-white border-0"
              />
            </div>
            <Button className="w-full h-12 rounded-[62px] bg-white text-black hover:bg-gray-100">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] pt-[140px] pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-[#0000001a]">
            <div className="md:col-span-1">
              <h3 className="font-bold text-black text-2xl md:text-[33px] mb-6">
                SHOP.CO
              </h3>
              <p className="text-[#00000099] text-sm leading-[22px] mb-9">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
              <div className="flex items-center gap-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-7 h-7 rounded-full bg-white border flex items-center justify-center hover:bg-black hover:text-white"
                  >
                    <social.icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {Object.values(footerLinks).map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h4 className="font-medium text-black text-base tracking-[3px] uppercase">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-[#00000099] text-base hover:text-black"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
            <p className="text-[#00000099] text-sm text-center md:text-left">
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
              <div className="w-[46px] h-[30px] bg-white rounded-[5px] flex items-center justify-center border">
                <span className="text-[#1A1F71] font-bold text-xs italic">
                  VISA
                </span>
              </div>
              <div className="w-[46px] h-[30px] bg-white rounded-[5px] flex items-center justify-center border">
                <div className="flex">
                  <div className="w-4 h-4 rounded-full bg-[#EB001B] -mr-1.5"></div>
                  <div className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-80"></div>
                </div>
              </div>
              <div className="w-[46px] h-[30px] bg-white rounded-[5px] flex items-center justify-center border">
                <span className="text-[#003087] font-bold text-[8px]">
                  PayPal
                </span>
              </div>
              <div className="w-[46px] h-[30px] bg-black rounded-[5px] flex items-center justify-center">
                <span className="text-white font-medium text-[8px]">Pay</span>
              </div>
              <div className="w-[46px] h-[30px] bg-white rounded-[5px] flex items-center justify-center border">
                <span className="text-[#5F6368] font-medium text-[8px]">
                  G Pay
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
