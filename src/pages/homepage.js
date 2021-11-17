import * as React from "react"
import { restaurentData } from '../service/data-service'
import HeaderComponent from '../Component/HeaderComponent'
import FooterComponent from '../Component/FooterComponent'
import ChefDetailsComponent from '../Component/ChefDetailsComponent'
import ProductCatalog from '../Component/ProductCatalog'
import * as DataService from '../service/data-service'


class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  async componentDidMount() {
    console.log(`component mounted`)
    let data = await DataService.restaurentData();
    this.setState({
      data: data
    })
    console.log(data)
  }
  render() {
    let template = <div>
      <HeaderComponent />
      <ProductCatalog heading={"Popular Weekly Food"} contents={this.state.data.popularweek} />
      <ChefDetailsComponent />
      <ProductCatalog heading={"Explore Maxican Dishes"} contents={this.state.data.popularweek} />
      <FooterComponent />
    </div>
    return template;
  }
}
export default HomePage