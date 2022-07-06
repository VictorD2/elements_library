import "../../styles/globals.css";
import type { AppProps } from "next/app";
import UserLayout from "../layout/UserLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserLayout>
      <Component {...pageProps} />
    </UserLayout>
  );
}

export default MyApp;
