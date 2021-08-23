import React from 'react'
import FavoriteCard from './FavoriteCard/FavoriteCard'
import styles from './FavoriteCards.module.scss'
import {useSelector} from 'react-redux'

const FavoriteCards = () => {
  const favoriteCards = useSelector(state => state.favorite)
  // console.log({ favoriteCards });

    return (
        <ul className={styles.FavoriteCards}>
          {favoriteCards.map(card => (
            <FavoriteCard card={card} key={card.id}/>
          ))}
        </ul>
    )
}

export default FavoriteCards
