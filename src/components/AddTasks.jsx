import { useState } from "react";

function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-slate-200 rounded-md space-y-4 p-6 flex flex-col">
      <h1 className="text-xl font-bold text-white text-center">
        Adicionar Tarefa
      </h1>

      <input
        type="text"
        placeholder="Título da tarefa"
        className="w-full p-2 border-slate-300 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descreva sobre a tarefa"
        className="w-full p-2 border-slate-300 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={() => {
          //Verificando se estão preenchidos
          if (!title.trim() || !description.trim()) {
            alert("Preencha todos os campos para adicionar a tarefa!");
            return;
          }
          onTaskAdd(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 p-2 rounded-md text-white px-4 py-2"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
