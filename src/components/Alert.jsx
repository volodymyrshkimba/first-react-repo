import clsx from "clsx";
import css from "./Alert.module.css";


export default function Alert({outlined, elevated, variant, children }) {
	return <p className={clsx(css.alert,
		css[variant],
      outlined && css.isOutlined,
		elevated && css.isElevated
	)}>{children}</p>;
};