import React from "react";

const {Provider, Consumer} = React.createContext();

class BooksContextProvider extends React.Component {
    state = {
        booksData: {},
        mainBook: {},
        ismainBookModal: false
    }

    setBooksData = (newBookData) => {
        this.setState(prevState => {
            return {
                ...prevState,
                booksData: newBookData,
            };
        });
    }

    setMainBook = (newBook) => {
        this.setState(prevState => {
            return {
                ...prevState,
                mainBook: newBook,
            }
        });
    }

    setMainBookModal = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                ismainBookModal: !prevState.ismainBookModal,
            }
        });
    }

    render() {
        return (
            <Provider value={{booksData: this.state.booksData, setBooksData: this.setBooksData, mainBook: this.state.mainBook, setMainBook: this.setMainBook, isMainBookModal: this.state.ismainBookModal, setMainBookModal: this.setMainBookModal}}>
                {this.props.children}
            </Provider>
        );
    }
}

export {BooksContextProvider, Consumer as BooksContextConsumer};
