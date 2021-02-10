import '../styles/globals.css'
import '../styles/custom-theme.scss'

import {Provider} from "react-redux"
import {configureStoreDev} from '../store';
import { PersistGate } from "redux-persist/integration/react";
import initialStore from "../store/Reducers/inital-state";

import { ToastProvider} from 'react-toast-notifications'
import { ApolloClient } from 'apollo-client';
import {InMemoryCache} from "apollo-boost";
import { ApolloProvider} from '@apollo/react-hooks';

import { HttpLink} from 'apollo-link-http'
import { DefaultToastContainer } from 'react-toast-notifications';

const MyCustomToastContainer = props => (
  <DefaultToastContainer {...props} style={{ zIndex: 9999 }} />
);


function MyApp({ Component, pageProps }) {
  let storeValues = configureStoreDev(initialStore);
  
	const client = new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode: typeof window === "undefined", // set to true for SSR
    link: new HttpLink({
      uri: process.env.GRAPHQL_URL
    }),
	});
  
  return (
    <Provider store={storeValues.store}>
      <PersistGate loading={null} persistor={storeValues.persistor}>
        <ToastProvider placement="top-left" components={{ ToastContainer: MyCustomToastContainer }}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ToastProvider>
      </PersistGate>
    </Provider>
  ) 
}

export default MyApp
