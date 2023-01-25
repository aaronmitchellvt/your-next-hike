import { useMutation, useQueryClient } from "react-query";
import supabase from "app/supabase";
import { User } from "@/pages/auth/signup";

/* A func to create a user if the user does noes exist yet
@param user, the attempted created user's payload
*/
const createUser = async (user: User) => {
  //check if user exist
  const { data: userWithUsername } = await supabase
  .from('users')
  .select('*')
  .eq('username', user.name)
  .single()

  if (userWithUsername) {
    throw new Error('This user already exists');
  }
  const { data, error: signUpError } = await supabase.auth.signUp({
    email: user.email,
    password: user.password
  })
  if(signUpError) {
    throw signUpError
  }
  return data
}

export default function useCreateUser(user: User) {
  return useMutation(() => createUser(user), {
    onSuccess: async(data) => {
      const { data: insertData, error: insertError } = await supabase
        .from('users')
        .insert({
          name: user.name,
          username: user.userName,
          email: user.password,
          password: user.password,
          id: data.user!.id
        })

      if(insertError) {
        throw insertError
      }

      return insertData
    }
  })
}