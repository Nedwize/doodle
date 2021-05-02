import PlayerCard from "./PlayerCard";
import Bar from "./Bar";
// import Container from "../Container";

const positions = ["🥇", "🥈", "🥉", "😎", "🥳", "😒", "🥱", "😑", "😨", "💀"];

const PlayersBar = () => {
  return (
    <Bar>
      {positions.map((element) => {
        return (
          <PlayerCard>
            <h3 style={{ margin: "0" }}>{element}</h3>
            <h4 style={{ margin: "0" }}>Aman</h4>
            <h3 style={{ margin: "0", color: "#231fd3", paddingRight: "5px" }}>
              607
            </h3>
          </PlayerCard>
        );
      })}
    </Bar>
  );
};

export default PlayersBar;
