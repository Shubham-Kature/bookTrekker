import React from "react";

export default function NavButtons({book_category, setCategory, getSelectedCategory, setSelectedCategory}) {
    const handleClick = () => {
        setCategory();
        setSelectedCategory(book_category);
    }

    return (
        <button className={`category_link ${book_category === getSelectedCategory ? 'selected-category': ''}`} 
                onClick={handleClick}>{book_category}</button>
    );
}