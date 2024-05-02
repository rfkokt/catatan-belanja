import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);


  return (
    <form className="add-form">
      <h3>Hari ini belanja apa kita?</h3>
      <select>

      </select>
      <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
      <button>Tambah</button>
    </form>
  );
}
