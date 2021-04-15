import './WearableItem.css'

export const WearableItem = ({ id, description, name, price }) => {
  return (
    <div className="wearableItem">
      <img
        src="/image-coming.jpg"
        width={200}
        height={200}
        alt={name}
      />
      <div style={{ marginLeft: 30 }}>
        <h2>{name}</h2>
        <div>{description}</div>
        <div>${price}</div>
        <div>
          <button onClick={handleClick}>Delete item</button>
        </div>
      </div>
    </div>
  )

  function handleClick() {
    // delete wearable
    console.log(`deleting wearable`)
  }
}
