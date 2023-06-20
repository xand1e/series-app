import { useEffect, useState } from "react"
import { Serie } from "./Serie"
import styles from "./Series.module.css"
import { Header } from "./Header"
// import { Search } from "./Search";

export function Series() {


    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("");

    useEffect(() => {

        setLoading(true)

        fetch("https://api.tvmaze.com/shows")
            .then(response => response.json())
            .then(data => {

                const sortedSeries = data.sort((a, b) => a.name.localeCompare(b.name))
                setSeries(sortedSeries)

                setLoading(false)
            }
            ).catch(error => {

                setError(error)
                setLoading(false)
            })




    }, [])

    const filteredSeries = series.filter(serie => serie.name.toLowerCase().includes(search))

    function getSearchValue(e) {

        e.preventDefault();
        setSearch(e.target.value.toLowerCase())

    }

    if (loading) {

        return <div>Loading ....</div>

    } else if (error) {

        return <div>Error </div>

    } else {





        return (
            <>
                <Header
                    total={filteredSeries}
                    search={getSearchValue}
                />

                <div className={styles.container}>

                    {filteredSeries.map(serie => (
                        <Serie

                            key={serie.id}
                            code={serie.id}
                            rate={serie.rating.average}
                            image={serie.image.original}
                            name={serie.name}

                        />

                    ))}

                </div>
            </>




        )
    }


}