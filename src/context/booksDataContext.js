import React from "react";

const {Provider, Consumer} = React.createContext();

class BooksContextProvider extends React.Component {
    state = {
        booksData: {},
        selected_cat: 'Fiction',
        mainBook: {},
        ismainBookModal: false
    }

    setBooksData = (data) => {
        this.setState(prevState => {
            return {
                booksData: data,
                selected_cat: prevState.selected_cat,
                mainBook: prevState.mainBook,
                ismainBookModal: prevState.ismainBookModal,
            };
        });
    }

    setSelectedCategory = (category) => {
        this.setState(prevState => {
            return {
                selected_cat: category,
                booksData: prevState.booksData,
                mainBook: prevState.mainBook,
                ismainBookModal: prevState.ismainBookModal,
            }
        });
    }

    setMainBook = (book) => {
        this.setState(prevState => {
            return {
                selected_cat: prevState.selected_cat,
                booksData: prevState.booksData,
                mainBook: book,
                ismainBookModal: prevState.ismainBookModal,
            }
        });
    }

    setMainBookModal = () => {
        this.setState(prevState => {
            return {
                selected_cat: prevState.selected_cat,
                booksData: prevState.booksData,
                mainBook: prevState.mainBook,
                ismainBookModal: !prevState.ismainBookModal,
            }
        });
    }

    render() {
        return (
            <Provider value={{booksData: this.state.booksData, setBooksData: this.setBooksData, setSelectedCategory: this.setSelectedCategory, selectedCategory:this.state.selected_cat, mainBook: this.state.mainBook, setMainBook: this.setMainBook, isMainBookModal: this.state.ismainBookModal, setMainBookModal: this.setMainBookModal}}>
                {this.props.children}
            </Provider>
        );
    }
}

export {BooksContextProvider, Consumer as BooksContextConsumer};
