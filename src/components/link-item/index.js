import './linkItem.css';
import { FiClipboard, FiX } from 'react-icons/fi'



export default function LinkItem ( { closeModal, content } ) {
  
  async function copyLink () {
    await navigator.clipboard.writeText(content.link)
  }
  
  return (
    <div className='modal-container'>

      <div className='modal-header'>
        <h2>Link Encurtado</h2>
        <button className='x' onClick={closeModal}>
          <FiX size={28} color='#000'/>
        </button>
      </div>

      <span>
        {content.long_url}
      </span>

      <button className='modal-link' onClick={copyLink}>
        {content.link}
        <FiClipboard size={20} color='#000' />
      </button>


    </div>

  )
}