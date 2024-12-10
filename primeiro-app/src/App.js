import { useState,useEffect} from 'react';

function App() {
  const [aluno, setAluno] = useState('Alessandro');

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState(['Pagar conta de luz', 'Estudar React js']);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  },[])

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
  },[tarefas]); // salva toda vez que a lista de tarefas sofrer uma alteração
  
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [idade,setIdade] = useState('');

  const [user,setUser] = useState({});

  function handleChangeName(name) {
   setAluno(name)
  }

  function handleRegister(e){
    e.preventDefault();

    alert('Usuário Registrado com sucesso!')
    setTarefas([...tarefas, input])
    setInput('');
    
    // setUser({
    //   nome:nome,
    //   idade:idade,
    //   email:email
    // })
  }
  
  return (
    <div>
      <h1>Cadastrando Usuario</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa</label><br/>
        <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Digite seu nome'></input><br/>

        {/* <label>Email:</label><br/>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Digite seu email'></input><br/>

        <label>Idade:</label><br/>
        <input value={idade} onChange={(e)=> setIdade(e.target.value)} placeholder='Digite sua idade'></input><br/> */}

        <button type='submit' >Registrar</button>
      </form>
      <br/>
      <br/>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
        {/* <span>Nome: {user.nome} </span><br/>
        <span>Email: {user.email} </span><br/>
        <span>Idade: {user.idade} </span><br/> */}
      </ul>
    </div>
  );
}

export default App


