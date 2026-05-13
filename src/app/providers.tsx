import { PropsWithChildren } from "react";
import { ApolloProvider } from "@apollo/client/react";
import { Provider } from "react-redux";

import { store } from "./store";
import { client } from "./entrypoints/apolloClient";

export function HOCProviders({ children }: PropsWithChildren) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>{children}</Provider>
    </ApolloProvider>
  );
}
