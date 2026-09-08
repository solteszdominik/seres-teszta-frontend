import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth: "var(--container-width)",
        margin: "0 auto",
        paddingLeft: "var(--page-padding)",
        paddingRight: "var(--page-padding)",
      }}
    >
      {children}
    </div>
  );
}
