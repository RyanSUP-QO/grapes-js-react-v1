export const EditorTemplate = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Canvas and Canvas top bar */}
      <div style={{ flexGrow: 1, height: "100vh" }}>
        <div
          style={{
            minHeight: "48px",
            background: "blue",
          }}
        />
        <div
          style={{
            minHeight: "100%",
            background: "red",
          }}
        />
      </div>
      <div style={{ width: "300px", background: "yellow" }}></div>
    </div>
  );
};
