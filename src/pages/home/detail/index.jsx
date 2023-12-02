const HomeDetail = () => {
  return (
    <>
      <div className="px-10 py-8">
        <h2 className="text-2xl font-bold">The Mailbu Suites Balikpapan</h2>

        <div className="md:flex py-2">
          <ul className="flex-1 list-disc md:inline-flex md:gap-10">
            <li className="inline-block">4.83</li>
            <li>491 reviews</li>
            <li>Superhost</li>
            <li>Balikpapan Indonesia</li>
          </ul>
          <div>
            <ul className="inline-flex gap-10">
              <li>Share</li>
              <li>Favorite</li>
            </ul>
          </div>
        </div>

        <div className="flex py-3">
          <div className="flex-1">

          </div>
          <div className="flex-1">

          </div>
        </div>

        <div className="flex">
          <div className="flex-1">
            <h2 className="text-xl font-bold">Entire Vila hosted by Mr Irfan</h2>
            <ul className="flex-1 list-disc inline-flex gap-7 pb-5">
              <li className="inline-block">1 Guests</li>
              <li>1 Bedroom</li>
              <li>1 bed</li>
              <li>1 both</li>
            </ul>
            <hr className="pb-5" />
            <div className="flex gap-2 pb-5">
              <label htmlFor="">IC</label>
              <div>
                <h2 className="font-semibold">Mr Irfan is a Superhost</h2>
                <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
              </div>
            </div>
            <div className="flex gap-2 pb-5">
              <label htmlFor="">IC</label>
              <div>
                <h2 className="font-semibold">Mr Irfan is a Superhost</h2>
                <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
              </div>
            </div>
            <div className="flex gap-2 pb-5">
              <label htmlFor="">IC</label>
              <div>
                <h2 className="font-semibold">Mr Irfan is a Superhost</h2>
                <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
              </div>
            </div>
          </div>

          <div className="w-2/6 px-5">
            <div className="bg-white shadow-sm border rounded-lg px-5 py-5">
              <p className="flex justify-between py-5">
                <span className="font-bold text-lg"> Rp950 jt </span>
                <span className="">481 Reviews</span>
              </p>
              <div className="border rounded-lg mb-5">
                <div className="flex justify-between">
                  <div className="flex-1 p-5 border">
                    CHECK-IN <span className="block">5/8/2023</span>
                  </div>
                  <div className="flex-1 p-5 border">
                    CHECKOUT <span className="block">5/8/2023</span>
                  </div>
                </div>
                <div>
                  <select className="w-full p-5 rounded-lg" name="" id="">
                    <option value="">1 guest</option>
                    <option value="">2 guest</option>
                    <option value="">3 guest</option>
                  </select>
                </div>
              </div>
              <button className="btn w-full rounded-lg bg-blue-500 text-white text-lg font-semibold py-5">Reserve</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeDetail;