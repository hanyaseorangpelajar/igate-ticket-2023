import React from "react";

function EventDetails() {
  return (
    <div className="h-full">
      <div className="border-gray-400 border-dashed border-4 m-4 p-4">
        <h1 className="text-center text-2xl">Do's & Don'ts</h1>
        <div className="bg-white rounded m-4 p-4 text-justify text-black">
          <h2 className="text-xl">Do</h2>
          <div className="bg-green-400 rounded m-4 p-8">
            <ul className="list-disc">
              <li>Mematuhi peraturan yang ada.</li>
              <li>
                Berpakaian rapi sesuai dengan dresscode yang ditentukan
                (formal).
              </li>
              <li>
                Datang tepat waktu (open gate pada pukul 14.00 WIB dan close
                gate pada pukul 15.20 WIB).
              </li>
              <li>Kendaraan diparkirkan sesuai arahan dari panitia.</li>
              <li>Dianjurkan membawa obat-obatan pribadi jika diperlukan.</li>
              <li>Menunjukkan bukti pembelian tiket (*masih ditanyakan).</li>
              <li>Waspada dengan barang bawaan.</li>
              <li>Buang sampah pada tempat yang telah disediakan.</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded m-4 p-4 text-justify text-black">
          <h2 className="text-xl">Don'ts</h2>
          <div className="bg-red-300 rounded m-4 p-8">
            <ul className="list-disc">
              <li>Dilarang membawa benda tajam.</li>
              <li> Dilarang membawa vape/rokok.</li>
              <li>Dilarang menggunakan sandal jepit.</li>
              <li>Dilarang membawa narkotika.</li>
              <li>Dilarang membawa laser.</li>
              <li>Dilarang membawa alat tulis.</li>
              <li>Dilarang membawa senjata api.</li>
              <li>Dilarang membawa minuman keras.</li>
              <li>
                Dilarang membawa minuman dari luar (terutama kaleng dan botul).
              </li>
              <li>Dilarang membawa hewan peliharaan.</li>
              <li>Dilarang membawa drone.</li>
              <li>
                Dilarang membawa speaker (membuat gaduh saat acara berlangsung).
              </li>
              <li>Dilarang merusak fasilitas.</li>
              <li>Dilarang meninggalkan ruangan sebelum acara selesai.</li>
              <li>Dilarang membuang sampah sembarangan.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-gray-400 border-dashed border-4 m-4 p-4">
        <h1 className="text-center text-2xl">FAQ</h1>
        <div className="bg-white text-black rounded m-4 p-4 text-justify">
          <h2 className="bg-black text-white rounded p-2">
            I-GATE itu apa sih?
          </h2>
          <p>
            Informatics Gathering (I-GATE) merupakan kegiatan penyambutan
            mahasiswa tingkatan 2023 serta perkenalan dan pentas seni setiap
            tingkatan. Program ini bertujuan untuk meningkatkan rasa
            kekeluargaan dan mempererat kebersamaan antar keluarga Informatika
            Undip dan meningkatkan tali silaturahmi keluarga besar Informatika
            Undip. Selain itu, kegiatan I-GATE juga dapat mendukung terciptanya
            suasana yang kondusif dalam keluarga Informatika Undip.
          </p>
        </div>
        <div className="bg-white text-black rounded m-4 p-4 text-justify">
          <h2 className="bg-black text-white rounded p-2">
            Kapan dan dimana I-GATE diselenggarakan?
          </h2>
          <p>
            I-GATE akan dilaksanakan pada hari Sabtu, 9 Desember 2023 di Gedung
            Prof. Soedarto, S.H. Pastikan kamu segera datang untuk meramaikan
            acara I-GATE karena banyak keseruan yang bisa kamu dapatkan di sini!
            I-GATE akan open gate mulai pukul 14.00 Jangan lupa untuk dicatat
            yaa!
          </p>
        </div>
        <div className="bg-white text-black rounded m-4 p-4 text-justify">
          <h2 className="bg-black text-white rounded p-2">
            Di I-GATE ada apa aja sih?
          </h2>
          <p>
            Banyak sekali rangkaian acara seru-seruan bareng yang sudah menunggu
            mulai dari penampilan tiap angkatan, penyerahan awarding hingga
            puncak acara yang meriah.
          </p>
        </div>
        <div className="bg-white text-black rounded m-4 p-4 text-justify">
          <h2 className="bg-black text-white rounded p-2">
            Emangnya harga tiket I-GATE itu berapa sih?
          </h2>
          <p>
            Harga tiketnya 35k per orang. Tapi jangan khawatir! Harga tersebut
            sudah termasuk makanan dan minuman yang akan disediakan selama acara
            berlangsung
          </p>
        </div>
        <div className="bg-white text-black rounded m-4 p-4 text-justify">
          <h2 className="bg-black text-white rounded p-2">
            Bagaimana tata cara pembelian tiket online?
          </h2>
          <p>
            Bukalah online ticketing via https://itix.com/ Lalu scrull ke bagian
            pembayaran maka ditemukan QRIS untuk discan dan lakukanlah
            pembayaran (satu pembayaran hanya untuk satu orang) Scrull kebawah
            lagi maka ada form data diri dan upload bukti pembayaran, isi semua
            field dan pastikan data sudah benar.
          </p>
        </div>
        <div className="bg-white text-black rounded m-4 p-4 text-justify">
          <h2 className="bg-black text-white rounded p-2">
            Beli tiket offline?
          </h2>
          <p>
            Tidak disediakan. Seluruh pembelian tiket hanya dilakukan melalui
            web.
          </p>
        </div>
        <div className="bg-white text-black rounded m-4 p-4 text-justify">
          <h2 className="bg-black text-white rounded p-2">Dresscode</h2>
          <p>Jantan: Jas/Kemeja</p>
          <p>Perempuan: Dress atau Bawahan Rok</p>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
