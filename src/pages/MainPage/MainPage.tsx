import Logo from '../../shared/ui/Logo/Logo';
import cls from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={cls.main}>
      <Logo />
      MainPage
    </div>
  );
};

export default MainPage;
