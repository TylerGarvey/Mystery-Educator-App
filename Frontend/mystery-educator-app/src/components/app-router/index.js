import { Route, Switch } from "react-router-dom";
import DinoQuiz from "../../pages/DinoQuiz";
import BoredPage from "../../pages/BoredPage";


const PageSwitch = () => {
    return (
        <Switch>
            <Route exact path={'/dinoQuiz'} component={DinoQuiz} />
            <Route exact path={'/BoredPage'} component={BoredPage} />
        </Switch>
    )
}

export default PageSwitch