import { useState } from 'react'
import {colorVariants} from '../utils.js'

export function NoteModal({ onSave, onClose }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [colorBG, setColorBG] = useState('white') 

  const handleColorNote = (color) => {
    setColorBG(color)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content, date: new Date().toISOString(), bgColor : colorBG , id:8});
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className={`modal-content w-96 p-5 ${colorVariants[colorBG]}`}>
      <div className='flex justify-end gap-1 mt-5'>
              {Object.keys(colorVariants).map((color) => (
                <button onClick={event => handleColorNote(color)} key={color} className={`p-3 rounded-full border border-indigo-200 ${colorVariants[color]}`}>
                </button>
              ))}
            </div>
          <form className="space-y-4 mx-auto" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="text-sm text-gray-700 font-medium mb-1 block">
                Título
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1"
              />
            </div>
            <div>
              <label htmlFor="content" className="text-sm text-gray-700 font-medium mb-1 block">
                Texto de la Nota
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg h-32 focus:outline-none focus:ring-1"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
  );
}