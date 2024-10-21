import styles from "./UserInput.module.css";

const UserInput = ({ userInput, onChange, ...rest }) => {
  const formatKey = (key) =>
    key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

  return (
    <section id={styles["user-input"]}>
      {Object.entries(userInput).map(([key, value]) => (
        <div key={key} className={styles["input-group"]}>
          <p>
            <label htmlFor={key}>{formatKey(key)}</label>
            <input
              id={key}
              type="number"
              required
              value={value}
              onChange={(e) =>
                onChange({
                  identifier: key,
                  newValue: e.target.value,
                })
              }
              {...rest}
            />
          </p>
        </div>
      ))}
    </section>
  );
};

export default UserInput;
