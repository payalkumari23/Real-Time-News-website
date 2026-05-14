import React from 'react'

const Loader = ({ className }) => {
  return (
    <div className={`${className} flex items-center justify-center py-20`}>

<div
  className="p-4 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full transition-transform duration-1000"
>
  <div
    className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"
  ></div>
</div>

    </div>
  )
}

export default Loader
