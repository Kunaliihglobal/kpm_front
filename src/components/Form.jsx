import React, { useState } from "react";

const Form = ({ onSubmit, initialData = {} }) => {
    const [formData, setFormData] = useState({
        title: "",
        type: "",
        repository: "",
        token: "",
        project: "",
        username: "",
        password: "",
        keys: "",
        url: "",
        email: "",
        document: "",
        ...initialData,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
                <div key={key}>
                    <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                    <input
                        type={key === "password" ? "password" : "text"}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                    />
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
