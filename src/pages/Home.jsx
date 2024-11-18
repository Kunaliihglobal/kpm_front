import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItems, deleteItem } from "../api";

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await getItems();
        setItems(response.data.data);
    };

    const handleDelete = async (id) => {
        await deleteItem(id);
        fetchItems();
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        <Link to={`/edit/${item._id}`}>{item.title}</Link>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
