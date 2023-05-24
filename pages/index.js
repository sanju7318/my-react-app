import { useRouter } from 'next/router' ;


export default function Home() {
  const router = useRouter();
  
  return (<h1>{router.query.name ? `Hello ${router.query.name}` : "i dont know your name"}<br/>{router.query.age ? `age ${router.query.age}` :"i dont know your age"}</h1>);
}
