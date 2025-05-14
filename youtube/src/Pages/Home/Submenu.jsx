import React from 'react'

const Submenu = () => {
  return (
    <div>
      <div className="flex justify-center flex-wrap gap-4 !ml-4 !p-2 overflow-x-auto w-full">
    {[
      "All",
      "Music",
      "News",
      "Mixes",
      "JavaScript",
      "Podcasts",
      "Masala films",
      "Live",
      "Indian Army",
      "Skills",
      "Marathi cinema",
      "Indian pop music",
      "Gaming",
    ].map((label, index) => (
      <button
        key={index}
        className={`px-4 py-1 !p-1 rounded-lg font-bold  ${
          label === "All"
            ? "bg-black text-white p-2"
            : "bg-gray-100 text-black hover:bg-gray-300 border border-gray-300"
        } text-sm font-medium transition duration-200 whitespace-nowrap cursor-pointer`}
      >
        {label}
      </button>
    ))}
  </div>
    </div>
  )
}

export default Submenu
