export function MenuLateral({ onClickNote }) {
    const handleAddClick = () => {
        onClickNote()
      }
    return (
        <aside className='flex flex-col shadow-md items-center border-r border-opacity-20 border-gray-400 h-screen py-10'>
        <header>
          <h1 className='font-semibold'>Docket</h1>
        </header>
        <div className='p-10'>
          <button onClick={handleAddClick} className='bg-black rounded-full p-1 shadow-md transition ease-in-out hover:bg-gray-600'>
          <svg xmlns="http://www.w3.org/2000/svg" className='fill-current text-white' height="36" viewBox="0 -960 960 960" width="36"><path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/></svg>
          </button>
        </div>
      </aside>
    )
}