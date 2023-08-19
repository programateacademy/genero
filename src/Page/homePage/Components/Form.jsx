import React from 'react'
import { useForm } from "react-hook-form"


const Form = () => {
  const { register, formState:{ errors }, handleSubmit } = useForm();

  const onSubmit = (dataForm) => {
    console.log(dataForm)
  }
  return (
    <section className='formulary'>
      <div className='grid-content'>
        <div className='text'>
          <h1 className='white'>¡Tu voz importa y </h1>
          <h1 className='white'>queremos escucharte!</h1>
          <h1 className='purple'>Unete a nosotras</h1>
        </div>
        <form className='grid-input' id='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='content-input'>
            <p className='white'>Tu nombre</p>
            <input type="text" className='name' {...register('name', {required: true, maxLength: 25,})} />
            {errors.name?.type === 'required' && <p className='red'>Debes escribir tu nombre</p>}
            {errors.name?.type === 'maxLength' && <p className='red'>Puedes escrbir maximo 25 caracteres</p>}
          </div>
          <div className='content-input'>
            <p className='white'>Tu correo</p>
            <input type="text" className='email' {...register('email', {required: true, pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/})}   />
            {errors.email?.type === 'required' && <p className='red'>Debes escribir tu email</p>}
            {errors.email?.type === 'pattern' && <p className='red'>Escribe un email valido</p>}

          </div>
          <div className='content-input'>
            <p className='white-form-text'>Tu mensaje</p>
            <textarea type="text" className='message'{...register('message', {required: true})} />
            {errors.message?.type === 'required' && <p className='red'>Escribe un mensaje</p>}
            <input type='submit' className='btn-submit' value='Enviar'/>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form