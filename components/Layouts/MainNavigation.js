import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Task Manager</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Add Todos</Link>
          </li>
          <li>
            <Link href='/completed-todos'>Completed Todos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
