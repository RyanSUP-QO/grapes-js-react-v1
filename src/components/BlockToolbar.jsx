export default function BlockToolbar(props) {
  return (
    <>
      {props.blocks.map((b) => (
        <div
          draggable
          key={b.getId()}
          onDragStart={(ev) => props.dragStart(b, ev.nativeEvent)}
          onDragEnd={() => props.dragStop(false)}
        >
          {b.getLabel()}
        </div>
      ))}
    </>
  );
}
