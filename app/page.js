import LikeButton from './like-button'

function Header({ title }) {
    return <h1>{title ? title : 'Título por defecto'}</h1>
}

// A pesar de haber desplegado correctamente page.js, al correr el servidor de desarrollo
// nos indica como error el usar una funcionalidad correspondiente al Client Component (useState)
// En un server component (todos los componentes son Server Component por defecto a menos que se indique lo contrario)
// Exportaremos por tanto el botón like, que renderea en el lado del cliente, a un Componente Cliente dedicado a él.

// 1. Crearemos, dentro de la carpeta App, un archivo llamado like-button.js que exporte un componente likeButton.
// 2. Movemos la function handleClick y el button al componente like-button
// 3. A continuación, movemos el likeState y el import de useState.
// 4. Ahora, para hacer de like-button.js un verdadero Client Component, le daremos la directiva de React 'use client' al comienzo del archivo.
//    Esto le indica a React que debe renderizar el componente en el lado del cliente.
// 5. De vuelta a page.js, importamos el LikeButton a esta página y o insertamos en el componente HomePage:
// 6. Una vez resuelto, la página debería desplegarse correctamente.

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

    return (
        <div>
            <Header title='Develop. Preview. Ship.' />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    )
}
