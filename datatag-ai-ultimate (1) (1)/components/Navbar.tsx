
export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <div className="text-purple-400 font-bold">DataTag</div>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/admin">Admin</a>
      </div>
    </nav>
  );
}
