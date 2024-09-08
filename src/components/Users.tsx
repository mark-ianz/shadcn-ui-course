import { useQueryClient } from "@tanstack/react-query";

type Props = {};

export default function Users({}: Props) {
  // Access the client from the provider
  const useClient = useQueryClient();

  return <div>Users</div>;
}
