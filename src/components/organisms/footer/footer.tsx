"use client";

import { Cta } from "@/components/atoms/Cta";
import React from "react";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { Logo } from "@/components/atoms/logo";
import { Container } from "@/components/molecules/container";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const footerLinks = {
  shop: ["Nuovi Arrivi", "Uomo", "Donna", "Accessori"],
  support: ["Contatti", "FAQ", "Resi & Rimborsi", "Spedizioni"],
};

const footerSections = [
  { title: "Shop", links: footerLinks.shop },
  { title: "Assistenza", links: footerLinks.support },
];

const socialIcons = [MdFacebook, IoLogoInstagram, IoLogoTwitter];

export default function Footer() {
  const handleClick = () => {
    alert(`Link fittizio: solo a scopo dimostrativo!`);
  };

  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) return null;

  return (
    <footer data-name="footer">
      <Container>
        <Logo isFooter />

        <div className="mt-[1.5rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[2rem]">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg text-orange font-semibold mb-[1rem]">
                {section.title}
              </h3>
              <ul className="space-y-[0.5rem] text-gray-300">
                {section.links.map((item) => (
                  <li key={item}>
                    <Cta variant="link" size="link" onClick={handleClick}>
                      {item}
                    </Cta>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg text-orange font-semibold mb-[1rem]">
              Seguici
            </h3>
            <div className="flex gap-[1rem]">
              {socialIcons.map((icon, i) => {
                const Comp = icon;
                return (
                  <Cta
                    variant="icon"
                    size="icon"
                    key={i}
                    onClick={() => handleClick()}
                  >
                    <Comp style={{ scale: 1.5 }} />
                  </Cta>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-[3rem] border-t py-[2rem] text-center text-primary text-sm">
          <span>
            © 2025 Sample Store E-commerce. Made by Federica Schillaci.
          </span>
        </div>
      </Container>
    </footer>
  );
}
