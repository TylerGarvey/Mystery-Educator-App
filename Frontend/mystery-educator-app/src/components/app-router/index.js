import { Route, Switch } from "react-router-dom";
import DinoQuiz from "../../pages/DinoQuiz";


const PageSwitch = () => {
    return (
        <Switch>
                <Route exact path={'/dinoQuiz'} component={DinoQuiz} />
        </Switch>
    )
}

export default PageSwitch