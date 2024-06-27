import styles from './index.module.css';

const cabecalho = () =>{

    return(
        <header className={styles.header}>
        <div className='container'>
        <h1>IMC</h1>
        <h2>Meça aqui o seu indice de massa corporal</h2>
        </div>
        </header>
    )
}

export default cabecalho;