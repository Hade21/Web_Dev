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
    alert("Data berhasil Ditambahkan!")
  }
  function updateData(inputBook) {
    console.log(inputBook);
    alert("Data berhasil Diperbarui!")
  }
  function deleteData(book) {
    console.log(book);
    alert("Data berhsil dihapus!")
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books}/>
          </Route>

          <Route path="/manajemenbuku" exact>
            <ManajemenBuku bookList={books} store={storeData} update={updateData} remove={deleteData}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
