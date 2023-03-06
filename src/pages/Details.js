import React from 'react'
import Slideshow from '../components/Slideshow'
import Error from '../components/Error'
import Footer from '../components/Footer'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Tag from '../components/Tag'
import Star from '../components/Star'
import '../styles/Details.css'
import '../styles/Collapse.css'
import Header from '../components/Header'
import { Collapse } from '../components/Collapse'


const Details = () => {
    const {id} = useParams()
    let data = []

    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('../../logements.json')
            .then(function (response) {
                return response.json()
            })
            .then(function (datas) {
                setDatas(datas)
            })
            .catch(function (error) {
                console.log(error)
            })
        }, [])

    const temp = datas.filter((data) => data.id === id)
    if (temp.length === 0)
      return (
        <div>
          <Error />
        </div>
      )

    data = datas.find((pictures) => {
      return pictures.id === id
    })
    let Rating = () => {
      return (
        <ul className="star">
          {Array.from(Array(5), (e, index) => {
            if (index < parseInt(data.rating)) {
              return (
                <div
                key={`${data.id}-${index}`}
                className="star--yes">
                  <Star />
                </div>
              )
            } else {
              return (
                <div
                key={`${data.id}-${index}`}
                className="star--no">
                  <Star />
                </div>
              )
            }
          })}
        </ul>
      )
    }

        return (
            <main>
                <Header />
              <Slideshow key={data.id} pictures={data.pictures} />
              <div className="Card">
                <div className="Card__title">
                  <h1>{data.title}</h1>
                  <p>{data.location}</p>
                  <Tag tags={data.tags} />
                </div>
                <div className="flexRowB">
                  <div className="flexRow">
                    <p className="wrap">{data.host.name}</p>
                    <img src={data.host.picture} alt="Host" className="picture" />
                  </div>
                  <Rating />
                </div>
              </div>
              <div className="flex">
                <Collapse
                  key={data.id + 2}
                  datas={data.description}
                  title="Description"
                />
                <Collapse
                  key={data.id + 3}
                  datas={data.equipments}
                  title="Equipements"
                />
              </div>
              <Footer> </Footer>
            </main>
          )
        }

export default Details