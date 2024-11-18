import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { getItemById, updateItem } from "../api";
import { useParams, useNavigate } from "react-router-dom";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const response = await getItemById(id);
    let data = response.data.data;
    data.createdAt = new Date(data.createdAt).toLocaleDateString();
    data.updatedAt = new Date(data.updatedAt).toLocaleDateString();
    setInitialData(data);
  };

  const handleSubmit = async (data) => {
    await updateItem(id, data);
    navigate("/");
  };

  return initialData ? (
    <Form onSubmit={handleSubmit} initialData={initialData} />
  ) : (
    <p>Loading...</p>
  );
};

export default EditItem;
