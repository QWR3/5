import './App.css';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import OllUsers from "./components/OllUsers";

function App() {
    return (
        <Router>
            <div>
                <div>
                    <Link to={"/users"}><button>users</button></Link>

                </div>
                <div>
                    <Link to={"/"}><button>home</button></Link>

                </div>
                <div>
                    <Switch>
                        <Route path={"/users"}>
                            <OllUsers/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>

    );
}
export default App;


