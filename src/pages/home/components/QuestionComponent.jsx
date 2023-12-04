import { Link } from "react-router-dom";

const QuestionComponent = () => {
  return (
    <section className="py-5 md:flex">

      <div className="flex-1 bg-[#FAF8F8]">
        <div className="mx-auto ml-10">
          <div className="flex justify-between">
            <div className="text-white text-lg font-roboto font-bold mt-12">
              <h1 className="text-[#3F72AF] text-2xl">Tanya Properti</h1>
              <p className="text-black text-base font-normal mt-2">
                Ambil keputusan properti yang lebih
              </p>
              <p className="text-black text-base font-normal">
                percaya diri dengan saran dari para Pakar
              </p>
              <p className="text-black text-base font-normal">
                Properti di komunitas kami
              </p>
              <button className="bg-[#FF385C] text-white rounded-md mt-4 px-6 py-2 font-poppins font-bold">
                <Link to={'https://wa.me/+6281223781777'}>
                  Ajukan Pertanyaan
                </Link>
              </button>
            </div>
            <img
              src="src/assets/Saly.png"
              alt="Gambar"
              className="hidden md:inline-block md:w-285 md:h-273 mb-0 md:float-right"
            />
          </div>
          <div>
            <h1 className="text-center">
              <span className="text-black text-lg font-poppins font-semibold">Kategori</span>
            </h1>
            <div className="flex justify-center gap-2 items-center">
              <div className="text-center">
                <span className="text-[#FF385C] font-poppins">Properti Murah</span>
              </div>

              <div className="text-center">
                <span className="text-[#FF385C] font-poppins">Hunian Baru</span>
              </div>

              <div className="text-center">
                <span className="text-[#FF385C] font-poppins">Pertanyaan Tentang Apartemen</span>
              </div>
            </div>

            <div className="flex justify-center gap-2 items-center">
              <div className="text-center">
                <span className="text-[#FF385C] font-poppins">Pertanyaan Umum</span>
              </div>
              <div className="text-center">
                <span className="text-[#FF385C] font-poppins">Jual Rumah</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#3F72AF] pb-5">
        <div className="mx-auto text-white text-lg font-roboto font-semibold mb-6 ml-10">
          <h1 className="text-2xl mt-5">RUMAP.ID</h1>
          <p className="text-base mt-1 font-normal">Situs Online Jual Beli dan Sewa Properti</p>
        </div>

        <div className="grid grid-cols-2 gap-4 ml-10 mr-10">
          {/* Kolom Kiri */}
          <div className="space-y-5">
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Beli Rumah Baru</span>
              <span className="absolute right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white mt-5">
              <span className="text-white mr-2">Beli Apartemen Baru</span>
              <span className="absolute right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Sewa Rumah Second</span>
              <span className="absolute right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Sewa Ruko</span>
              <span className="absolute right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Beli Apartemen Second</span>
              <span className="absolute right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Beli Ruko Second</span>
              <span className="absolute right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Sewa Apartemen Second</span>
              <span className="absolute right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-5">
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Beli Kantor Baru</span>
              <span className="absolute right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Beli Rumah Lelang</span>
              <span className="absolute right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Sewa Kantor Second</span>
              <span className="absolute right-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Beli Apartemen Lelang</span>
              <span className="absolute right-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Beli Tanah Residensial</span>
              <span className="absolute right-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Beli Tanah Komersial</span>
              <span className="absolute right-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
            <div className="relative flex items-center border-b-[1px] border-white">
              <span className="text-white mr-2">Sewa Tanah Residensial </span>
              <span className="absolute right-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestionComponent;