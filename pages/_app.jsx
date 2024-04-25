import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>)
}

export default MyApp
