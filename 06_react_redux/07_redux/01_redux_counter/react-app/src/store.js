import { createStore } from 'redux';

const initialState = {
  count: 0,
  step: 2
};


// la fonction "reducer" de redux.
// le parametre "state" : l'objet contenant les props du composant.
// Par défaut si pas connue (à l'init par exemple) , accepte une valeur
// par défaut.
// Le parametre "action" : objet provenant du parametre de la fonction "dispatch"
// appelé dans le composant. Contient nécessairement une clé "type".

// C'est ici qu'on met la logique métier du composant.
// Selon l'action à faire, renvoi un objet à "redux".
// Ce qui met à jour automatiquement les valeurs du composant.
// Ces valeurs peuvent ensuite être récupérées dans la fonction
// "mapStateToProps" du composant.

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
    console.log(state.step);
      return {
        ...state,
        count: state.count + state.step
        // count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - state.step
      };
    case 'RESET':
      return {
        ...state,
        count: 0
      };

    default:
      return state;
  }
}

// declaration du "store" qui prend en paramétre toutes les declarations
// de fonctions de notre logique métier. Et exportation.
export const store = createStore(reducer);
