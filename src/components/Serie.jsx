import { Link } from "react-router-dom"

import styles from "./Serie.module.css"


export function Serie({ code, image, name, rate }) {

    return (

        <Link to={`serie/${code}`}>
            <article className={styles.card}>

                <div

                    className={styles.image}
                    style={{

                        backgroundImage: ` url(${image})`

                    }}

                >



                </div>

                <div className={styles.name}>

                    {name}

                </div>


                <div className={styles.rate}>

                    {rate}

                </div>

            </article>
        </Link>

    )


}