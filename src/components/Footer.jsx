export default function Footer({ items }) {
  let item = 0
  if (item === 0) return <footer className="stats">Daftar belanjaan masih kosong!</footer>;

  const totalItems = 0;
  const checkedItems =0;
  const percentage = 0;

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)
    </footer>
  );
}
