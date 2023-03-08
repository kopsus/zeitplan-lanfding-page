import React, { useState } from "react"
import "./App.css"

import { Squash as Hamburger } from "hamburger-react"

import brand from "./assets/brand.png"
import content from "./assets/content.png"
import content2 from "./assets/content2.png"
import code from "./assets/code.png"
import database from "./assets/database.png"
import user from "./assets/user.png"
import wifiOff from "./assets/wifi-off.png"
import bell from "./assets/bell.png"
import cloudOff from "./assets/cloud-off.png"
import trash from "./assets/trash.png"
import video from "./assets/video.png"
import star from "./assets/star.png"
import person from "./assets/person.png"
import ig from "./assets/instagram.png"
import fb from "./assets/facebook.png"
import twitter from "./assets/twitter.png"

function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="App">
      <div id="home" className="section-color">
        <nav>
          <div className="brand">
            <div className="brand">
              <img className="brand-img" src={brand} alt="brand" />
            </div>
            <a href="#home">
              <p className="brand">ZEITPLAN</p>
            </a>
          </div>
          <div className="navbar-tablet">
            <a href="#home">
              <p>Home</p>
            </a>
            <a href="#fitur">
              <p>Fitur - Fitur</p>
            </a>
            <a href="#testimoni">
              <p>Testimoni</p>
            </a>
          </div>
          <div className="hamburger">
            <Hamburger
              onToggle={(toggled) => {
                if (toggled) {
                  // open a menu
                  setOpen(true)
                } else {
                  // close a menu
                  setOpen(false)
                }
              }}
            />
          </div>
          {isOpen ? (
            <ul className="isClose">
              <a href="#home">
                <li>Home</li>
              </a>
              <a href="#fitur">
                <li>Fitur-Fitur</li>
              </a>
              <a href="#testimoni">
                <li>Testimoni</li>
              </a>
            </ul>
          ) : (
            <ul>
              <li>Home</li>
              <li>Fitur-Fitur</li>
              <li>Testimoni</li>
            </ul>
          )}
        </nav>
        <div className="wrapper">
          <div className="content">
            <img className="content-img" src={content} alt="content" />
          </div>
          <div className="text-wrapper">
            <h1>Sebuah cara mudah mengatur jadwal kuliah kamu</h1>
            <p className="desc-wrapper">
              Datang kuliah terlambat karena ketiduran itu tidak masalah. datang
              kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini
              adalah sahabat kamu sekarang, brodie~
            </p>
            <button className="btn-learn-more btn">Learn More</button>
            <button className="btn-play-demo btn">Play Demo</button>
          </div>
        </div>
      </div>
      <section className="why">
        <div className="desc-why">
          <h1>Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?</h1>
          <p className="desc-fitur">
            Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang
            gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba
            logout sendiri, untung gak berdua.
          </p>
        </div>
        <div className="card">
          <div className="item-card">
            <div className="content-card">
              <div className="img-card">
                <img src={database} alt="database" />
              </div>
              <p>Aplikasi Gratis</p>
            </div>
            <p>
              Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu
              akan kami jual ke agen khusus US.
            </p>
          </div>
          <div className="item-card">
            <div className="content-card">
              <div className="img-card">
                <img src={wifiOff} alt="wifiOff" />
              </div>
              <p>Kode OTP error</p>
            </div>
            <p>
              Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba
              berulang kali sampe bisa.
            </p>
          </div>
          <div className="item-card">
            <div className="content-card">
              <div className="img-card">
                <img src={user} alt="user" />
              </div>
              <p>User</p>
            </div>
            <p>
              Data tidak disimpan dengan baik dan rentan bocor, jangan heran
              data lo tiba-tiba ada di deepweb.
            </p>
          </div>
          <div className="item-card">
            <div className="content-card">
              <div className="img-card">
                <img src={code} alt="code" />
              </div>
              <p>Biasanya error</p>
            </div>
            <p>
              Ketika submit data biasanya error di bagian ajax-nya, eh nggak
              deng itu aplikasi pemerintah~
            </p>
          </div>
        </div>
      </section>
      <section id="fitur" className="fitur">
        <div className="parent-fitur">
          <div className="desc-fitur">
            <h1>
              Memangnya ada fitur apa aja sih di aplikasi yang katanya keren
              ini? Jadi penasaran nich~
            </h1>
            <p>
              Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan
              apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah
              tapi jarang masuk, titip absen doang!
            </p>
          </div>
          <div className="card-fitur">
            <div className="content-card-fitur">
              <div className="img-card-fitur">
                <img src={cloudOff} alt="cloud-off" />
              </div>
              <p className="title-fitur">Tidak Tersimpan Otomatis</p>
              <p>
                Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.
              </p>
            </div>
            <div className="content-card-fitur">
              <div className="img-card-fitur">
                <img src={video} alt="video" />
              </div>
              <p className="title-fitur">Si Rizal Ngga Pernah Ngonten</p>
              <p>
                Emang sih dia gak pernah ngonten, do’ain ya biar mau ngonten.
              </p>
            </div>
            <div className="content-card-fitur">
              <div className="img-card-fitur">
                <img src={trash} alt="trash" />
              </div>
              <p className="title-fitur">Terhapus Otomatis</p>
              <p>
                Data lo bakal kehapus otomatis tiap hari, biar hemat server
                kita.
              </p>
            </div>
            <div className="content-card-fitur">
              <div className="img-card-fitur">
                <img src={bell} alt="bell" />
              </div>
              <p className="title-fitur">Ngga Tau Lagi gw</p>
              <p>
                Mikir teks buat konten susah bro, ini aja ngasal masih susah!
              </p>
            </div>
          </div>
        </div>
        <div className="content2">
          <img className="img-content2" src={content2} alt="content2" />
        </div>
      </section>
      <section id="testimoni" className="section-color">
        <h1>Apa Kata Manusia Tentang Aplikasi Keren Ini?</h1>
        <p className="desc-testimoni">
          Kami tidak memfilter semua review, males soalnya. Jadi semua yang
          ditampilkan di sini semuanya asli tanpa reksadana.
        </p>
        <div className="parent-card-testimoni">
          <div className="card-testimoni">
            <div className="star">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>
              “Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid
              saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu
              kuliah nomor satu! 👈😎👉”
            </p>
            <div className="person">
              <div className="img-testimoni">
                <img className="person-img" src={person} alt="person" />
              </div>
              <div className="desc-person">
                <p className="name">Tegar Setio</p>
                <p className="position">Dosen Universitas Indonesia</p>
              </div>
            </div>
          </div>
          <div className="card-testimoni">
            <div className="star">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>
              “Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid
              saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu
              kuliah nomor satu! 👈😎👉”
            </p>
            <div className="person">
              <div className="img-testimoni">
                <img className="person-img" src={person} alt="person" />
              </div>
              <div className="desc-person">
                <p className="name">Tegar Setio</p>
                <p className="position">Dosen Universitas Indonesia</p>
              </div>
            </div>
          </div>
          <div className="card-testimoni">
            <div className="star">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>
              “Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid
              saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu
              kuliah nomor satu! 👈😎👉”
            </p>
            <div className="person">
              <div className="img-testimoni">
                <img className="person-img" src={person} alt="person" />
              </div>
              <div className="desc-person">
                <p className="name">Tegar Setio</p>
                <p className="position">Dosen Universitas Indonesia</p>
              </div>
            </div>
          </div>
          <div className="card-testimoni">
            <div className="star">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>
              “Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid
              saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu
              kuliah nomor satu! 👈😎👉”
            </p>
            <div className="person">
              <div className="img-testimoni">
                <img className="person-img" src={person} alt="person" />
              </div>
              <div className="desc-person">
                <p className="name">Tegar Setio</p>
                <p className="position">Dosen Universitas Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <footer>
          <div>
            <div className="brand-footer">
              <img src={brand} alt="brand" />
              <p className="brand">ZEITPLAN</p>
            </div>
            <p className="desc-footer">
              Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah,
              jadwal mabar, jadwal makan, jadwal liga inggris, dan jadwal-jadwal
              lainnya. Walaupun banyak error, setidaknya kami sudah berusaha
              semaksimal mungkin.
            </p>
          </div>
          <div className="sosmed">
            <p className="title-footer-sosmed">Tetap Terhubung</p>
            <p>Lihat kami pansos di sosial media berikut:</p>
            <div className="icon-footer">
              <div className="icon-sosmed">
                <img src={ig} alt="" />
              </div>
              <div className="icon-sosmed">
                <img src={fb} alt="" />
              </div>
              <div className="icon-sosmed">
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
        </footer>
        <p className="copy-right">COPYRIGHT ©2021. DESIGN BY TEGAR</p>
      </section>
    </div>
  )
}

export default App
