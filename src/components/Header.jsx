import styles from "./Header.module.css"
import { Link, useLocation } from 'react-router-dom'


export function Header({ search }) {

    const { pathname } = useLocation()
    console.log(pathname)
    return (


        <header className={styles.header}>

            <h1 className={styles.tv}>

                <Link to="/"> TVMaze</Link>


            </h1>




            {pathname == "/" &&
                <div className={styles.box}>
                    <form >

                        <input
                            className={styles.search}
                            placeholder="Search..."
                            type="text"
                            onChange={search}
                        />

                    </form>
                </div>
            }





        </header>


    )
}