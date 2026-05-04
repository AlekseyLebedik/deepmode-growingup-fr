import { Outlet } from "react-router";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "@api/apolloClient";

export default function Layout() {
  return (
    <ApolloProvider client={client}>
        <div>Inside Layout</div>
        <Outlet />
    </ApolloProvider>
  );
}
