import React from "react";
import Form from "../components/Form";
import { createItem } from "../api";
import { useNavigate } from "react-router-dom";

const CreateItem = () => {
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        await createItem(data);
        navigate("/");
    };

    return <Form onSubmit={handleSubmit} />;
};

export default CreateItem;
