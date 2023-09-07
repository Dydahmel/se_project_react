
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ModalWithForm from './ModalWithForm/ModalWithForm';
import ItemModal from './ItemModal/ItemModal';
import {getWeather, 
  parseWeatherCondition, 
  parseWeatherTemp, 
  parseDaytimeCondition,
  parseLocation
} from '../util/API';

import { useEffect, useState } from 'react';

function App() {

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState(0);
  const [dayLight, setDayLight] = useState({});
  const [location, setLocation] = useState("")


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

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('modal')) {
      handleCloseModal();
    }
  };

  // Function to handle ESC key press
  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    // Attach event listeners when the component mounts
    document.addEventListener('keydown', handleEscKey);
    return () => {
      // Remove event listeners when the component unmounts
      document.removeEventListener('keydown', handleEscKey);
    };
    // eslint-disable-next-line
  }, [activeModal])
  
  
  useEffect(() => {
    getWeather()
    .then((data)=>{ 
      parseWeatherCondition(data)     
      const currentTemperature = parseWeatherTemp(data)
      setTemp(currentTemperature)
      const weatherCondition = parseWeatherCondition(data)
      setWeather(weatherCondition)
      const dayLighCondition = parseDaytimeCondition(data)
      setDayLight(dayLighCondition)
      const currentLocation = parseLocation(data)
      setLocation(currentLocation)
    })

  }, [])


  return (
    <div className="App">
      <Header onCreateModal = {handleCreateModal} 
      currentLocation = {location}/>
      <Main onSelectCard={hadleSelectedCard} 
      currentTemperature = {temp} 
      currentWeather = {weather} 
      dayLighCondition = {dayLight}/>
      <Footer />
      {activeModal === 'create' && 
      <ModalWithForm title={'New garment'} 
      onCloseModal = {handleCloseModal}
      onCloseModalByOverlay = {handleOverlayClick}/>}
      {activeModal === 'preview' && 
      <ItemModal selectedCard={selectedCard} 
      onCloseModal = {handleCloseModal}
      onCloseModalByOverlay = {handleOverlayClick}/>}
    </div>
  );
}

export default App;
