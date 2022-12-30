import React from "react";

const {Provider, Consumer} = React.createContext(); 

class MainBookContextProvider extends React.Component {
    state = {
        book: {},
        ismainBookModal: false
    }

    setMainBook = (newBook) => {
        this.setState(prevState => {
            return {
                ...prevState,
                book: newBook
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
            <Provider value={{mainBook: this.state.book, setMainBook: this.setMainBook, ismainBookModal: this.state.ismainBookModal, setMainBookModal: this.setMainBookModal}}>
                {this.props.children}
            </Provider>
        );
    }
}

export {MainBookContextProvider, Consumer as MainBookConsumer};