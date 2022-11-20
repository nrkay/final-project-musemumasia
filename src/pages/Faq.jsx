import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Faq() {
  return (
    <div className='faq'>
      <Navbar />
        <h1>FAQ</h1>
        <h2>Frequently Ask Question</h2>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                Apa itu Museum Asia?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <strong>Museum Asia</strong> adalah sebuah sistem informasi
                terkait benda-benda bersejarah negara yang ada di Asia.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                Bagaimana cara melakukan pendaftaran akun?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body">
                <ul>
                  <li>Masuk ke museum-asia.com lalu pilih “Daftar”</li>
                  <li>Masukkan email dan identitas lainnya</li>
                  <li>Klik lanjut</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                Apa manfaat dari website Museum Asia
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">
                <ul>
                  <li>
                    Menambah pengetahuan terkait benda bersejarah negara-negara
                    yang ada di Asia{" "}
                  </li>
                  <li>Mengetahui benda-benda penting di Asia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Faq