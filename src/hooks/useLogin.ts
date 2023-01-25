import { useMutation } from 'react-query'
import supabase from "app/supabase";
import { LoginUserPayload } from '@/pages/auth/login';

const login = async (userPayload: LoginUserPayload) => {
  const { email, password } = userPayload;
  const { data, error } = await supabase.auth.signInWithPassword({
    email, 
    password
  })

  if(error) {
    throw new Error(error.message)
  }

  return data
}

export default function useLogin(userPayload: LoginUserPayload) {
  return useMutation('login', () => login(userPayload))
}