import ColumnProps from "./props";

function Column(props: ColumnProps) {
  const { flexSize, className, children } = props;

  return (
    <div className={`column ${className?.trim() || ''}`} style={{ flex: flexSize }}>
      {children}
    </div>
  );
};

export default Column;
