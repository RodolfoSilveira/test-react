import React, { useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { addTech } from '../../store/modules/techs/actions'

const TechList: React.FC = () => {
  const [newTech, setNewTech] = useState('')

  const dispatch = useDispatch();
  const techs = useSelector((state: RootStateOrAny) => state.techs)

  function handleAddTech() {
    dispatch(addTech(newTech));
    setNewTech('')
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {
          techs.map((tech: any) => <li key={tech}>{tech}</li>)
        }
      </ul>
      <label htmlFor="tech">Tech</label>
      <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)} type="text" />
      <button onClick={handleAddTech}>Adicionar</button>
    </form>
  )
}

export default TechList;