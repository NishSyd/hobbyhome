import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Alert from './components/Alert';

function App() {
  const [jwtToken, setJwtToken] = useState("");
  const [alertMessage, setAlertMessage]=useState("");
  const [alertClassName, setAlertClassName]=useState("d-none");

  const navigate = useNavigate();

  const logOut = () => {
    setJwtToken("");
  }
  return (
    <div className="container">
      <div className="row">
      <div className="row">
          <h1 className="mt-3"> Hobby to home </h1>
        </div>
        <div>
         {jwtToken === ""
            ?<Link to='/login'><span className="badge bg-success">Login</span></Link>
            :<a href="#!" onClick={logOut}>
              <span className="badge bg-success">Logout</span>
            </a>
          } 
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
              
              {jwtToken !== "" &&
                <>
                  <Link to="/admin/Hobby/0" className="list-group-item list-group-item-action"> Add Hobby Item</Link>
                  <Link to="/admin" className="list-group-item list-group-item-action"> Manage Catalogue</Link>
                  <Link to="/graphql" className="list-group-item list-group-item-action"> GraphQL</Link>
                </>
              }
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Alert message={alertMessage} className={alertClassName} />    
          <Outlet context={{
            jwtToken, setJwtToken,setAlertClassName,setAlertMessage
          }} />
        </div>
      </div>
    </div>
  );
}

export default App;
