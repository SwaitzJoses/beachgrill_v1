// import chicken from './../../assets/images/1.jpg'
import "./item.css";
import {AiOutlineStar, AiFillStar,  } from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import {Link} from 'react-router-dom'
const Items = ({ item }) => {
  console.log(item.image);
 

  return (
    <>
   
      <section className="item_container">
         <Link className='item_link' to={`/item/${item._id}`}>
          <p>{item.name}</p>
          <p>${item.price}</p>
         
          <img
            src={require(`./../../assets/images/${item.image}.jpg`)}
            className="item_image"
            alt="yum"
          />
    <div>{item.rating >=1  ? <AiFillStar/> : item.rating >= 0.5 ? <BsStarHalf/> : <AiOutlineStar/>  }
    {item.rating >=2  ? <AiFillStar/> : item.rating >=1.5 ? <BsStarHalf/> : <AiOutlineStar/> }
    {item.rating >=3  ? <AiFillStar/> : item.rating >= 2.5 ? <BsStarHalf/>: <AiOutlineStar/> }
    {item.rating >=4  ? <AiFillStar/> : item.rating >= 3.5 ? <BsStarHalf/>: <AiOutlineStar/> }
    {item.rating >=5  ? <AiFillStar/> : item.rating >= 4.5 ? <BsStarHalf/>: <AiOutlineStar/> }
    <span> Reviews {item.numReviews}</span>
    </div>
    </Link>
      </section>
    </>
  );
};
export default Items;
