import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../graphql/users";

const FeedNewest = () => {
  const query = useQuery(GET_ALL_USERS);

  console.log(query);

  return (
    <div>
      <div className="">No newest people for now</div>
    </div>
  );
};

export default FeedNewest;
