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
  const [modalIsOpen, setIsOpen] = useState({isOpen : false, title : '', content : '', bgColor : 'white', id : 0});

  function openModal(title='', content='', bgColor, id) {
    const newStateModal = {
      isOpen : true, title : title, content : content, bgColor : bgColor, id : id
    }
    setIsOpen(newStateModal);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSaveNewNote = (newNote) => {
    const newNotas = [...notas]
    let indexNota = newNotas.findIndex(nota => {return nota.id == newNote.id})
    console.log(indexNota)
    if(indexNota>=0){
      newNotas[indexNota] = newNote
    }else{
      newNotas.unshift(
        newNote
      )
    }
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
                  id={nota.id}
                  title={nota.title}
                  content={nota.content}
                  date={nota.date}
                  bgColor={nota.bgColor}
                  formatter={formattedDate}
                  openModal={openModal}
                ></NoteCard>
              )
            })
          }
        </div>
        <div>
          <Modal
            isOpen={modalIsOpen.isOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <NoteModal
              onSave={onSaveNewNote}
              onClose={closeModal}
              titleParam={modalIsOpen.title}
              contentParam={modalIsOpen.content}
              bgColorParam={modalIsOpen.bgColor}
              id={modalIsOpen.id}
            />
          </Modal>
        </div>
      </aside>
    </>
  )
}

export default App
