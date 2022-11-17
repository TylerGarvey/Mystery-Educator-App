import { Route, Switch } from "react-router-dom";
import DinoQuiz from "../../pages/DinoQuiz";
import Animal from "../../pages/Animal";

const PageSwitch = () => {
    return (
        <Switch>
            <Route exact path={'/dinoQuiz'} component={DinoQuiz} />
            <Route exact path={'/animal'} component-={Animal} />
        </Switch>
    )
}

export default PageSwitch