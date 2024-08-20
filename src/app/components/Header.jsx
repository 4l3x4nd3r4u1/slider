export default function Header() {
  return (
    <div>
      <header className="w-fit mx-auto">
        <h1 className="text-8xl tracking-tight font-light">Wishlist</h1>
        <p className="text-xs leading-[100%]">CREATE YOUR OBJECTS <br /> COLLECTION</p>
      </header>

      <div className="text-xs mt-16 flex justify-between px-2">
        <span className="underline">SORT THE LATEST</span>
        <span>2020</span>
        <span>ALL</span>
        <span>WHITE GRAY</span>
        <span>.NET</span>
      </div>
    </div>
  )
}
