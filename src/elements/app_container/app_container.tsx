
export const AppContainer = () => {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(" ");
  };
  return <div>app_container</div>;
};
