import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NoMatch from './components/NoMatch';
import NavComponent from './components/NavComponent';
import Content from './Content';
import AdminLogin from './components/AdminLogin';
import AddData from './AddData';
import EditData from './EditData';
import firebase from './util/firebase';

const App = ()=> {
  const DB = firebase.database().ref();
  const [realData, setRealData] = useState({});


  useEffect(() => {
    DB.child('content').on('value', snapshot => {
      if (snapshot.val() != null) {
        setRealData({
          ...snapshot.val(),
        })
      }
    })
  }, []);
  sessionStorage.setItem('cType', "All")
  return (
    <>
      <Router>
        <NavComponent />
        <Container>
        <Switch>
          <Route exact path='/' ><Home realData={realData}/></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/content/:id' children={<Content realData={realData}/>}></Route>
          <Route path='/editdata/:id' children={<EditData realData={realData}/>}></Route>
          <Route path='/adddata' children={<AddData realData={realData}/>}></Route>
          <Route path='/adminlogin' children={<AdminLogin />}></Route>
          <Route path='*' component={NoMatch}></Route>
        </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
