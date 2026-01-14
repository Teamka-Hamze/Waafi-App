import img from "../Mobile/mobile.svg";
import style from "../Mobile/style.module.css";

function Mobile() {
  return (
    <div>
      <div className={style.mobile}>
        <h1>Mobile Communication</h1>
        <p>
          Connect with your loved ones effortlessly while enjoying the most
          competitive rates available in the market.
        </p>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Mobile;
