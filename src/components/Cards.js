import React from "react";
import Card from "./Card";
import { MainBookConsumer } from "../context/mainBookContext";

export default function CardComponent(props) {
    return (
        <div className="flow-content card-component">
            {props.booksData?.getBooksByCategory?.map(book => {
                return (
                    <MainBookConsumer key={book.primary_isbn13}>
                        {mainBookobj => (
                            <Card 
                                title={book.title}
                                author={book.author}
                                cover={book.book_image}
                                description={book.description}
                                category={book.category}
                                productLinks={book.productLinks}
                                setMainBook={mainBookobj.setMainBook}
                                setMainBookModal={mainBookobj.setMainBookModal}
                            />
                        )}
                    </MainBookConsumer>
                );
            })}
        </div>
    );
}