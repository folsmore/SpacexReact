import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features'
import Footer from './components/Footer';
//import Calendar from './components/Calendar'; 
// import Details from './components/Details'
import './css/style.css';
import { render } from '@testing-library/react';
import GetData from './service/GetData'


class App extends React.Component {

  getData = new GetData();

  state= {
    rocket: 'Falcon 1',
    rocketFeatures:null,
    rockets: [],
  };

  componentDidMount(){
    this.updateRocket();
  }

  updateRocket(){
    this.getData.getRocket()
    .then(data => {
      this.setState( { rockets: data.map(item => item.name)} ) //Получаем список названий ракет
      return data
    })
    .then(data => data.find(item => item.name === this.state.rocket))
    .then(rocketFeatures => {
      this.setState({ rocketFeatures });
    });
}

  render() {
    console.log(this.state)
    return (
      <>
        <Header rockets={this.state.rockets}/>
        <Main rocket={this.state.rocket}/>
        <Features/>
        <Footer/>
      </>
    );
  }
}

export default App;
