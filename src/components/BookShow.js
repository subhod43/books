import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-books-context";

function BookShow({ book, onEdit, onDelete }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useBookContext();

    const handleDelete = () => {
        deleteBookById(book.id);
    }

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if(showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

    return (
        <div className="book-show">
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEdit}>Edit</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default BookShow;