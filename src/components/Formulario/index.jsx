export default function Formulario({
  name,
  setName,
  color,
  setColor,
  repeat,
  setRepeat,
  index,
  handleSubmit
}) {
  return (
    <form className="mb-5" onSubmit={handleSubmit}>
      {/* Nome */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Cor */}
      <div className="mb-3">
        <label htmlFor="color" className="form-label">
          Cor
        </label>
        <input
          type="color"
          className="form-control"
          id="color"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </div>

      {/* Repetir */}
      <div className="mb-3">
        <label htmlFor="repeat" className="form-label">
          Repetir
        </label>
        <select
          className="form-select"
          id="repeat"
          name="repeat"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
          required
        >
          <option value="">Escolha</option>
          <option value="y">Sim</option>
          <option value="n">Não</option>
        </select>
      </div>

      <button
        className={`btn ${index ? 'btn-warning' : 'btn-primary'}`}
        type="submit"
      >
        {index ? 'Atualizar' : 'Salvar'}
      </button>
    </form>
  )
}
