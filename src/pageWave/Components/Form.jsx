import React from 'react'
import '../style.css'

const Form = () => {

  return (
    <section className='form'>
      <div className='grid-content'>
        <div className='text'>
          <h1 className='white'>¡Tu voz importa y queremos escucharte!  </h1>
          <h1 className='purple'>Unete a nosotras</h1>
        </div>
        <div className='grid-input'>
          <div className='content-input'>
            <p>Tu nombre</p>
            <input type="text" name='name' className='name' placeholder='Name' />
          </div>
          <div className='content-input'>
            <p>Tu correo</p>
            <input type="text" name='email' className='email' placeholder='Email' />
          </div>
          <div className='content-input'>
            <p>Tu mensaje</p>
            <textarea type="text" name='message' className='message' />
            <button type='submit' className='btn-submit'>Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form