const PropertyForm = () => {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Titipkan Properti Anda</h2>
        <form action="/proses_titip_properti" method="post">
          <div className="mb-4">
            <label htmlFor="status_unit" className="block text-sm font-medium text-gray-600">
              Status Unit Properti:
            </label>
            <select
              id="status_unit"
              name="status_unit"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="owner">Owner</option>
              <option value="agent">Agent</option>
            </select>
          </div>
  
          <div className="mb-4">
            <label htmlFor="jenis_properti" className="block text-sm font-medium text-gray-600">
              Jenis Properti:
            </label>
            <select
              id="jenis_properti"
              name="jenis_properti"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="rumah">Rumah</option>
              <option value="apartemen">Apartemen</option>
              <option value="tanah">Tanah</option>
            </select>
          </div>
  
          <div className="mb-4">
            <label htmlFor="deskripsi_properti" className="block text-sm font-medium text-gray-600">
              Deskripsi Properti:
            </label>
            <textarea
              id="deskripsi_properti"
              name="deskripsi_properti"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
  
          <h3 className="text-xl font-semibold mb-4">Informasi Anda</h3>
  
          {/* Form fields for Informasi Anda... */}
  
          <h3 className="text-xl font-semibold mb-4">Lokasi Properti Anda</h3>
  
          <div className="mb-4">
            <label htmlFor="peruntukan" className="block text-sm font-medium text-gray-600">
              Peruntukan:
            </label>
            <select
              id="peruntukan"
              name="peruntukan"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="sewa">Sewa</option>
              <option value="jual">Jual</option>
              <option value="sewa_dan_jual">Sewa dan Jual</option>
            </select>
          </div>
  
          {/* Other form fields for Lokasi Properti Anda... */}
  
          <div className="mb-4">
            <label htmlFor="nomor" className="block text-sm font-medium text-gray-600">
              Nomor:
            </label>
            <input
              type="text"
              id="nomor"
              name="nomor"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
  
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default PropertyForm;
  