import React from 'react'


const Form = () => {

  function handleSubmit(e) {
    
  }

  return (
    <section className='formulary'>
      <div className='grid-content'>
        <div className='text'>
          <h1 className='white'>¡Tu voz importa y queremos escucharte!  </h1>
          <h1 className='purple'>Unete a nosotras</h1>
        </div>
        <form className='grid-input' id='form' onSubmit={handleSubmit}>
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
        </form>
      </div>
    </section>
  );
};

export default Form