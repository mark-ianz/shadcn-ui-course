import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { User } from "../components/Users";

export default function ViewUser() {
  const { id } = useParams<{ id: string }>();

  async function fetchUser(): Promise<User> {
    const { data } = await axios.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    return data;
  }

  const { data, isLoading, isError, error } = useQuery<User, Error>({
    queryKey: ["user", id],
    queryFn: fetchUser,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <p>{data?.name}</p>
    </div>
  );
}
