import { useEffect, useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import { Dialog } from "@mui/material"



const Modal = ({ handleClose, open, children }) => {
  const [count, setCount] = useState(0)

  useEffect( () =>{
    return () => {
      console.log("fase desmontaje");
    }
    
  }, [count, open])

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogContent>
        {children}
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </DialogContent>

    </Dialog>




  )
}

export default Modal