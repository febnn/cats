import cls from './Logo.module.scss';
// import { classNames } from 'shared/lib/classNames';

const Logo = () => {
  return (
    <div className={cls.logoContainter}>
      <h1 className={cls.title}>CatWiki</h1>
      <img className={cls.image} src='cat-logo.png' alt='cat-logo' />
    </div>
  );
};

export default Logo;
