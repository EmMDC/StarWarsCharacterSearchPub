import { useState } from "react";

export default function Entry({ action }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    action(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    </form>
  );
}