import { useEffect, useState } from "react";
import s from "./style.module.css";
import Axios from "axios";
import { Coin } from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=25").then(
      (resp) => {
        setCoins(resp.data.coins);
      }
    );
  }, []);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className={s.app}>
      <div className={s.cryptoHeader}>
        <input
          className={s.input}
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={s.cryptoDisplay}>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price.toFixed(3)}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
