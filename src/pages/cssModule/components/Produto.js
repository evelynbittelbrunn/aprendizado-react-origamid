import React from 'react'
import styles from './Produto.module.css'

const Produto = () => {
  console.log(styles);

  // OBS: como o estilo é chamado em um obj como propriedade,
  // o ideal é utilizar o camelCase. Ex: precoTotal
  return (
    <div>
        <h1 className={styles.titulo}>Notebook</h1>
        <p className={styles.preco}>R$ 2000</p>
        <button className={styles.comprar}>Comprar</button>
    </div>
  )
}

export default Produto