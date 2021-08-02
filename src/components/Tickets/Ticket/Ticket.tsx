import React from 'react';
import styles from './Ticket.module.scss';

const Ticket = () => {

    const getTimeFromMins = (mins: number) => {
        let hours = Math.trunc(mins / 60)
        let minutes = mins % 60
        return hours + 'ч ' + minutes + 'м'
    }

    return (
        <div className={styles.card}  >
            <div className={styles.cardHeader}>
                {/* <div className={styles.cardHeaderPrice}>{props.item.price.toString().split("").reverse().reduce((agregation, char, i) => {
                    if (i % 3 === 0) {
                        return agregation + " " + char
                    }
                    return agregation + char
                }, "Р ").split("").reverse().join("")}</div> */}
                <div className={styles.cardHeaderIcon}>
                    {/* <img src={`//pics.avs.io/99/36/{${props.item.carrier}}.png`} alt="logo" /> */}
                </div>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.cardRow}>
                    <div className={styles.cardCol}>
                        {/* <div className={styles.cardColTop}>{segments.origin} – {segments.destination}</div> */}
                        <div className={styles.cardColBot}>10:45 – 08:00</div>
                    </div>
                    <div className={styles.cardCol}>
                        <div className={styles.cardColTop}>В пути</div>
                        {/* <div className={styles.cardColBot}>{getTimeFromMins(segments.duration)}</div> */}
                    </div>
                    <div className={styles.cardCol}>
                        {/* <div className={styles.cardColTop}>{
                            segments.stops.length === 0
                                ? "Без пересадок"
                                : segments.stops.length === 1
                                    ? segments.stops.length + " Пересадка"
                                    : segments.stops.length >= 2
                                        ? segments.stops.length + " Пересадки" : ""
                        }</div> */}
                        {/* <div className={styles.cardColBot}>{segments.stops.join(",")}</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;
