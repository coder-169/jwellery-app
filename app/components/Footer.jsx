import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "../../public/assets/footerLogo.png";
import footerLogo2 from "../../public/assets/footerLogo2.svg";

const Footer = () => {
  return (
    <footer className="h-screen w-full px-8 pt-10">
      <div className="bg-gray-100 w-full h-full overflow-hidden relative rounded-tr-3xl rounded-tl-3xl">
        <div className="w-full h-full flex py-8 px-16 lg:p-20 sm:py-20 sm:px-6 lg:gap-32 flex-col sm:flex-row lg:flex-row">
          <div className="flex flex-col">
            <div className="flex gap-5 sm:gap-16 flex-col sm:flex-row lg:flex-row">
              <div className="text-sm flex flex-col gap-4 uppercase font-semibold">
                <Link href="https://nr9mx8metr.larksuite.com/docx/G7yOdFneNow6MDxG3zauEAmos6f?from=from_copylink">
                  PRIVACY POLICY
                </Link>
                <Link href="https://nr9mx8metr.larksuite.com/docx/RFstdI5CMoEqHkxNeW6u5fIHspf?from=from_copylink">
                  TERMS OF USE
                </Link>
              </div>
              <div className="flex text-sm flex-col gap-4 uppercase font-semibold">
                <a href="mailto:hello@diamondlabs.io" target="_blank">
                  EMAIL US
                </a>
                <a
                  href="https://www.linkedin.com/company/diamondlabs-io/"
                  target="_blank"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
            <div className="mt-16 lg:w-auto sm:w-auto md:w-auto w-20">
              <Image src={footerLogo2} width={120} height={100} />
            </div>
          </div>
          <div className="lg:w-3/5 sm:w-2/3 sm:px-16 w-full text-sm lg:text-xl py-10 mx-auto text-zinc-600">
            <p className="font-semibold">
              DIAMOND LABORATORIES PTE. LTD. IS REGISTERED ON THE REPUBLIC OF
              SINGAPORE&apos;S REGISTRAR OF REGULATED DEALERS UNDER THE LICENSE
              NUMBER: PS20220002552 AND UNDER THE PRECIOUS STONES AND PRECIOUS
              METALS
            </p>
            <p className="mt-5 font-semibold">
              (PREVENTION OF MONEY LAUNDERING AND TERRORISM FINANCING) ACT 2019
            </p>
          </div>
        </div>
        <div className="w-full absolute bottom-6">
          <h2 className="text-right pr-8">&copy;{new Date().getFullYear()}</h2>
          <div className="px-5">
            <Image src={footerLogo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
