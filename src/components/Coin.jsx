import s from "../components/style.module.css";

export function Coin({ name, icon, price, symbol }) {
  return (
    <div className={s.coin}>
      <h2>Name: {name}</h2>
      <img src={icon} alt="icon" className={s.img} />
      <h4>Price: {price}</h4>
      <h4>Symbol: {symbol}</h4>
    </div>
  );
}
