export function NoPageFound() {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
  };
  const noFound = {
    color: "red",
    fontSize: "2rem",
    fontFamily: "Sans-Serif",
  };
  return (
    <div style={styles}>
      <h1 style={noFound}>404 Page Not Found :(</h1>
    </div>
  );
}
