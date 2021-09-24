import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home/Home'
import Twittes from '../pages/Twittes/Twittes'
function Routes() {
    
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/twittes" exact component={Twittes} />
        </Switch>
    );
}

export default Routes;

