import { useState } from 'react';
import styles from './tabela.module.css';


const tabela = () => {
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();

    const resultadoIMC = () => {
        const primeiroCalc = altura * 2;
        const resultado = peso / primeiroCalc;
        if(resultado >= 1){
            return resultado
        } else{
            return 0
        }
    }

    const diagnostico = () => {
        const filtro = resultadoIMC();

        if(filtro >= 12 && filtro < 17){
            return 'Muito abaixo do peso'
        }else if(filtro >= 17 && filtro < 18.5){
            return 'abaixo do peso'
        }else if (filtro >= 18.5 && filtro < 25){
            return 'peso normal'
        }else if(filtro >= 25 && filtro < 29.9){
            return 'acima do peso'
        }
        else if(filtro >= 29.9){
            return 'obeso'
        } 
        else{
            return 'O Resultado será exibido aqui'
        }
    }

    return (
        <table className='container'>
            <tbody className={styles.dados}>
                <input type="number"  placeholder='Altura em centimetros' onChange={evento => setAltura(evento.target.value)} className={styles.dados} />
                <input type="number"  placeholder='Peso em quilos' onChange={evento => setPeso(evento.target.value)} className={styles.dados} />
                <p>{resultadoIMC()}</p><br />

                <h5>{diagnostico()}</h5>
            </tbody>
        </table>
    )
}

export default tabela