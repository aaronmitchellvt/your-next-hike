import React from 'react'
import supabase from "app/supabase";
import { useRouter } from 'next/router';

const logout = () => {
  const router = useRouter();
  const logUserOut = async () => {
    const logoutResult = await supabase.auth.signOut()
    if(logoutResult.error === null) {
      router.push("/");
    }
    return;
  }

  return (
    <button onClick={logUserOut}>logout</button>
  )
}

export default logout