import { useRef } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { ProductList } from '../ProductsList/ProductList';

function App() {
  const scrollTargetRef = useRef<HTMLDivElement>(document.createElement('div'));

  function scrollHandle() {
    scrollTargetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div>
      <Header scrollFN={scrollHandle} />
      <ProductList />
      <Footer scrollRef={scrollTargetRef} />
    </div>
  );
}

export default App;
