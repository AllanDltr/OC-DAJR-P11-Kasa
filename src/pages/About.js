import React from 'react'
import Header from '../components/Header'
import background from '../assets/BannerAbout.png'
import { Collapse } from '../components/Collapse'
import '../styles/BannerAbout.css'
import '../styles/Collapse.css'
import  Footer from '../components/Footer'
// import about_mobile from '../assets/about_mobile.png'

const speech = [
    {
      title: 'Fiabilité',
      description:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      title: 'Respect',
      description:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      title: 'Service',
      description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      title: 'Sécurité',
      description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
]

function  About() {
    return (
            <main>
                <Header> </Header>
                <div className="bannerAbout">
                  <img className='bannerAbout__img' src={background} alt="banner about" />
                </div>
                {speech.map((item, index) => (
                  <Collapse
                  key={`${item.title}-${index}`}
                  datas={item.description}
                  title={item.title}
                  />
                ))}
                <Footer> </Footer>
            </main>
    )
}

export default About