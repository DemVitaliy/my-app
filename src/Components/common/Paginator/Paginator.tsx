import React from "react"
import {useState} from "react"
import styles from "./Paginator.module.css"

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChange: (pageNumber: number) => void,
    portionSize?: number
}

let Paginator:React.FC<PropsType> = ({totalItemsCount, pageSize = 5, currentPage, onPageChange, portionSize = 5}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let [portionNumber, setPortionNumber] = useState(1)
    let portionCount = Math.ceil(pagesCount / portionSize)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return (
        <div className={styles.pagination}>
                <ul>
                    <li className={styles.numbers}>
                        { portionNumber > 1
                            ? <button onClick={ () => { setPortionNumber(portionNumber - 1)}}>Prev</button>
                            : <button disabled>Prev</button>}
                    </li>
                    {pages
                        .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                        .map(p => <li className={styles.numbers}>
                            <span key={p}
                                  className={styles.numbers && currentPage === p ? styles.selected : ""}
                                  onClick={() => onPageChange(p)}>{p}</span>
                        </li>)}
                        <li className={styles.numbers}>
                            { portionCount > portionNumber
                                ? <button onClick={ () => { setPortionNumber(portionNumber + 1)}}>Next</button>
                                : <button disabled>Next</button>}
                        </li>
                </ul>
        </div>
    )
}

export default Paginator