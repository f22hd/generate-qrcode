import React from "react";

const links = [
  {
    url: "http://allebdi.me/tech-products",
    text: "منتجات أخرى",
  },
  {
    url: "http://allebdi.me",
    text: "المدونة",
  },
  {
    url: "https://github.com/f22hd/generate-qrcode",
    text: "Github",
  },
];

function Footer() {
  return (
    <footer className="text-center mt-5">
      <ul>
        {links.map(({ url, text }, index) => {
          return (
            <li className="inline-block text-gray-700 px-2" key={index}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
                href={url}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
