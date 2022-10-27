import React, { useState } from 'react'

import Tabela from './components/Tabela'
import Formulario from './components/Formulario'

function App() {
  const [name, setName] = useState('')
  const [color, setColor] = useState('#000000')
  const [repeat, setRepeat] = useState('')
  const [habits, setHabits] = useState([])
  const [index, setIndex] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const habit = {
      name,
      color,
      repeat
    }

    if (index && index > 0) {
      // Editar
      const copy = [...habits]
      copy[index - 1] = habit
      setHabits(copy)
    } else {
      // Cadastrar
      setHabits((prev) => [habit, ...prev])
    }

    handleReset()
  }

  const handleRemove = (habit) => {
    setHabits((prev) => prev.filter((h) => h.name !== habit.name))
  }

  const handleLoadData = (habit, index) => {
    setIndex(index + 1)

    setName(habit.name)
    setColor(habit.color)
    setRepeat(habit.repeat)
  }

  const handleReset = () => {
    setIndex(false)
    setName('')
    setColor('#000000')
    setRepeat('')
  }

  return (
    <div className="container py-3">
      <h1>Habit Tracker</h1>

      <Formulario
        name={name}
        setName={setName}
        color={color}
        setColor={setColor}
        repeat={repeat}
        setRepeat={setRepeat}
        index={index}
        handleSubmit={handleSubmit}
      />

      <Tabela
        habits={habits}
        handleRemove={handleRemove}
        handleLoadData={handleLoadData}
      />
    </div>
  )
}

export default App
