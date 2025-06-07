import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// TIP CALCULATOR, SAMPLE CHALLENGE CODE

// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [Bill, setBill] = useState(null);

//   return (
//     <div>
//       <TipCalculator bill={Bill} onBill={setBill} />
//     </div>
//   );
// }

// function TipCalculator({ bill, onBill }) {
//   const [per1, setper1] = useState(0);
//   const [per2, setper2] = useState(0);

//   const tip = (+bill * (per1 + per2)) / 200;

//   function handleReset() {
//     onBill(null);
//     setper1(0);
//     setper2(0);
//   }
//   return (
//     <div>
//       <BillInput bill={bill} onBill={onBill} />
//       <SelectPercentage per={per1} onChangePer={setper1}>
//         How much did you like the service?
//       </SelectPercentage>
//       <SelectPercentage per={per2} onChangePer={setper2}>
//         How much did your friend like the service?
//       </SelectPercentage>
//       <Output bill={bill} tip={tip} />
//       <Reset onReset={handleReset} />
//     </div>
//   );
// }

// function BillInput({ bill, onBill }) {
//   return (
//     <div>
//       <span>How much was the bill?</span>
//       <input
//         type="text"
//         placeholder="Bill value"
//         value={bill ?? ""}
//         onChange={(e) => onBill(e.target.value)}
//       />
//     </div>
//   );
// }

// function SelectPercentage({ children, per, onChangePer }) {
//   return (
//     <div>
//       <span>{children}</span>
//       <select value={per} onChange={(e) => onChangePer(Number(e.target.value))}>
//         <option value="0">0%</option>
//         <option value="5">5%</option>
//         <option value="10">10%</option>
//         <option value="20">20%</option>
//       </select>
//     </div>
//   );
// }

// function Output({ bill, tip }) {
//   if (!bill) return null;

//   return (
//     <h3>
//       You pay {+bill + +tip} ({+bill} + {+tip})
//     </h3>
//   );
// }

// function Reset({ onReset }) {
//   return <button onClick={onReset}>Reset</button>;
// }
