import React from 'react';
import { connect } from 'react-redux';

// déclaration de mon composant dans une classe (et non pas une fonction) car
// la classe contient des méthodes.

class Counter extends React.Component {

  // ces fonctions appellent la fonction 'dispatch' de redux. En lui passant en
  // parametre un objet. On n'est pas libre de mettre ce qu'on veut dans cet
  // objet. Il faut obligatoirement la clé "type" (et que cette clé).
  // On est libre de mettre ce qu'on veut dans la valeur associée à la clé.
  // Ici on met "INCREMENT".  C'est cette valeur de clé qui sera comparée
  // dans le "store.js" pour définr l'action à faire.
  // Ces fonctions sont en "fat arrow" pour pouvoir exploiter le "this".

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  reset = () => {
    this.props.dispatch({ type: 'RESET' });
  }


  // le rendu : ne posséde que des aspects graphiques et des handlers.
  // AUCUNE logique métier ici.
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div>
          step : <input  value={this.props.step} readOnly />
        </div>
        <div>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    )
  }
}

// Cette fonction "mapStateToProps" est une fonction "redux".
// Elle permet au composant de faire son marché dans la liste des attributs
// disponibles dans le "state" du composant.
// Ici le composant récupère juste la valeur "state.count" qu'il met dans la
// clé "count". Ainsi "count" se retrouve dans "this.props".
// Et à partir du moment où le this.props est modifié alors le rendu est mis à jour.
function mapStateToProps(state) {
  return {
    count: state.count,
    step: state.step
  };
}

// le "connect(mapStateToProps)" est une fonction "redux". Qui renvoit une autre
// fonction. A cette autre fonction on lui passe l'appli (ici 'Counter').
// demander Vincent plus de détails.
export default connect(mapStateToProps)(Counter);
