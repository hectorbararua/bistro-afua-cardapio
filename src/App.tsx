import { useState, useEffect } from 'react'
import './Global.css'
import Header from './components/Header/Header'
import SectionCard from './components/SectionCard/SectionCard'
import { FoodCategory, FoodItem, FoodType, typeList } from './Data/index'

function App() {

  const [search, setSearch] = useState('')
  const [cardList, setCardList] = useState<Partial<FoodType>>()

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

  return (
    <>
      <Header change={(e) => setSearch(e.target.value)} value={search} />
      <SectionCard list={cardList} />
    </>
  )
}

export default App
