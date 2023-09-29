function Backend() {
  return (
    <div>
      {/* Progress bar Python */}
      <div className="flex align-middle justify-center mt-5 mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">Python</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-4/12"
            ></div>
          </div>
        </div>

        {/* Progress bar MySQL */}
        <div className="flex align-middle justify-center mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">MySQL</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-6/12"
            ></div>
          </div>
        </div>

        {/* Progress bar MongoDB */}
        <div className="flex align-middle justify-center mb-5">
          <h3 className="font-bold text-xl w-0.5 -mt-3">MongoDB</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-6/12"
            ></div>
          </div>
        </div>

        {/* Progress bar Prisma ORM */}
        <div className="flex align-middle justify-center mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">Prisma</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-4/12"
            ></div>
          </div>
        </div>

        {/* Progress bar Java */}
        <div className="flex align-middle justify-center mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">Java</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-3/12"
            ></div>
          </div>
        </div>

        {/* Progress bar Node.js */}
        <div className="flex align-middle justify-center mb-5">
          <h3 className="font-bold text-2xl w-0.5 -mt-3">Node.js</h3>

          <div className="w-80 bg-gray-800 rounded-full h-2.5 dark:bg-gray-400 ml-24">
            <div 
              className="bg-blue-600 h-2.5 rounded-full w-6/12"
            ></div>
          </div>
        </div>
    </div>
  )
}

export default Backend