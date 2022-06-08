import HeaderProps from "./props";
import styles from './section-header.module.scss';

function Header(props: HeaderProps) {
  const { theme, children } = props;

  return (
    <div className={`${styles.header} ${styles[theme]}`}>
      {children}
    </div>
  );
};

export default Header;
