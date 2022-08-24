import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
const MemoTutorial = () => {
    const [data, setData] = useState('')
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then(res => setData(res.data))
    }, [])
    const findLongsName = (comments) => {
        if (!comments) return null
        let longsName = ''
        for (let item = 0; item < comments.length; item++) {
            let currentName = comments[item].name;
            if (currentName.length > longsName.length) {
                longsName = currentName
            }
        }
        console.log('THIS WAS COMPUTED');
        return longsName
    }
    const getLongesName = useMemo(() => { findLongsName(data) }, [data])
    return (
        <div>
            {/* if we don`t use useMemo every time in toggle is change data and use effect it rerender  */}
            {/* if any time clicked in button toggle render function findLongsName */}
            {/* <div>{findLongsName(data)}</div> */}
            {/* useMemo will only recompute the memoized value when one of the dependencies has changed.  */}
            <div>{getLongesName}</div>

            <button onClick={() => { setToggle(!toggle) }}>Toggle</button>
            {toggle && <h1>Toggle</h1>}
        </div>
    )
}
export default MemoTutorial