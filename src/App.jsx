import { useState } from 'react'
import './App.css'
import plusLogo from './assets/plus.svg'
import { NoteCard } from './components/NoteCard'
import notasJson from './database/Notas.json'
import {formattedDate} from './utils.js'
import { MenuLateral } from './components/Menu'
import { NoteModal } from './components/NoteModal'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0px',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function App() {
  const [notas, setNotas] = useState(notasJson)
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSaveNewNote = (newNote) => {
    const newNotas = [...notas]
    newNotas.unshift(
      newNote
    )
    setNotas(newNotas)
  }

  return (
    <>
      <MenuLateral 
      onClickNote={openModal}
      />
      <aside className='m-20'>
        <div className='flex flex-wrap gap-10'>
          {
            notas.map((nota) => {
              return (
                <NoteCard
                  key={nota.id}
                  title={nota.title}
                  content={nota.content}
                  date={nota.date}
                  bgColor={nota.bgColor}
                  formatter={formattedDate}
                ></NoteCard>
              )
            })
          }
        </div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <NoteModal
              onSave={onSaveNewNote}
              onClose={closeModal}
            />
          </Modal>
        </div>
      </aside>
    </>
  )
}

export default App
