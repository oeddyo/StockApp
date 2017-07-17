import React from "react";
import { Scene, Router } from 'react-native-router-flux';
import Stocks from "./pages/stocks";
import StocksEdit from "./pages/stocksEdit";
import AddStocks from "./pages/addStocks";
/*
const RenderHeader = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Image source={{ uri: "http://www.moneychoice.org/wp-content/uploads/2015/05/coins_on_chart.jpg" }} style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.1)" }} />
    </View>
  );
};
*/
/*
const RenderAddButton = () => {
  return (
    <TouchableHighlight onPress={() => { Actions.addStocks() }} style={{ width: 50, height: 50, backgroundColor: "#000000" }}>
      <Image
        source={{ uri: "https://cdn3.iconfinder.com/data/icons/ui-elements-heavy/100/UI_Heavy_map_pin_add-512.png" }}
        style={{ backgroundColor: "rgba(0,0,0,0)", width: 50, height: 50 }}
      />
    </TouchableHighlight>
  )
}
*/
/*
//renderTitle={() => { return <RenderHeader /> }}
renderRightButton={() => { return <RenderAddButton /> }}
navigationBarBackgroundImage={{
  uri: "http://www.moneychoice.org/wp-content/uploads/2015/05/coins_on_chart.jpg",
  height: 100, width: 100
}}
*/
class RouterComponent extends React.Component {
    render() {
        return React.createElement(Router, null,
            React.createElement(Scene, { key: "root" },
                React.createElement(Scene, { key: "stocks", component: Stocks, title: "Stocks", hideNavBar: true, initial: true }),
                React.createElement(Scene, { key: "editStocks", component: StocksEdit, title: "EditStocks", hideNavBar: true }),
                React.createElement(Scene, { key: "addStocks", component: AddStocks, title: "EditStocks", hideNavBar: true })));
    }
}
export default RouterComponent;
//# sourceMappingURL=scenes.js.map