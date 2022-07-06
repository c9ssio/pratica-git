import { useState } from 'react';
import './home.css';
import Menu from '../../components/Menu'; 
import LinkItem from '../../components/link-item';
import api from '../../services/api';
import { saveLink } from '../../services/store-links'



export default function Home () {
  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState (false);
  const [data, setData] = useState ({});

  async function handleShortLink () {
    try {
      const response = await api.post('/shorten', {
        long_url: link

      })
      setData(response.data);
      setShowModal(true);
      saveLink('@encurtaLink', response.data)
      setLink('');

    } catch {
      alert('Ops! Parece que algo deu errado');
      setLink('');
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="images.png" alt="meulink-logo"/>
          <h1>MEU LINK</h1>
      </div>

      <div className="area-input">
        <div>
          <input 
          placeholder='https://www.youtube.com/cassinho-gameplays'
          value = {link}
          onChange = { (e) => setLink (e.target.value) }
          />
        </div>

        <button onClick={ handleShortLink }>Gerar link</button>
      </div>
      <Menu/>
      
      { showModal && 
      (<LinkItem 
        closeModal= { () => setShowModal(false) }
        content = {data}
      />) }

    </div>
  )
}