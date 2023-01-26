import { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {

  return (
    <div className="w-full h-16 bg-green-700 shadow-md flex items-center px-4">
      <div className="bg-white rounded-full m-3 p-3 h-8 w-8 flex justify-center items-center shadow">
        <Link href="https://github.com/aaronmitchellvt/your-next-hike"><ion-icon name="logo-github"></ion-icon></Link>
      </div>
    </div>
  )
}

export default Footer;
