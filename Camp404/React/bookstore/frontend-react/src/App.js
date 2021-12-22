import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Beranda from './components/beranda';
import Navbar from './components/navbar';
import ManajemenBuku from'./components/manajemenbuku';
import {useState} from "react";

function App() {
  const[books, setbooks] = useState(
    [
      {_id : 1, judul : "Laskar Pelangi", pengarang : "Andrea Hirata", harga : 80000, stock : 7},
      {_id : 2, judul : "Bumi", pengarang : "Tere Liye", harga : 85000, stock : 5}
    ]
  );
  function storeData(inputBook) {
    console.log(inputBook);
    alert("Data berhasil Ditambahkan")
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>

          <Route path="/manajemenbuku" exact>
            <ManajemenBuku bookList={books} store={storeData}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
