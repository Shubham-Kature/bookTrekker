import React from "react";

export default function MainBookModal(props) {
    const {title, author, description, productLinks, book_image} = props?.mainBook;

    return(
        <div className="mainModal-section">
            <div className="main-modal-meta">
                {book_image && <img src={book_image} alt="book-cover" className="mainModal-image"/>}
                <div className="meta-info">
                    {title && <p className="title">{title}</p>}
                    {author && <p className="author">By {author}</p>}
                </div>
            </div>

            {description && <div className="description">
                <h3>Description</h3>
                <p>{description}</p>
            </div>}
            <div className="buy-links">
                {productLinks && productLinks.map(productLink => {
                    return productLink.link && <a href={productLink.link} rel="noreferrer" target="_blank" key={productLink.name}>{productLink.name}</a>
                })}
            </div>
        </div>
    );
};