import Items from "../Items/Items";
import "./landing.css";
import items from "../../assets/data/data";

const Landing = () => {
  return (
    <>
      <p className="landing_menu">Menu</p>{" "}
      <section className="landing_container">
        
          {items.map((item) => (
            <Items key={item._id} item={item} />
          ))}
        
      </section>
    </>
  );
};
export default Landing;
