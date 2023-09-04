
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ModalWithForm from './ModalWithForm/ModalWithForm';

import { useState } from 'react';

function App() {

  const [activeModal, setActiveModal] = useState("");


  function handleCreateModal(){
    setActiveModal('create')
  }

  function handleCloseModal(){
    setActiveModal("")
  }



  return (
    <div className="App">
      <Header onCreateModal = {handleCreateModal}/>
      <Main />
      <Footer />
      {activeModal === 'create' && 
      <ModalWithForm title={'New garment'} 
      onCloseModal = {handleCloseModal}/>}
    </div>
  );
}

export default App;
