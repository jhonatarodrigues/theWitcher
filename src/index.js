import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import * as serviceWorker from './serviceWorker';

import Routes from './main/routes';



const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

class App extends React.Component {
  componentDidMount() {
    this.props.hideLoader();
    setTimeout(() => {
      loader.classList.add('loader--remove');
    }, 600);
  }
  
  render() {   
    return (
      <Routes />
    ); 
  }
}

setTimeout(() => 
  ReactDOM.render(
    <App
      hideLoader={hideLoader}
      showLoader={showLoader} 
      />,
    document.getElementById('root')
  )
, 2500);



//ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




