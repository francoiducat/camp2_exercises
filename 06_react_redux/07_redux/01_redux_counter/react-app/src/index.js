import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { store } from './store.js';


// Cette fonction encapsule le composant dans un "provider".
// Ce provider reçoit en attribut un "store" permettant à toutes les
// fonctions et les props de ce store d'etre dispos partout dans l'appli.
const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);


// rendu final dans la page "html"
render(
  <App />,
  document.getElementById('root')
);
