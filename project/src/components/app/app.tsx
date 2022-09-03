import MainScreen from '../main-screen/main-screen';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
// import {AppRoute} from '../const/const';

type AppScreenProps = {
  title: string,
  genres: string,
  date: number,
}

function App({title, genres, date}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainScreen title={title} genres={genres} date={date}/>}/>;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
