import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "sonner";

const queryClient = new QueryClient();
function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster richColors closeButton position="top-right" expand={true} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
