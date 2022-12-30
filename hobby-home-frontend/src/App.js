import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <div className="row">
      <div className="row">
          <h1 className="mt-3"> Hobby to home </h1>
        </div>
        <div>
          <Link to='#!'><span className="badge bg-success">Login</span></Link>
        </div>
          <hr className="mb-3"></hr>
      </div>  
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action"> Home </Link>
              <Link to="/hobbylist" className="list-group-item list-group-item-action"> Hobby List</Link>
              <Link to="/HobbyCategories" className="list-group-item list-group-item-action"> Hobby Categories</Link>
              <Link to="/admin/Hobby/0" className="list-group-item list-group-item-action"> Add Hobby Item</Link>
              <Link to="/admin" className="list-group-item list-group-item-action"> Manage Catalogue</Link>
              <Link to="/graphql" className="list-group-item list-group-item-action"> GraphQL</Link>
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
