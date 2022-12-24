import React from "react";
import Card from "./Card";

export default function CardComponent(props) {
    return (
        <div className="flow-content card-component">
            {props.booksData?.getBooksByCategory?.map(book => (
                <Card 
                    title={book.title}
                    author={book.author}
                    cover={book.book_image}
                    description={book.description}
                    category={book.category}
                    productLinks={book.productLinks}
                    setMainBook={props.setMainBook}
                    setMainBookModal={props.setMainBookModal}
                />
            ))}
        </div>
    );
}