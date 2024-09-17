import clsx from "clsx";
import "./Alert.css";


export default function Alert({outlined, elevated, variant, children }) {
	return <p className={clsx("alert", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}>{children}</p>;
};