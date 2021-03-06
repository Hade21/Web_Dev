import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Beranda from './components/beranda';
import Navbar from './components/navbar';
import ManajemenBuku from'./components/manajemenbuku';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const[books, setBooks] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);
  
  function retrieveData() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function storeData(inputBook) {
    // console.log(inputBook);
    // alert("Data berhasil Ditambahkan!")
    axios
      .post("http://localhost:4000/book/add", inputBook)        //Request post ke db
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBook]);     //Update data ke frontend
        alert("Data berhasil ditambahkan..!");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  function updateData(inputBook) {
    // console.log(inputBook);
    // alert("Data berhasil Diperbarui!")
    axios
      .put("http://localhost:4000/book/update/" + inputBook._id, inputBook)    //Request put untuk update data
      .then((res) => {
        retrieveData();                                                       //Memanggil fungsi retrieveData untuk reload data
        alert("Data berhasil diupdate..!");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  function deleteData(book) {
    // console.log(book);
    // alert("Data berhsil dihapus!")
    axios
      .delete("http://localhost:4000/book/delete/" + book._id)  //Request delete ke db
      .then((res) => {
        retrieveData();                                         //Reload data
        alert("Data berhasil dihapus..!");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
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
