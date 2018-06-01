import React from 'react';
import ReactDOM from 'react-dom';
import { postUser } from './util/session_api_uls';
import configureStore from './store/store';
import Root from './components/root';
import { createNewSession } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.postUser = postUser;

  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.dispatch = store.dispatch;
  window.login = createNewSession;

  ReactDOM.render(<Root store={store}/>, root);

});
