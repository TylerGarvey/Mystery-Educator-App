import { Route, Switch } from "react-router-dom";
import DinoQuiz from "../../pages/DinoQuiz";
import Nasa from "../../pages/Nasa"; 

const PageSwitch = () => {
    return (
        <Switch>
            <Route exact path={'/dinoQuiz'} component={DinoQuiz} />
            <Route exact path={'/NasaApi'} component-={Nasa.js} />
        </Switch>
    )
}

export default PageSwitch