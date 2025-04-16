export const QueenOneCircuits = ({ zIndex }) => {
  return (
    <div
      className="circuit"
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: "url(./circuits.jpg)",
        backgroundSize: "cover",
        zIndex,
      }}
    >
      <img
        src="./image.png"
        style={{
          width: "25%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};
