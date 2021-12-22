import React from "react";
import {useState} from "react";

function Manajemenbuku({bookList, store}) {
    const[inputBook, setInputBook] = useState();
    function handleJudul(event) {
        setInputBook({...inputBook, judul : event.target.value})
    }
    function handlePengarang(event) {
        setInputBook({...inputBook, pengarang : event.target.value})
    }
    function handleHarga(event) {
        setInputBook({...inputBook, harga : event.target.value})
    }
    function handleStock(event) {
        setInputBook({...inputBook, stock : event.target.value})
    }
    function submitAdd(event) {
        event.preventDefault();
        store(inputBook);
    }
    console.log(bookList);
    return (
        <div className="container-mt3">
            <h1 className="">Manajemen Buku</h1>
            <div id="formTambah">
                <h5>Tambah Buku</h5>
                <hr />
                <form className="row" onSubmit={submitAdd}>
                    <div className="col-3">
                        <input type="text" name="judul" className="text-control mx-2" placeholder="Judul" onChange={handleJudul}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="judul" className="text-control mx-2" placeholder="Pengarang" onChange={handlePengarang}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="harga" className="text-control mx-2" placeholder="Harga" onChange={handleHarga}/>
                    </div>
                    <div className="col-2">
                        <input type="number" name="stock" className="text-control mx-2" placeholder="Stock" onChange={handleStock}/>
                    </div>
                    <div className="col-2">
                        <input type="submit" className="btn btn-primary ml-5" value="Simpan" />
                    </div>
                </form>
            </div>
            <div id="formUbah"></div>
            <div id="daftarBuku">
                <h2 className="mt-3">Daftar Buku</h2>
                <hr />
                <button className="btn btn-primary m-2">Tambah Buku</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th>Stock</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book, index) => (
                            <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {book.judul} </td>
                                <td> {book.pengarang} </td>
                                <td> {book.harga} </td>
                                <td> {book.stock} </td>
                                <td>
                                    <button className="btn btn-info mr-3">Edit</button>
                                    <button className="btn btn-danger">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Manajemenbuku;