import React from 'react';
import styles from './Card.scss';

class Card extends React.Component {
    constructor(props) {
      super(props)
    }
    
  render() {
    return (
      <div className={styles.card}>
        <img src={this.props.img} className={styles.recipeImg} />
        <p className={styles.recipeName}>{this.props.name}</p>
      </div>
    )
  }
}

export default Card;
