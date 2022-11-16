import { Route, Switch } from "react-router-dom";
import DinoQuiz from "../../pages/DinoQuiz";
import HomePage from '../../pages/HomePage';
import aboutUs from '../../pages/aboutUs';
import Contact from '../../pages/Contact';
import './index.css'
import BoredPage from "../../pages/BoredPage";


const PageSwitch = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={HomePage} />
      <Route exact path={'/aboutUs'} component={aboutUs} />
      <Route exact path={'/contact'} component={Contact} />
      <Route exact path={'/dinoQuiz'} component={DinoQuiz} />
    </Switch>
  )
}

export default PageSwitch
