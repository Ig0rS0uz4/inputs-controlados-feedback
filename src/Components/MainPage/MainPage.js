import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [dataNscimento, setDataNacimento] = useState("")
const [telefone, setTelefone] = useState("")
const [email, setEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  console.log("nome")
  setName(event.target.value)
}

const onChangeAge = (event) => {
  console.log("idade")
  console.log(event.target.value)
  setAge(event.target.value)
}

const onChangeDataNascimento = (event) => {
  console.log("datanasci")
  console.log(event.target.value)
  setDataNacimento(event.target.value)
}

const onChangeTelefone = (event) => {
  console.log("telefone")
  console.log(event.target.value)
  setTelefone(event.target.value)
}

const onChangeEmail = (event) => {
  console.log("email")
  console.log(event.target.value)
  setEmail(event.target.value)
}

const sendData = () => {
  if (name.length > 10 && name.length <= 30 && age >= 18 && email.includes("@")){
    alert ("Parabens, vamos para a proxima etapa!")
    setFormFlow(2)
  }else{
    alert(" não respondeu o formulário corretamente.")
    setFormFlow(setFormFlow)
  }
}
const sendData2 = () => {

      alert ("a inscrição foi finalizada com sucesso!")
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      // insira aqui suas props
      nome={name}
      idade={age}
      
      email={email}
      data={formFlow}
      onChangeName={onChangeName}
      onChangeAge={onChangeAge}
      
      onChangeEmail={onChangeEmail}
      sendData={sendData}

      /> : <ConfirmationForm 
      dataNascimento={dataNscimento}
      telefone={telefone}
      onChangeDataNascimento={onChangeDataNascimento}
      onChangeTelefone={onChangeTelefone}
      sendData2={sendData2}
      />}
    </MainContainer>
  )
}

export default MainPage