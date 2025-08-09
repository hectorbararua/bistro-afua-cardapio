import { useState, useEffect } from 'react'
import './Global.css'
import Header from './components/Header/Header'
import SectionCard from './components/SectionCard/SectionCard'
import { FoodCategory, FoodItem, FoodType, typeList } from './Data/index'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop'

function App() {

  const [search, setSearch] = useState('')
  const [cardList, setCardList] = useState<Partial<FoodType>>()
  const [activeCategory, setActiveCategory] = useState<string>('Entrada')
  const [isScrolling, setIsScrolling] = useState(false)

  const filterList = (list: FoodType, search: string) => {
    if (!search) {
      return list;
    }
    const filteredList: Partial<FoodType> = {}
    Object.keys(list).forEach(item => {
      if (list[item as FoodCategory].some(i => i.name.toLowerCase().includes(search.toLowerCase()))) {
        filteredList[item as FoodCategory] = list[item as FoodCategory].filter((food: FoodItem) => food.name.toLowerCase().includes(search.toLowerCase()))
      }
    })
    return filteredList as FoodType
  }

  useEffect(() => {
    const filteredCardList: FoodType = filterList(typeList, search)
    setCardList(filteredCardList)
  }, [search])

  // Detectar a categoria atual baseada na rolagem
  useEffect(() => {
    let scrollTimeout: number | null = null;
    
    const handleScroll = () => {
      // Se já estivermos em uma operação de scroll manual, não detectamos categoria
      if (isScrolling) return;
      
      // Definir um timeout para limitar a frequência de atualização
      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }
      
      scrollTimeout = window.setTimeout(() => {
        // Selecionando especificamente as seções de categoria
        const sections = document.querySelectorAll('.category-section');
        
        // Se não houver seções, não faz nada
        if (sections.length === 0) return;
        
        // Se estivermos no topo da página, ative a primeira categoria
        if (window.scrollY < 200) {
          setActiveCategory('Entrada');
          return;
        }
        
        // Encontrar a seção que está mais visível na viewport
        let mostVisibleSection = '';
        let largestVisibleArea = 0;
        
        sections.forEach((section) => {
          const el = section as HTMLElement;
          const rect = el.getBoundingClientRect();
          const visibleHeight = Math.min(window.innerHeight, rect.bottom) - 
                               Math.max(0, rect.top);
          
          if (visibleHeight > largestVisibleArea && el.id) {
            largestVisibleArea = visibleHeight;
            mostVisibleSection = el.id;
          }
        });
        
        // Se encontramos uma seção visível, a tornamos ativa
        if (mostVisibleSection && mostVisibleSection !== activeCategory) {
          console.log('Nova categoria ativa pelo scroll:', mostVisibleSection);
          setActiveCategory(mostVisibleSection);
        }
      }, 100); // Throttle de 100ms
    };

    // Manipulador de evento para atualização forçada da categoria
    const handleForceUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.categoryId) {
        console.log('Atualização forçada da categoria:', customEvent.detail.categoryId);
        setActiveCategory(customEvent.detail.categoryId);
        
        // Definir isScrolling como true para impedir detecção durante a animação de scroll
        setIsScrolling(true);
        
        // Resetar isScrolling após a animação de scroll terminar (aproximadamente 1000ms)
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('forceUpdateCategory', handleForceUpdate as EventListener);
    
    // Executa após o carregamento da página
    setTimeout(handleScroll, 300);
    
    return () => {
      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('forceUpdateCategory', handleForceUpdate as EventListener);
    };
  }, [activeCategory, isScrolling]);

  return (
    <>
      <Header change={(e) => setSearch(e.target.value)} value={search} activeCategory={activeCategory} />
      <SectionCard list={cardList} />
      <ScrollToTopButton />
    </>
  )
}

export default App
