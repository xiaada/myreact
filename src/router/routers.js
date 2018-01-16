import  React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import container from '../container/index';

const AppRouter = (
    <Router>
        <div>
            <Route path="/" component={container}/>
        </div>
    </Router>
);
export default AppRouter


