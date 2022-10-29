import cn from "classnames";
import { ReactNode } from "react";
import styles from "./alert.module.css";

export default function Alert({
  children,
  type,
}: {
  children: ReactNode;
  type: "success" | "error";
}) {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
