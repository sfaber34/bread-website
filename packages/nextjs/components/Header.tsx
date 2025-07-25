"use client";

import Image from "next/image";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

/**
 * Site header
 */
export const Header = () => {
  return (
    <header className="container mx-auto border-l border-r border-black">
      <div className="container z-10 p-6 lg:p-8 flex justify-between items-center">
        <div className="mix-blend-difference">
          <Image className="w-40 md:w-auto invert" src="client-logo.svg" alt="logo" width={260} height={78} />
        </div>
        <div>
          <RainbowKitCustomConnectButton />
        </div>
      </div>
    </header>
  );
};
