import * as React from "react"
import styles from './ChefDetailsComponentStyle.module.css'
import chefHat from '../image/chefHat.jpg'

class ChefDetailsComponent extends React.Component {
  async componentDidMount() {

  }
  render() {
    let template = <div className={styles.mainContainer}>
      <div className={styles.container}><p className={styles.heading} >Chef of the week</p> </div>

      <div className={styles.chefContainer}> <div className={styles.chefImage}>
        {/* <img src={chefImage} alt="image not found" width={'100%'} height={'auto'} /> */}
      </div>
        <div className={styles.chefTextContents}>
          <div className={styles.hatLogo}>
            <img src={chefHat} alt="image not found" width={'100%'} height={'auto'} />
          </div>
          <div>
            <p className={styles.chefName}>Chef Sofia</p>
            <div><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p></div>

            <div className={styles.details}>View Details</div>
          </div>
        </div>
      </div>


    </div>
    return template;
  }
}
export default ChefDetailsComponent