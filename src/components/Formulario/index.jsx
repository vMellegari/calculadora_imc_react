import { useState } from 'react';
import styles from './Formulario.module.css';


const Formulario = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calculaIMC = (e) => {
        e.preventDefault();
        const alturaEmMetro = altura / 100;
        const imcValor = (peso / (alturaEmMetro * alturaEmMetro)).toFixed(2);
        setImc(imcValor);

        let classificacao = '';
        if (imcValor < 18.5) {
        classificacao = 'Magreza';
        } else if (imcValor < 24.9) {
        classificacao = 'Normal';
        } else if (imcValor < 29.9) {
        classificacao = 'Sobrepeso';
        } else if (imcValor < 34.9) {
        classificacao = 'Obesidade Grau I';
        } else if (imcValor < 39.9) {
        classificacao = 'Obesidade Grau II';
        } else {
        classificacao = 'Obesidade Grau III';
        }
        setClassificacao(classificacao);
    };

    return (
        <div className={styles.containerForm}>
            <h1>Calculadora de IMC</h1>
            <form onSubmit={calculaIMC}>
                <div>
                    <label>
                        Altura (cm):
                        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} required />
                    </label>
                    <label>
                        Peso (kg):
                        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} required />
                    </label>
                </div>
                <button type="submit">Calcular IMC</button>
            </form>
            {imc && (
                <div>
                    <h2>Seu IMC: {imc}</h2>
                    <h2>Classificação: {classificacao}</h2>
                </div>
            )}
        </div>
    );
}

export default Formulario;