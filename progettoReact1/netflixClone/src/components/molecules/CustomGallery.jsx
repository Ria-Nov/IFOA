import { useState, useEffect } from 'react';



const CustomGallery = ({url}) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data)=> {
            setMovies(data.Search);
        })
    }, [])

    return (
        <div className="mx-4" style={{marginBottom:"50px"}}>
           {movies.map((movie) => (
            <img key={movie.imdbID} src={movie.Poster} alt={movie.Title} width={120} className="mx-2"/>
           ))}
        </div>
    )
}


export default CustomGallery;