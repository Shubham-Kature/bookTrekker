import React from "react";

const {Provider, Consumer} = React.createContext();


class BookInfoProvider extends React.Component {
    state = {
        mainBook: {}
    }

    setMainBook = (book) => {
        this.setState(prevState => {
            return {
                selected_cat: prevState.category,
                booksData: prevState.booksData,
                mainBook: book,
            }
        });
    }

    render() {
        return (
            <Provider value={{setMainBook: this.setMainBook, getMainBook: this.state.mainBook}}>
                {this.props.children}
            </Provider>
        );
    }
    
}

export {BookInfoProvider, Consumer as BookInfoConsumer};