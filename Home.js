import React from 'react';
import Card from '../Card/Card';
import styles from './Home.scss';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      dishes: []
    }
  }
  
  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=indian')
    .then(response => {
      console.log("response: ", response);
      this.setState({
        dishes: response.data.meals
      })
    })
    .catch(error => {
      console.log("error: ", error);
    })
  }

  render() {
    console.log("dishes: ", this.state.dishes);
    let recipes = null;

    if(this.state.dishes.length > 0) {
      recipes = this.state.dishes.map(item => {
        console.log(item);
        return(
          <Card
            img={item.strMealThumb}
            name={item.strMeal}
            key={item.idMeal}
          />
        )
      })
    }
    return (
      <div className={styles.home}>
        <div className={styles.header}>iFoodie</div>
        <div className={styles.foodContainer}>
          <p className={styles.sectionTitle}>Recipes</p>
          <div className={styles.recipes}>
            { recipes }
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
