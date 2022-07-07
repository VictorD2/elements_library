type AppContainerProps = {
  display?: string;
  bgColor?: string;
  children?: JSX.Element;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  className?: string;
};

export const AppContainer = ({ className, display = "flex", bgColor = "bg-white", children, flexDirection = "flex-row" }: AppContainerProps) => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(" ");
  };

  const setClassNames = (): string => {
    return classNames(display, bgColor, flexDirection, className);
  };

  return <div className={setClassNames()}>{children}</div>;
};
