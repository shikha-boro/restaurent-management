import * as React from "react"
import styles from './HeaderComponentStyle.module.css';
import chefLogo from '../image/chefLogo.png'
class HeaderComponent extends React.Component {
  render() {
    let template = <div>
      <div className={styles.header}>
        <p className={styles.heading}>Free Delivery on all  <span className={styles.orders}>orders over  $25</span></p>
      </div>
      <div className={styles.logoHeader}>
        <div className={styles.logo}>
          <img src={chefLogo} alt="image not found" width={'100%'} height={'auto'} />

        </div>
        <div className={styles.headerRight}>
          <button className={styles.logoHeading}>Become a chef</button>
          <div className={styles.login}><button className={styles.loginButton} >login</button></div>

        </div>
      </div>
      <div></div>
    </div>
    return template;
  }
}
export default HeaderComponent

