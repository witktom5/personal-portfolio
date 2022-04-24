import { useRef, useState, useEffect } from 'react';

function Modal({ title, content }) {
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
    <div className='lg:hidden'>
      <button onClick={handleClick} className='btn btn-ghost -ml-4'>
        More info
      </button>

      <dialog
        ref={dialogEl}
        className='dialog rounded-box bg-base-100 text-base-content'
      >
        <div className='flex flex-col gap-2 px-2'>
          <h4 className='text-xl pb-5 mx-auto font-semibold'>
            More info about {title}
          </h4>
          {content}
          <button
            onClick={handleClick}
            className='btn btn-accent text-primary-content mt-3 w-20 mx-auto'
          >
            X
          </button>
        </div>
      </dialog>
    </div>
  );
}
export default Modal;
