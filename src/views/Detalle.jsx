import { useState, useEffect } from "react";
import { Container, Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../assets/css/Detalle.css";

const Detalle = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [img, setImg] = useState("");
  const [type, setType] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemones = async () => {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    setImg(data.sprites.other.dream_world.front_default);
    setType(data.types);
    const getDatos = data.stats;
    setPokemon(getDatos);
  };
  getPokemones();
  useEffect(() => {}, []);

  return (
    <Container className="contenedor">
      <Card className="detalle">
        <Card.Img src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {pokemon.map((p) => (
              <ListGroup className="list-group-flush">
                <ListGroup.Item key={p.name}>
                  {p.stat.name}: {p.base_stat}
                </ListGroup.Item>
              </ListGroup>
            ))}
          </Card.Text>
          <Card.Text>{type.map(({ type }) => type.name).join("  ")}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Detalle;
