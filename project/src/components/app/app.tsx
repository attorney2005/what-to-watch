import {useSelector} from 'react-redux';
import MainScreen from '../main-screen/main-screen';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../const/const';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviesList from '../movies-list/movies-list';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import Layout from '../layout/layout';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import MoviePage from '../movie-page/movie-page';
import {getIsDataLoaded} from '../../store/catalog-films/selectors';
import {getAuthorizationStatus} from '../../store/user-authorization/selectores';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {isCheckedAuth} from '../../utils/user';


function App(): JSX.Element {
  const isDataLoaded = useSelector(getIsDataLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  console.log(isDataLoaded)

  // if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
  //   return <LoadingScreen/>;
  // }

  return (
    <Routes>
      <Route
        path={'/'}
        element={<Layout/>}
      >
        <Route index element={<MainScreen/>}/>;
        <Route path={AppRoute.Sign_in} element={<SignIn/>}/>
        <Route path={AppRoute.MyList} element={<MyList/>}/>
        <Route path={AppRoute.Film} element={<MoviePage/>}/>
        <Route path={AppRoute.Add_Review} element={<AddReview/>}/>
        <Route path={AppRoute.Player} element={<Player isPlaying/>}/>
        <Route path={AppRoute.Movies_list} element={<MoviesList/>}/>
        <Route path={AppRoute.Small} element={<SmallMovieCard isPlaying/>}/>
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus}>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
