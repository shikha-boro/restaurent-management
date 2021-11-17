import * as React from "react"
import styles from './ProductCatelogStyle.module.css'
import dish from '../image/dish.png'
import * as DataService from '../service/data-service'

class ProductCatelog extends React.Component {
  /*  constructor(prop) {
     super(prop);
     console.log(prop)
   } */
  render() {
    let template = <div>
      <div className={styles.heading}>{this.props.heading}</div>
      <div className={styles.products}>
        {this.props.contents && this.props.contents.map(eachChef => {
          return eachChef.dish_masters.map(eachDish => {
            return <div className={styles.dishCard}>
              <div className={styles.dishImage} style={{
                backgroundImage: `url("${DataService.baseUrl}/${eachDish.dishImage}")`, backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>hello</div>
              <div className={styles.dishName}>{eachDish.dishname}</div>
              <div className={styles.chefName}>{eachChef.chefname}</div>
            </div>
          })
        })}
      </div>
    </div >
    return template;
  }
}
export default ProductCatelog


