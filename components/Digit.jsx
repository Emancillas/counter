import st from "./styles/Digit.module.sass";

const Digit = ({ value, unit }) => {
  return (
    <div className={st.DigitCont}>
      <div className={st.Digit}>
        <span></span>
        <h1>{value < 10 ? `0${value}` : value}</h1>
      </div>
      <span className={st.label}>
        <h3>{unit}</h3>
      </span>
    </div>
  );
};

export default Digit;
