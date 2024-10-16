import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import One from './one'

import Two from './two'




import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <One image="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg" title="thor"
    />
    <One image="https://sm.ign.com/ign_in/image/h/how-to-wat/how-to-watch-the-spider-man-movies-in-order_wxb1.jpg" title="thor"
    />
    <One image="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg" title="thor"
    />
   <Two image="https://sm.ign.com/ign_in/image/h/how-to-wat/how-to-watch-the-spider-man-movies-in-order_wxb1.jpg"  title="spider-man"
    />

  
  </StrictMode>,
)
