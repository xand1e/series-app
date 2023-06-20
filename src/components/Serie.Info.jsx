import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./Series.Info.module.css"
import { Header } from "./Header"



export function SerieInfo() {

    const { code } = useParams()
    const [serie, setSerie] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {


        setLoading(true)
        fetch(`https://api.tvmaze.com/shows/${code}`)
            .then(response => response.json())
            .then(data => {


                setSerie(data)
                setLoading(false)


            })
            .catch(error => {

                setError(error)
                setLoading(false)

            })



    }, [code])

    return (


        <>
            <Header/>

            <div className={styles.containerinfo}>

                <div className={styles.imagecontainer}>

                    <img className={styles.imageinfo} src={serie?.image?.original} alt={serie.name} />

                </div>


                <div className={styles.info}>


                    <div className={styles.nameinfo}> {serie.name}</div>
                    <div className={styles.rateinfo}>{serie?.rating?.average} / 10 ★</div>
                    <div className={styles.languageinfo}>Language: {serie.language}</div>
                    <div className={styles.genreinfo}>Genre: {serie.genres}</div>
                    <div className={styles.preminfo}>Premiered: {serie.premiered}</div>
                    <div className={styles.summaryinfo}>{serie.summary}</div>
                </div>



            
            </div>
        </>

    )




}



