import { Children } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export const Home = () => {
  const start = 10;
  const value = useContext(CartContext)
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats   {start} </span>
        <div>
          Total Employees<span className="totalemp">{value}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{value}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{value}</span>
        </div>
        <div>
          Total New: <span className="total_new">{value}</span>
        </div>
      </div>
    </>
  );
};
