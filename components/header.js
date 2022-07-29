// https://react-icons.github.io/react-icons/
// npm install react-icons --save
import { FaHamburger } from 'react-icons/Fa';
import Link from 'next/link'

const Header = () => {
return (
    <header>
      <div>
        <FaHamburger />
      </div>
      <nav>
        <Link href="/"><a>Домой</a></Link>
        <Link href="/about"><a>O нас</a></Link>
        <Link href="/reviews"><a>Отзывы</a></Link>
        <Link href="/burgers"><a>Бургеры</a></Link>
      </nav>
    </header>
  );
};

export default Header;
