import React, { useEffect, useState } from "react"
import Place from "./Place"
import loader from "./loader.gif"

const Places = () => {
  const url = "https://course-api.netlify.app/api/react-tours-project"
  const [places, setPlaces] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const removeTour = (id, e) => {
    const newTours = places.filter((tour) => tour.id !== id)
    const parrent = e.parentNode
    parrent.style.transform = `translateX(200%)`
    setTimeout(() => {
      setPlaces(newTours)
    }, 550)
  }

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          const data = resp.json()
          return data
        } else {
          throw new Error("there was an error")
        }
      })
      .then((data) => {
        setPlaces(data)
        setIsLoading(false)
        setIsError(false)
      })
      .catch((error) => {
        setIsLoading(false)
        setIsError(true)
        console.log(error)
      })
  }, [])

  if (isLoading) {
    return (
      <div className="loader">
        <img src={loader} alt="loading..."></img>
      </div>
    )
  }
  if (isError) {
    return <h1>There was an error.</h1>
  }
  return (
    <>
      <h2 className="title">Our Tours</h2>
      <div className="underline"></div>
      {places.map((place) => {
        return <Place {...place} key={place.id} handleRemove={removeTour} />
      })}
    </>
  )
}

export default Places
