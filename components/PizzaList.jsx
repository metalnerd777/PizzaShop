import PizzaCard from "./PizzaCard";
import styles from "../styles/PizzaList.module.css";
const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ex
        dignissimos harum deleniti ratione earum omnis est cupiditate magni
        autem!
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};
export default PizzaList;
