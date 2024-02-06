import { useState } from 'react'

function Header({ title }) {
    return <h1>{title ? title : 'Título por defecto'}</h1>
}

// En Next, se usa un ruteo a través de sistemas de archivos. Para desplegar este index como la página de inicio
// utilizaremos archivos y carpetas.
// 1. Moveremos este archivo a una carpeta llamada App
// 2. Renombraremos el archivo de index.js a page.js: de esta forma la declaramos como la página principal
// 3. Agregaremos export default al componente HomePage para ayudar a Next.js a distinguirlo como el componente
//    principal de la página.
// 4. Para correr el servidor de desarrollo, indicaremos en package.json el script 'dev' y le asignaremos 'next dev'

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

    const [likes, setLikes] = useState(0)

    function handleClick() {
        setLikes(likes + 1)
    }

    return (
        <div>
            <Header title='Develop. Preview. Ship.' />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    )
}
