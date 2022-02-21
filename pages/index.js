import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdul js | Home</title>
        <meta name="keywords" content="abdul-home" />
      </Head>
      <div>
        <h1 className={styles.title}>homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ullam
          pariatur debitis. Modi quia quod consectetur error? Error alias
          consequuntur hic repellat amet explicabo! Dolores tenetur quia ratione
          quae molestiae.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ullam
          pariatur debitis. Modi quia quod consectetur error? Error alias
          consequuntur hic repellat amet explicabo! Dolores tenetur quia ratione
          quae molestiae.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ullam
          pariatur debitis. Modi quia quod consectetur error? Error alias
          consequuntur hic repellat amet explicabo! Dolores tenetur quia ratione
          quae molestiae.
        </p>

        <Link href="/abdul">
          <a className={styles.btn}>abdulhammed</a>
        </Link>
      </div>
    </>
  );
}
