function Otros() {
  return (
    <div>
      {/* Progress bar Git */}
      <div className="flex align-middle justify-center mt-5 mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">Git</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-6/12"
            ></div>
          </div>
        </div>

        {/* Progress bar Office */}
        <div className="flex align-middle justify-center mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">Office</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-9/12"
            ></div>
          </div>
        </div>
    </div>
  )
}

export default Otros