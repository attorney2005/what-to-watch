import MainScreen from '../main-screen/main-screen';
import {Route, BrowserRouter, Routes, Link} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../const/const';
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import MovieCard from "../movie-card/movie-card";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import NotFound from "../not-found/not-found";
import Layout from "../layout/layout";
// import {useAppSelector} from '../hooks';


type AppScreenProps = {
  title: string,
  genres: string,
  date: number,
}

function App({title, genres, date}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Layout/>}
        />
        <Route index element={<MainScreen title={title} genres={genres} date={date}/>}/>;
        <Route path={AppRoute.Sign_in} element={<SignIn/>}/>
        <Route path={AppRoute.MyList} element={<MyList/>}/>
        <Route path={AppRoute.Film} element={<MovieCard/>}/>
        <Route path={AppRoute.Add_Review} element={<AddReview/>}/>
        <Route path={AppRoute.Player} element={<Player/>}/>
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
