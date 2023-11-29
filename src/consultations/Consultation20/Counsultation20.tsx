import "./styles.css";

function Counsultation20() {
  const carName: string = "Ferrari";
  const carColor: string = "Red";
  const price: number = 100000;
  const carStores: string[] = ["Warsaw", "Berlin", "Munich"];

  const stores = carStores.map((store: string) => {
    console.log(store);
    return <li key={`car-stores-${Math.random()}`}>{store}</li>;
  });

  console.log(stores);
  return (
    <div className="counsultation20-wrapper">
      <p className="car-description-name">Car Description:</p>
      <p className="car-items">{carName}</p>
      <p className="car-items">{carColor}</p>
      <p className="car-items">{price}</p>
      <p className="car-description-name">Car stores</p>
      <ul>{stores}</ul>
    </div>
  );
}

export default Counsultation20;
