import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div>
      404 Page. <Link to={'/'}>Click to return main page</Link>
    </div>
  );
}

export default NotFound;
