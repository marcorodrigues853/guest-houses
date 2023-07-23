import { useEffect, useState } from 'react'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import { getCabins } from '../services/apiCabins'

function Cabins() {
  const [cabins, setCabins] = useState([])
  useEffect(function () {
    getCabins().then(data => {
      console.log(data)
      setCabins(data)
    })

    console.log(cabins)
  }, [])

  return (
    <Row type='horizontal'>
      <Heading as='h1'>All cabins</Heading>

      {!cabins.length && <span>Loading...</span>}
      {cabins.length > 0 && <img src={cabins[0].image} alt='' />}
    </Row>
  )
}

export default Cabins
