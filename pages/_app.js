import '../styles/globals.css'
import '../styles/custom-theme.scss'

import {Provider} from "react-redux"
import {configureStoreDev} from '../store';
import { PersistGate } from "redux-persist/integration/react";
import initialStore from "../store/Reducers/inital-state";

import { onError } from "apollo-link-error";
import { ToastProvider } from 'react-toast-notifications'
import { ApolloClient } from 'apollo-client';
import {InMemoryCache} from "apollo-boost";
import { ApolloProvider} from '@apollo/react-hooks';

function MyApp({ Component, pageProps }) {
  let storeValues = configureStoreDev(initialStore);

	const client = new ApolloClient({
    uri: process.env.GRAPHQL_URL,
		cache: new InMemoryCache(),
	});
  
  return (
    <Provider store={storeValues.store}>
      <PersistGate loading={null} persistor={storeValues.persistor}>
        <ToastProvider>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ToastProvider>
      </PersistGate>
    </Provider>
  ) 
}

export default MyApp