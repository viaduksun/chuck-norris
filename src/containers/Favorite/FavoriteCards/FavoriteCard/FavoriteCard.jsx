import React from 'react'
import styles from './FavoriteCard.module.scss'
import {useDispatch} from 'react-redux'
import { removeFavoriteJokeAction } from '../../../../store/favorites/actions'
const FavoriteCard = ({ card }) => {
    const dispatch = useDispatch()
    const handleLike = () => {
        // console.log("DISLIKE");  
        dispatch(removeFavoriteJokeAction(card.id))             
    }
    return (
        <li className={styles.FavoriteCard}>
            <div className={styles.Like}>
                <i className="fas fa-heart" onClick={handleLike}/>
            </div>
            <div className={styles.CardMain}>
                    <div className={styles.CardMainIcon}>
                        <i className="far fa-comment-alt"></i>
                    </div>
                    <div className={styles.CardContentText}>
                        <p className={styles.CardContentTextId}>{card.id}</p>
                        <p className={styles.CardContentTextJoke}>{card.value}</p>
                        <p className={styles.CardContentTime}>Last update: {card.updated_at} </p>
                    </div>
            </div>
           
        </li>
    )
}

export default FavoriteCard
