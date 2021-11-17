import * as React from "react"
import styles from './FooterComponentStyle.module.css';
import chefLogo from '../image/chefLogo.png'

class FooterComponent extends React.Component {
  render() {
    let template = <div>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <img src={chefLogo} alt="image not found" width={'100%'} height={'auto'} />

        </div>
      </div>
      <div className={styles.footer}>
        <p>All rights are reserved @2021 Local Grub| Designed by Cart Greek</p>
      </div>

    </div>
    return template;
  }
}
export default FooterComponent

