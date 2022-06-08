import ContainerProps from "./props";
import styles from './page-container.module.scss';

function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <main className={styles.container}>
      {children}
    </main>
  );
};

export default Container;
