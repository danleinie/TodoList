import { useState } from 'react'
import {colorVariants} from '../utils.js'

export function NoteModal({ onSave, onClose, titleParam = '', contentParam = '', bgColorParam = 'white', id = 8 }) {
  const [title, setTitle] = useState(titleParam);
  const [content, setContent] = useState(contentParam);
  const [colorBG, setColorBG] = useState(bgColorParam) 

  const handleColorNote = (color) => {
    setColorBG(color)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content, date: new Date().toISOString(), bgColor : colorBG , id:id});
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className={`modal-content w-96 p-5 ${colorVariants[colorBG]} transition ease-in-out`}>
      <div className='flex justify-end gap-1 mt-5'>
              {Object.keys(colorVariants).map((color) => (
                <button onClick={() => handleColorNote(color)} key={color} className={`p-3 rounded-full border border-indigo-200 ${colorVariants[color]}`}>
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
                required
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
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black hover:bg-gray-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 "
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
  );
}