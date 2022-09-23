import {useState} from 'react';
import TabTitle from '../film-tab-title/film-tab-title';


type FilmTubsProps = {
  children: JSX.Element[];
}

function FilmTubs(children: FilmTubsProps): JSX.Element {
  const [selectedTab, setSelectedTab] = useState(0);
return (
<div className="film-card__desc">
  <nav className="film-nav film-card__nav">
    <ul className="film-nav__list">
      {children?.map((tab, tabIndex) => (
        <TabTitle
          key={tab.props.title}
          title={tab.props.title}
          tabIndex={tabIndex}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      ))}
    </ul>
  </nav>
  </div>
)
  }

  export default FilmTubs;
