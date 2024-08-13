import { useState } from 'react'

import './App.css'
import CardList from './components/CardList'

function App() {
  const [flashcards,setFlashcards] = useState(SAMPLE_FLASHCARD)

  return (
    <>
      <CardList flashcards={flashcards}/>
    </>
  )
}

const SAMPLE_FLASHCARD = [
  {
    id:1,
    ques: "What is the collective term for a group of owls ?",
    ans: "A Parliament",
    options:[
      "A Wisdom",
      "A Parliament",
      "A Bazaar",
      "A Study"
    ]
  },
  {
    id:2,
    ques: "Recently, which three names were given to the underwater structures in the Indian Ocean ?",
    ans: "Ashoka, Chandragupt, and Kalpataru",
    options:[
      "Ashoka, Chandragupt, and Kalpataru",
      "Chagos Ridge, Laccadive Plateau, and Seamount Chain",
      "Mumbai Ridge, Seychelles-Mauritius Plateau, and Ninety East Ridge",
      "Rodriguez Triple Junction, Carlsberg Ridge, and Andaman-Nicobar Trench"
    ]
  },
  {
    id:3,
    ques: "which state has become the first in country to implement a Disaster Risk Transfer Parametric Insurance Solution (DRTPS)?",
    ans: "Nagaland",
    options:[
      "Gujarat",
      "Tamil Nadu",
      "Nagaland",
      "Maharashtra"
    ]
  },
  {
    id:4,
    ques: "Legionnaires’ disease, recently seen in the news, is caused by which agent ?",
    ans: "Bacteria",
    options:[
      "Legionella pneumophila",
      "Bacteria",
      "Streptococcus pneumoniae",
      "Escherichia coli"
    ]
  },
  {
    id:5,
    ques: "What is ‘Glioblastoma’ ?",
    ans: "A type of brain or spinal cord cancer",
    options:[
      "Rare Blood Disorder",
      "Genetic Disorder",
      "A type of brain tumor",
      "A type of brain or spinal cord cancer"
    ]
  },
]

export default App
