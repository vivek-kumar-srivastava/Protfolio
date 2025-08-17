
import Image from "next/image";
import Header from "./header";
import Body from "./body";
import Navbarr from "./navbar";

export default function Home() {
  return (
    <>
     <Navbarr/>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-14 ]">
      <main className="  row-start-2 items-center ">
      <Header/>
      <Body/>
      </main>
     
      <footer className="row-start-3 flex gap-[24px] items-center justify-center">

        <a
          className="flex items-center gap-2 text-gray-500 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Contact:
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/vivek-kumar-srivastava-1503b824a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.png"
            alt="Window icon"
            width={38}
            height={38}
          />
      
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/call_me_vivo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/x img.webp"
            alt="Globe icon"
            width={34}
            height={34}
          />
          
        </a>
          <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/vivek-kumar-srivastava"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/gith.png"
            alt="Window icon"
            width={50}
            height={34}
          />
      
        </a>
        <br/>
        <footer className="text-center py-4 text-gray-600 text-sm">
  © 2025 Vivek's Resume. All rights reserved.
</footer>
      </footer>
    </div>
    </>
  );
  
}
