import MainScreen from '../main-screen/main-screen';
import {Route, BrowserRouter, Routes, Link} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../const/const';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviesList from '../movies-list/movies-list';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import Layout from '../layout/layout';
// import {useAppSelector} from '../hooks';
import {Films} from '../../types/films';
import MoviePage from '../movie-page/movie-page';
import SmallMovieCard from '../small-movie-card/small-movie-card';


type AppScreenProps = {
  films: Films;
}

function App({films}: AppScreenProps): JSX.Element {
  const [firstFilm] = films;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={<Layout/>}>
          <Route index element={<MainScreen films = {firstFilm as Films}/>}/>;
          <Route path={AppRoute.Sign_in} element={<SignIn/>}/>
          <Route path={AppRoute.MyList} element={<MyList/>}/>
          <Route path={AppRoute.Film} element={<MoviePage films = {firstFilm as Films}/>}/>
          <Route path={AppRoute.Add_Review} element={<AddReview films = {firstFilm as Films}/>}/>
          <Route path={AppRoute.Player} element={<Player films = {firstFilm as Films} isPlaying/>}/>
          <Route path={AppRoute.Movies_list} element={<MoviesList films = {firstFilm as Films}/>}/>
          <Route path={AppRoute.Small} element={<SmallMovieCard films = {firstFilm as Films} isPlaying/>}/>
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyList/>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
