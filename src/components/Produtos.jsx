import { useState, useEffect } from "react";
import styles from "./Produtos.module.css";
import Head from "./Head";
import { Link } from "react-router-dom";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <section className={styles.produtos}>
      <Head title="Ranek" description="Curso React Completo | Origamid" />
      {produtos.map(produto => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
