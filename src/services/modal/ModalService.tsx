import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './model_style.css';


interface CustomInputProps{
    title?: string
    message?: string
    yes():void
    no():void
}



const ModalService = ({title,message,yes,no}:CustomInputProps) => {

    const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

    return( <div>     
            <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button>  
  <Popup
    
    modal
    open={open} 
    closeOnDocumentClick 
    onClose={closeModal}
  >
    <div className="modal">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <div className="header"> {title} </div>
          <div className="content">
            {message}
          </div>
          <div className="actions">
            <button  className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"  onClick={ ()=>yes() } >
              Evet
            </button>
            <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=> no() } >
              Hayır
            </button>
          </div>
        </div>
  </Popup>
  </div>
  
    )
};





export default ModalService;