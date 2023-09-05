
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ModalWithForm from './ModalWithForm/ModalWithForm';
import ItemModal from './ItemModal/ItemModal';

import { useState } from 'react';

function App() {

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});


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
  console.log(selectedCard)

  return (
    <div className="App">
      <Header onCreateModal = {handleCreateModal}/>
      <Main onSelectCard={hadleSelectedCard} currentTemperature = "75°F"/>
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
