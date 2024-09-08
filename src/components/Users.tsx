import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
};

export default function Users() {
  // Access the client from the provider
  async function getUsers() {
    const { data } = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    return data;
  }

  const { isPending, isError, data, error } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isPending) return <p>Pending...</p>;

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {data?.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}
