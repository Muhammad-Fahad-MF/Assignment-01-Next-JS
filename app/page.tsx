import cssStyle from "./page.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <div className={cssStyle.navDivs}>
          <Link href="http://localhost:3000">Home</Link>
        </div>
        <div className={cssStyle.navDivs} >
         <Link href="./about">About</Link>
        </div>
        <div className={cssStyle.navDivs}>
         <Link href="./contact" >Contact</Link>
        </div>
        <div className={cssStyle.navDivs}>
         <Link href="./services">Service</Link>
        </div>
      </nav>
    </div>
  );
};