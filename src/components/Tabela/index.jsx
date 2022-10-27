export default function Tabela({ habits, handleRemove, handleLoadData }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cor</th>
          <th>Repeat</th>
          <td width="200px"></td>
        </tr>
      </thead>

      <tbody>
        {!habits.length && (
          <tr>
            <td colSpan="1000">Nenhum dado cadastrado</td>
          </tr>
        )}
        {habits.map((habit, key) => (
          <tr key={key}>
            <td>{habit.name}</td>
            <td>{habit.color}</td>
            <td>{habit.repeat === 'y' ? 'Sim' : 'Não'}</td>
            <td>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => handleLoadData(habit, key)}
              >
                Editar
              </button>
              <button
                className="btn btn-sm btn-dark"
                onClick={() => handleRemove(habit)}
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
