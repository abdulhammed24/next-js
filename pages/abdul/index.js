import styles from "../../styles/abdul.module.css"
import  Link  from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {abdul: data}
    }
}

const Abdul = ({abdul}) => {
    return ( 
<div>
    <h1>Abdul</h1>
    {abdul.map(abdulhammed => (
        <Link href={"/abdul/" + abdulhammed.id} key={abdulhammed.id}>
<a className={styles.single}>
    <h3>{abdulhammed.name}</h3>
</a>
        </Link>
    ))}
</div>

     );
}
 
export default Abdul;