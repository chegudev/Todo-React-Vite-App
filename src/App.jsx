import './App.css'
function App() {
  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-VDBlue bg-bgDarkImage bg-no-repeat'>
      <div className='bg-VDDBlue p-6 rounded shadow-md w-full max-w-lg lg:w-1/4'>
      <h1 className='text-3xl font-bold text-center mb-4 text-LgBlue'>Todo App</h1>
      <div className='flex'>
      <input
      type="text"
      placeholder='Add a todo'
      className='py-2 px-4 border rounded w-full focus:outline-none mr-2'
      />
      <button className='bg-gradient-to-r from-light to-Pink text-white py-2 px-4 rounded'>
      Add
      </button>
      </div>
      </div>
    </div>
  )
}
export default App;