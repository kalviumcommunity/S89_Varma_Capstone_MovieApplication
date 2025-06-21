import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [form, setForm] = useState({ title: "", description: "", techStack: "" });

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    await axios.post("/api/posts", form, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <div>
      <h2>Create Project Post</h2>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <input placeholder="Tech Stack (comma separated)" onChange={(e) => setForm({ ...form, techStack: e.target.value.split(",") })} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreatePost;
