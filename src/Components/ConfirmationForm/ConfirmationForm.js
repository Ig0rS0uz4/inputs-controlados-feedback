import React from 'react'
import { Form, Input} from '../MainPage/styles'

const ConfirmationForm = (props) => {
  return (
    <Form>
          <label>
          Data de nascimento:
          <Input type='date' placeholder="DD/MM/AAAA" value={props.dataNscimento} onChange={props.onChangeDataNascimento}/>
        </label>
        <label>
          Telefone:
          <Input type='phone' placeholder="00+telefone" value={props.telefone} onChange={props.onChangeTelefone}/>
        </label>
      <button onClick={props.sendData2}>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm