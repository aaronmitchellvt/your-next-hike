import DataState from "@/components/DataState";
import Layout from "@/components/Layout";
import useGetUserSelectedLocation from "@/hooks/useGetUserSelectedLocation";
import { useEffect, useState } from "react";


export default function Home() {

  const [location, setLocation] = useState<string>("");
  const userSelectedLocation = useGetUserSelectedLocation();
  const selectedLocationIsLoading = userSelectedLocation.isLoading || userSelectedLocation.isFetching;
  const selectedLocationIsError = userSelectedLocation.isError;
  const selectedLocationIsValid = !userSelectedLocation.isError && !selectedLocationIsLoading && userSelectedLocation.data![0].location !== null && userSelectedLocation.data![0].location !== undefined

  useEffect(() => {
    if(!selectedLocationIsLoading && !selectedLocationIsError && selectedLocationIsValid) {
      setLocation(userSelectedLocation.data![0].location);
    }
  }, [userSelectedLocation])

  return (
    <>
      <Layout
        pageContent={
          <>
            <div className="text-black mt-16">Status: {userSelectedLocation.status}</div>
            <DataState
              isFetching={selectedLocationIsLoading}
              isError={selectedLocationIsError}
              isValidData={false}
              //Show 3 hiking cards and set location bar to state
              fetching={
                <>
                  <h1>Loading...</h1>
                </>
              }
              //A user's information could not fetched for some reason, user data request comes back bad
              error={
                <>
                  <h1>
                    Sorry, there was an error on our end. Please Try again
                    Later.
                  </h1>
                </>
              }
              //Display that the user needs to have a selected location
              invalid={
                <form
                  // onSubmit={() => setSelectedLocation(userResponse, location)}
                >
                  <label>
                    Choose a location that you want to explore
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </label>
                  <button type="submit">Submit</button>
                </form>
              }
              // Display the 3 hiking cards
              valid={<h1>{location}</h1>}
            ></DataState>
          </>
        }
      ></Layout>
    </>
  );
}

  // const userResponse = useGetCurrentUser();
  // console.log("userResponse: ", userResponse);

  //I think I'll need to make a get zip code call?

  //Get user data, which will include a zip code. If no zip code is present,
  //then show that no zip code is present, and highlight the fact that they can
  //change their zipcode near the navbar section

  //A user will need to be able to change their zip code on the home page

  //Query the selected locations

  // const getSelectedLocation = async () => {
  //   let { data, error } = await supabase
  //     .from("Selected Locations")
  //     .select(userResponse.data?.user?.id);

  //   if (data) {
  //     console.log("selectedLocationsData: ", data);
  //   } else {
  //     console.log("selectedLocationsError: ", error);
  //   }
  // };


  // const setSelectedLocation = async (
  //   user: UseQueryResult<{ user: User } | { user: null }, unknown>,
  //   location: string
  // ) => {
  //   if (!user) {
  //     console.log("Must be signed in to create a selected location");
  //     return;
  //   } else {
  //     const { data, error } = await supabase
  //       .from("Selected Locations")
  //       .insert([{ location: location, user: user.data?.user?.id }]);
  //     if (data) {
  //       console.log("data from insert: ", data);
  //       return data;
  //     } else {
  //       console.log("error from insert: ", error);
  //       return error;
  //     }
  //   }
  // };
