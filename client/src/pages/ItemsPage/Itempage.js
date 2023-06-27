import data from './../../assets/data/data'
import { useParams } from 'react-router-dom'
import {AiOutlineStar, AiFillStar,  } from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import './itemPage.css'

const Itempage = () => {
    const {_id: itemId  }   = useParams()
    const item = data.find(itemVal => itemVal._id === itemId )
    console.log(item)
  return (
    <>
    <div className='itemPage_container'> 
    <div  className='itemPage_container2'>
    <p>{item.name}</p>
    <p>${item.price}</p>
   
    <img
      src={require(`./../../assets/images/${item.image}.jpg`)}
      className="itemPage_image"
      alt="yum"
    />
<div>{item.rating >=1  ? <AiFillStar/> : item.rating >= 0.5 ? <BsStarHalf/> : <AiOutlineStar/>  }
{item.rating >=2  ? <AiFillStar/> : item.rating >=1.5 ? <BsStarHalf/> : <AiOutlineStar/> }
{item.rating >=3  ? <AiFillStar/> : item.rating >= 2.5 ? <BsStarHalf/>: <AiOutlineStar/> }
{item.rating >=4  ? <AiFillStar/> : item.rating >= 3.5 ? <BsStarHalf/>: <AiOutlineStar/> }
{item.rating >=5  ? <AiFillStar/> : item.rating >= 4.5 ? <BsStarHalf/>: <AiOutlineStar/> }
<span> Reviews {item.numReviews}</span>
</div></div></div>
</>
  )
}
export default Itempage