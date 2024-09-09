import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type User = {
  id: number;
  name: string;
};

export default function Users() {
  // Access the client from the provider
  async function getUsers({ queryKey }: any) {
    console.log(queryKey);
    const { data } = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    return data;
  }

  const { isPending, isError, data, error } = useQuery<User[], Error>({
    queryKey: ["users", 1, { hello: "World" }],
    queryFn: getUsers,
    staleTime: 1000 * 5,
  });

  if (isPending) return <p>Pending...</p>;

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {data.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}
