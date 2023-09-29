function Frontend() {
  return (
    <div>
      {/* Progress bar HTML */}
      <div className="flex align-middle justify-center mt-5 mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">HTML</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-9/12"
            ></div>
          </div>
        </div>

        {/* Progress bar CSS */}
        <div className="flex align-middle justify-center mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">CSS</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-9/12"
            ></div>
          </div>
        </div>

        {/* Progress bar JavaScript */}
        <div className="flex align-middle justify-center mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">JS</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-7/12"
            ></div>
          </div>
        </div>

        {/* Progress bar TypeScript*/}
        <div className="flex align-middle justify-center mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">TS</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-5/12"
            ></div>
          </div>
        </div>

        {/* Progress bar TailwindCSS */}
        <div className="flex align-middle justify-center mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">Tailwind</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-6/12"
            ></div>
          </div>
        </div>

        {/* Progress bar React */}
        <div className="flex align-middle justify-center mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">React</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-7/12"
            ></div>
          </div>
        </div>
    </div>
  )
}

export default Frontend