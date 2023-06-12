import React, { useState } from 'react';
import styles from './Adicionar.modules.css';

const Adicionar = () => {
    const [text, setText] = useState('');
  
    const handleTextChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="text-area-container">
        <textarea
          className="text-area"
          value={text}
          onChange={handleTextChange}
          placeholder="Adicione aqui anotações sobre o que aprendeu para usar em game!!!"
        ></textarea>
      </div>
    );
  };
  

export default Adicionar;
