function App() {
  return (
    <div className="grid lg:grid-cols-3 gap-4 p-4">
      <div className="bg-blue-500 h-24 rounded-lg flex items-center justify-center text-white order-4 lg:order-1">
        1
      </div>
      <div className="bg-green-500 h-24 rounded-lg flex items-center justify-center text-white order-2 lg:order-2">
        2
      </div>
      <div className="bg-red-500 h-24 rounded-lg flex items-center justify-center text-white order-3 lg:order-3">
        3
      </div>
      <div className="bg-yellow-500 h-24 rounded-lg flex items-center justify-center text-white order-1 lg:order-4">
        4
      </div>
      <div className="bg-purple-500 h-24 rounded-lg flex items-center justify-center text-white order-5 lg:order-5">
        5
      </div>
      <div className="bg-pink-500 h-24 rounded-lg flex items-center justify-center text-white order-6 lg:order-6">
        6
      </div>
    </div>
  );
}

export default App;
