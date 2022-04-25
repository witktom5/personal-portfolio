import { useRef, useState, useEffect } from 'react';

function Modal({ title, content, hide }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogEl = useRef(null);

  useEffect(() => {
    //If modal is open and window is resized this code will close it.
    //Neccessary because my modal disappears on lg breakpoint
    function onResize() {
      if (isOpen) handleClick();
    }
    window.addEventListener('resize', onResize);
  });

  const handleClick = () => {
    if (!isOpen) {
      dialogEl.current.showModal();
      setIsOpen(true);
    } else {
      dialogEl.current.close();
      setIsOpen(false);
    }
  };

  return (
    <div className={`${hide ? 'lg:hidden' : 'contact-moreinfo -mr-4'}`}>
      <button onClick={handleClick} className='btn btn-ghost -ml-4'>
        More info
      </button>

      <dialog
        ref={dialogEl}
        className='dialog rounded-box bg-base-100 text-base-content'
      >
        <div className='flex flex-col gap-2 p-5'>
          <div className='flex'>
            <h4 className='text-xl pb-3 w-fit font-semibold'>
              More info about {title}
            </h4>
            <button
              onClick={handleClick}
              className='btn btn-accent btn-circle rounded-full text-primary-content ml-auto -mt-5 -mr-5'
            >
              X
            </button>
          </div>
          {content}
        </div>
      </dialog>
    </div>
  );
}
export default Modal;
