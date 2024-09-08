import Users from "@/components/Users";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create the client
const queryClient = new QueryClient();

export default function TanstackQuery() {

  return (
    // Provide the queryClient 
    // (just like in context to be accessible in every component inside the provider)
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}
