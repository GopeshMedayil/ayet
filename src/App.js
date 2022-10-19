import './App.css';
import Header from './components/Header/Header';
import SurveyList from './components/SurveyList/SurveyList';
import surveyData from '../src/data.json'

function App() {
  return (
    <div className="App mx-auto">
      <Header />
      <SurveyList surveys={surveyData} />
    </div>
  );
}
export default App;
