import ContainerProps from "./props";
import './style.scss';

function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <main className='container'>
      {children}
    </main>
  );
};

export default Container;
