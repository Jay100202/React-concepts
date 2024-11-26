import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/Jay100202")
            .then(res => res.json())
            .then((datas) => {

                setData(datas)
            })
    }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-8 text-3xl'>
            Github followers: {data.followers}

            <img className="p-4" src={data.avatar_url} alt="data not defined" />
        </div>
    )
}

export default Github
