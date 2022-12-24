import React from "react";

export default function Card(props) {
    const {title, author, category, cover, description, productLinks, setMainBook, setMainBookModal} = props;

    const setMainBookInfo = () => {
        setMainBook({title, author, category, book_image: cover, description, productLinks});
        setMainBookModal();
    }
    
    return (
        <div className="card">
            {cover && <img src={cover} alt="book-cover" className="card-image"/>}
            <div className="card-details">
                {author && <p className="card-author">{author}</p>}
                {title && <p className="card-title">{title}</p>}
                {category && <div className="card-category">
                    <p>{category}</p>
                </div>}
            </div>
            <p className="more-info" onClick={setMainBookInfo}>
                <span class="material-symbols-outlined">library_books</span>
            </p>
        </div>
    );

}