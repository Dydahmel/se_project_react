
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ModalWithForm from './ModalWithForm/ModalWithForm';
import ItemModal from './ItemModal/ItemModal';
import {getWeather, parseWeatherCondition, parseWeatherTemp} from '../util/API';

import { useEffect, useState } from 'react';

function App() {

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0)
  const [weather, setWeather] = useState(0)


  function handleCreateModal(){
    setActiveModal('create')
  }

  function handleCloseModal(){
    setActiveModal("")
  }

  function hadleSelectedCard(card){
    setActiveModal('preview')
    setSelectedCard(card)
  }
  
  useEffect(() => {
    getWeather().then((data)=>{ 
      parseWeatherCondition(data)     
      const currentTemperature = parseWeatherTemp(data)
      setTemp(currentTemperature)
      const weatherCondition = parseWeatherCondition(data)
      setWeather(weatherCondition)
    })

  }, [])

  
  return (
    <div className="App">
      <Header onCreateModal = {handleCreateModal} temp={temp}/>
      <Main onSelectCard={hadleSelectedCard} currentTemperature = {temp} currentWeather = {weather}/>
      <Footer />
      {activeModal === 'create' && 
      <ModalWithForm title={'New garment'} 
      onCloseModal = {handleCloseModal}/>}
      {activeModal === 'preview' && <ItemModal selectedCard={selectedCard} 
      onCloseModal = {handleCloseModal}/>}
    </div>
  );
}

export default App;
