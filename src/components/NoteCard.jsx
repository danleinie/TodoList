import {colorVariants} from '../utils.js'
export function NoteCard({ id, title, content, date, bgColor, formatter, openModal }) {
    const hanleClickEdit = (e) => {
        openModal(title,content,bgColor, id)
    }
    return (
        <div className={`flex flex-col justify-between ${colorVariants[bgColor]} p-5 w-64 h-64 rounded-2xl`} >
            <div>
            <header>
                <h2 className="mb-5 font-semibold">{title}</h2>
            </header>
            <main>
                <p>{content}</p>
            </main>
            </div>
            <footer>
                <div className="flex justify-between items-center">
                    <p className='font-light'>{formatter(date)}</p>
                    <button onClick={hanleClickEdit} className="bg-black p-2 rounded-full">
                    <svg className='fill-current text-white' xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M794-666 666-794l42-42q17-17 42.5-16.5T793-835l43 43q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Z"/></svg>
                    </button>
                </div>
            </footer>
        </div>
    )
}