import Link from "next/link";
import useGetCurrentUser from "@/hooks/useAuthenticatedUser";
import DataState from "../DataState";
import React from "react";

const NavBar = () => {
  
  const user = useGetCurrentUser();

  return (
    <div className="w-full fixed top-0 left-0">
      <div className="flex items-center justify-between bg-white py-4 px-10">
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
            isFetching={user.isFetching || user.isLoading}
            isError={user.data?.user === null || user.isError || user.isLoadingError}
            isValidData={user.data?.user !== null && !user.isLoading}
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
                  <button className="bg-white text-green-700 hover:bg-gray-200 hover:text-green-900 rounded p-2 font-bold">
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
