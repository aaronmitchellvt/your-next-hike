import Link from "next/link";
import useGetCurrentUser from "@/hooks/useAuthenticatedUser";
import DataState from "../DataState";
import React from "react";
import logUserOut from "@/hooks/useLogOutUser";
import { useRouter } from "next/router";

const NavBar = () => {
  
  const userResponse = useGetCurrentUser();
  const userData = userResponse.data?.user;
  const router = useRouter()
  const onUserLogOut = async () => {
    if((await logUserOut()).error === null) {
      router.push("/")
    }
  }

  return (
    <div className="w-full fixed top-0 left-0 h-18 bg-white">
      <div className="flex items-center justify-between py-4 px-10">
        <div className="text-green-700 font-bold text-lg flex-items-center">
          <Link href="/">
            <span className="pr-2">
              <ion-icon name="leaf-outline"></ion-icon>
            </span>
            Your NEXT Hike
          </Link>
        </div>

        <ul className="text-white flex items-center">
          <DataState
            isFetching={userResponse.isFetching || userResponse.isLoading}
            isError={userData === null || userResponse.isError || userResponse.isLoadingError}
            isValidData={userData !== null && !userResponse.isLoading}
            fetching={<></>}
            error={
              <>
                <li className="ml-6 md:text-lg text-md">
                  <button className="bg-white text-green-700 hover:bg-gray-200 hover:text-green-900 rounded p-2 font-bold">
                    <Link href="/auth/login">Sign In</Link>
                  </button>
                </li>
                <li className="ml-6 md:text-lg text-md">
                  <button className="bg-green-700 text-white hover:bg-green-900 rounded p-2 font-bold">
                    <Link href="/auth/signup">Create Account</Link>
                  </button>
                </li>
              </>
            }
            valid={
              <>
                <li className="ml-6 md:text-lg text-md">
                  <button onClick={() => onUserLogOut()} className="bg-white text-green-700 hover:bg-gray-200 hover:text-green-900 rounded p-2 font-bold">
                    Logout
                  </button>
                </li>
              </>
            }
          ></DataState>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
