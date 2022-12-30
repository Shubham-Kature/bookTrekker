import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import Header from './components/Header';
import CardComponent from './components/Cards';
import MainInfoDesktop from './components/MainInfoDesktop';
import Sheet from 'react-modal-sheet';
import MainBookModal from './components/MainBookModal';
import { BooksContextConsumer } from './context/booksDataContext';
import { MainBookConsumer } from './context/mainBookContext';

function App() {
  return (
    <div className="App">
      <Header />
      
      <MainBookConsumer>
        {mainBookobj => (<MainInfoDesktop mainBook={mainBookobj.mainBook}/>)}
      </MainBookConsumer>

      <BooksContextConsumer>
        {booksobj => (
          <MainBookConsumer>{mainBookobj => (
            <NavBar setbooksData={booksobj.setBooksData} setMainBook={mainBookobj.setMainBook}/>
          )}</MainBookConsumer>
        )}
      </BooksContextConsumer>

      <BooksContextConsumer>
        {booksobj => (<CardComponent booksData={booksobj.booksData}/>)}
      </BooksContextConsumer>

      <MainBookConsumer>
        {mainBookobj => (
          <Sheet isOpen={mainBookobj.ismainBookModal && window.screen.width < 800} onClose={() => mainBookobj.setMainBookModal()}>
            <Sheet.Container>
              <Sheet.Header className='modalSheet-header'/>
                <Sheet.Content>
                  <MainBookModal mainBook={mainBookobj.mainBook}/>
                </Sheet.Content>
              </Sheet.Container>
            <Sheet.Backdrop />
          </Sheet>
        )}
      </MainBookConsumer>
    </div>
  );
}

export default App;
