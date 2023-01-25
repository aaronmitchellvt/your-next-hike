import useCreateUser from "@/hooks/useCreateUser";
import { create } from "domain";
import { useRouter } from "next/router";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [userPayload, setUserPayload] = useState<User>({
    email: "",
    password: "",
    name: "",
    userName: "",
  });

  const handleChange = (e: any) => {
    setUserPayload((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const createUserMutation = useCreateUser(userPayload);
  console.log("createUserMutation: ", createUserMutation);
  if (createUserMutation.isSuccess) {
    router.push('/');
  }

  if(createUserMutation.isError) {
    return(
      <h1>Sorry, there was an error</h1>
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserMutation.mutate();
    console.log("Submit Attempt: ", userPayload.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Make an Account</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-indigo-600"
          type="text"
          id="name"
          name="name"
          value={userPayload.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-indigo-600"
          type="email"
          id="email"
          name="email"
          value={userPayload.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="userName">User Name</label>
        <input
          className="border-2 border-indigo-600"
          type="text"
          id="userName"
          name="userName"
          value={userPayload.userName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="border-2 border-indigo-600"
          type="password"
          id="password"
          name="password"
          value={userPayload.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{createUserMutation.isLoading ? <p>Creating..</p> : <p>Sign Up</p>}</button>
    </form>
  );
};

export default Signup;

export interface User {
  email: string;
  password: string;
  name: string;
  userName: string;
}
