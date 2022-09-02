import MainScreen from "../main-screen/main-screen";

type AppScreenProps = {
  title: string,
  genres: string,
  date: number,
}
function App({title, genres, date}: AppScreenProps): JSX.Element {
  return <MainScreen title={title} genres={genres} date={date}/>;
}

export default App;
