import { useEffect, useState } from "react";
import styles from "./Produto.module.css";
import { useParams } from "react-router-dom";
import Head from "./Head";

const Produto = () => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProduto(data))
      .catch(() => setError("Um erro ocorreu"))
      .finally(() => setLoading(false));
  }, [params]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={`Ranek | ${params.id}`}
        description="Curso React Completo | Origamid"
      />
      <div className="fotos">
        {produto.fotos.map((foto) => (
          <img key={foto.titulo} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div className="content">
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
