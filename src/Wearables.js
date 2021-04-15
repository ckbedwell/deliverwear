import React from 'react'
import './Wearables.css'

import { WearableItem } from './WearableItem'

export const Wearables = () => {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    // get wearables
    console.log(`getting wearables`)
  }, [])

  return (
    <div className="wearables">
      {renderContent()}
    </div>
  )

  function renderContent() {
    if (items.length) {
      return items.map(item => {
        return (
          <WearableItem
            key={item.id}
            {...item}
          />
        )
      })
    }

    return (
      <div />
    )
  }
}
