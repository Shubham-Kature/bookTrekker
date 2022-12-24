import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import Header from './components/Header';
import CardComponent from './components/Cards';
import MainInfoDesktop from './components/MainInfoDesktop';
import Sheet from 'react-modal-sheet';
import MainBookModal from './components/MainBookModal';
import { BooksContextConsumer } from './context/booksDataContext';

function App() {
  return (
    <div className="App">
      <Header />
      <BooksContextConsumer>
        {booksobj => (<MainInfoDesktop mainBook={booksobj.mainBook}/>)}
      </BooksContextConsumer>
      <BooksContextConsumer>
        {booksobj => (<NavBar setbooksData={booksobj.setBooksData} setSelectedCategory={booksobj.setSelectedCategory} selected_category={booksobj.selectedCategory} setMainBook={booksobj.setMainBook}/>)}
      </BooksContextConsumer>
      <BooksContextConsumer>
        {booksobj => (<CardComponent booksData={booksobj.booksData} setMainBook={booksobj.setMainBook} setMainBookModal={booksobj.setMainBookModal}/>)}
      </BooksContextConsumer>
      <BooksContextConsumer>
        {booksobj => (
          <Sheet isOpen={booksobj.isMainBookModal && window.screen.width < 800} onClose={() => booksobj.setMainBookModal()}>
            <Sheet.Container>
              <Sheet.Header className='modal-header'/>
                <Sheet.Content>
                  <MainBookModal mainBook={booksobj.mainBook}/>
                </Sheet.Content>
              </Sheet.Container>
            <Sheet.Backdrop />
          </Sheet>
        )}
      </BooksContextConsumer>
      
    </div>
  );
}

export default App;
