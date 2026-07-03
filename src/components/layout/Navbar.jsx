export default function Navbar() {
  return (
   <nav className="sticky top-0 z-50 w-full px-8 py-5 flex justify-between items-center border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="Mye Farm Logo"
    className="h-12 w-auto"
  />

  <div>
    <h1 className="text-2xl font-bold text-green-900">
      Mye Farm
    </h1>

    <p className="text-xs text-green-700 tracking-widest uppercase">
      Straight from Farmers to Your Kitchen
    </p>
  </div>
</div>

      <div className="flex gap-8 text-sm font-medium">
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}