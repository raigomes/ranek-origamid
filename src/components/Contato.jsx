import styles from './Contato.module.css'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Curso React Completo | Origamid" />
      <img src='https://avatars.githubusercontent.com/u/3885994?v=4' />
      <section className={styles.dados}>
        <h1>Entre em contato.</h1>
        <ul>
          <li>raigomes2@hotmail.com</li>
          <li>(21) 98019-9439</li>
          <li>Rio de Janeiro/RJ</li>
        </ul>
      </section>
    </section>
  )
}

export default Contato