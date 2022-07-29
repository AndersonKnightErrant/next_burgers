import Link from 'next/link';
import { useEffect } from 'react';
import {useRouter} from 'next/router';


const NotFountPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    },3000);
  }, []);
  return (
    <div className='not-found'>
      <h1>Oй</h1>
      <h2>Такой страницы здесь нет</h2>
      <p>Вы автоматически перейдете на <Link href="/"><a>главную страницу </a></Link>через 3 секунды...</p>
    </div>
  );
};

export default NotFountPage;