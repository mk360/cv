import ColumnProps from "./props";
import styles from './column.module.scss';

function Column(props: ColumnProps) {
  const { flexSize, className, children } = props;

  return (
    <div className={`${styles.column} ${styles[className?.trim() || '']}`} style={{ flex: flexSize }}>
      {children}
    </div>
  );
};

export default Column;
