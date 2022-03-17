import { Amplify } from 'aws-amplify';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <h2> Is there anything that shows up?</h2>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}