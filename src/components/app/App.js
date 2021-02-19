import { Route } from 'react-router-dom';
import './App.css';
import Title from '../Title/title';
import stepOneConteiner from '../stepOne/stepOneConteiner';
import stepTwoContainer from '../stepTwo/stepTwoContainer';
import stepThreeContainer from '../stepThree/stepThreeContainer';
import stepFourContainer from '../stepFour/stepFourContainer';
import resultContainer from '../Result/resultContainer';
import errorContainer from '../Error/errorContainer';


const App = () => {
  return (
    <div className='wrapper'>
      <Title/>
      <div>
        <Route
          exact path='/'
          component={stepOneConteiner}/>
        <Route
          path='/height'
          component={stepTwoContainer}/>
        <Route
          path='/material'
          component={stepThreeContainer}/>
        <Route
          path='/sizes'
          component={stepFourContainer}/>
        <Route
          path='/result'
          component={resultContainer}/>
        <Route
          path='/error'
          component={errorContainer}/>
      </div>
    </div>
  );
}

export default App;
