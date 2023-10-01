import { useSelector } from "react-redux";


const FetchUsersData = () => {
  const selectedData =  useSelector((state) => {
   return  state.user
  })
  const { users, isLoading, error } = selectedData;
  console.log(users, error)
    return (
        isLoading ? <p>Loading...</p> : <p>Error...</p>
      
);
}

export default FetchUsersData;