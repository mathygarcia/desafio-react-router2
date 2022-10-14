import { Form, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/css/boton.css";


const Pokemones = () => {
  const navigate = useNavigate();
  const [pokemones, setPokemones] = useState([]);
  const [name, setName] = useState("");

  const getPokemones = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const res = await fetch(url);
    const { results } = await res.json();
    setPokemones(results);
  };

  const RedirectPokemonDetail = async () => {
    if (name) navigate(`/pokemones/${name}`);
    else alert("debe seleccionar un pokemon");
  };

  useEffect(() => {
    getPokemones();
  }, []);

  return (
    <Container className="mt-5 text-center">
      <h1 className="title-pokemon">selecciona un pokemon</h1>
      <Form.Select
        className="form"
        value={name}
        aria-label="Default select example"
        onChange={(e) => {
          setName(e.target.value);
        }}
      >
        <option> Pokemones </option>
        {pokemones.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </Form.Select>
      <div className="boton">
        <Button onClick={RedirectPokemonDetail} variant="dark">
          Ver Detalles
        </Button>
      </div>
    </Container>
  );
};
export default Pokemones;
