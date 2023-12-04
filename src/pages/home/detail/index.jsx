import { useState, useEffect } from 'react';
import Navbar from "../../../components/Navbar";
import { CiLocationOn } from "react-icons/ci";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

import InputComponent from './components/inputComponent';
import ListFacility from './components/ListFacility';
import ReserveComponent from './components/ReserveComponent';
import Footer from '../../../components/Footer';
import CommentComponent from './components/CommentComponent';
import { houses } from '../../../data/house';


const HomeDetail = () => {
  let { id } = useParams();
  console.log('ID:', id);
  const [filteredHouse, setFilteredHouse] = useState(houses.filter(item => item.id == id));
  const [price, setPrice] = useState(null);
  const [instalment, setInstalment] = useState(null);
  const [dp, setDP] = useState(null);
  const [ir, setIr] = useState(null);

  ChartJS.register(ArcElement, Tooltip, Legend);

  const [data, setData] = useState({
    labels: ['Total Pinjaman', 'Perbulan '],
    datasets: [
      {
        label: 'Rp',
        data: [1, 0],
        backgroundColor: [
          'rgba(63, 114, 175, 1)',
          'rgba(146, 169, 197, 1)',
        ],
        borderColor: [
          'rgba(63, 114, 175, 1)',
          'rgba(146, 169, 197, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const filteredResult = houses.filter(item => item.id == id);
    setFilteredHouse(filteredResult[0] || null);
  }, [id]);

  useEffect(() => {
    console.log(filteredHouse.detailImage);
    if (filteredHouse) {
      setPrice(filteredHouse.price)
      setInstalment(filteredHouse.instalment)
      setDP(filteredHouse.minimumDP)
      setIr(11)
    }
  }, [filteredHouse]);

  useEffect(() => {
    if (price && instalment && dp && ir) {
      const monthlyInstallment = calculateMonthlyInstallment(price, instalment, dp, ir);
      const totalInstallment = monthlyInstallment * instalment * 12;

      setData((prevChartData) => ({
        ...prevChartData,
        datasets: [
          {
            ...prevChartData.datasets[0],
            data: [totalInstallment, monthlyInstallment],
          },
        ],
      }));

    }
  }, [price, instalment, dp, ir]);


  function calculateMonthlyInstallment(loanAmount, annualInterestRate, dp, loanTermYears) {
    const loanAmountNow = loanAmount - (loanAmount * dp / 100);

    const monthlyInterestRate = loanTermYears / (12 * 100);

    const totalPaymentPeriods = annualInterestRate * 12;

    const monthlyInstallment = (loanAmountNow * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPaymentPeriods));

    return monthlyInstallment;
  }


  return (
    <>
      <Navbar />

      <div className="px-10 py-8 lg:w-9/12 xl:w-10/12 mx-auto">
        <h2 className="text-2xl font-bold">{filteredHouse.title}</h2>
        <div className="md:flex py-2">
          <ul className="flex-1 ml-5 md:ml-0 list-disc md:inline-flex md:gap-10">
            <li className="md:inline-block">{filteredHouse.star}</li>
            <li>{filteredHouse.reviews} reviews</li>
            <li>{filteredHouse.type}</li>
            <li>{filteredHouse.location}</li>
          </ul>
          <div>
            <ul className="inline-flex gap-10">
              <li className="text-blue-900">Share</li>
              <li className="text-blue-900">Favorite</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 py-3">
          <div className="flex-1">
            <img className="w-full rounded-lg" src={filteredHouse.image} alt="" />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {filteredHouse.detailImage && filteredHouse.detailImage.map((data) => (
                <img key={data.id} className="w-full h-60 rounded-lg" src={data.imageUrl} alt="" />
              ))}
            </div>
          </div>
        </div>

        <div className="md:flex mb-5">
          <div className="flex-1">
            <h2 className="text-xl font-bold">{filteredHouse.title}</h2>
            <ul className="flex-1 ml-5 md:ml-0 list-disc md:inline-flex gap-7 pb-5">
              <li className="md:inline-block">1 Guests</li>
              <li>1 Bedroom</li>
              <li>1 bed</li>
              <li>1 both</li>
            </ul>
            <hr className="pb-5" />
            {filteredHouse.listFacilities && filteredHouse.listFacilities.map((data) => (
              <ListFacility key={data.title} title={data.title} description={data.description} />
            ))}
          </div>

          <div className="lg:w-2/6 ml-3">
            <ReserveComponent price={price} reviews={'4.48'} onClick={() => { }} />
          </div>
        </div>

        <div className="border-y-2">
          <h3 className="mb-2 text-xl font-bold">Fasilitas Rumah</h3>
          <div className="md:flex mb-5">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 my-7">
              {filteredHouse.detailFacilities && filteredHouse.detailFacilities.map((data) => (
                <div key={data.facility} className="flex gap-2">
                  <CiLocationOn className="text-2xl" />
                  <p>{data.facility}</p>
                </div>
              ))}
            </div>
            <div className="my-auto">
              <button className=" text-black border-2 rounded-md px-4 py-2 hover:bg-blue-400 hover:text-white">Show all {filteredHouse.detailFacilities && filteredHouse.detailFacilities.length} facilitys </button>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-2">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-5">
          {filteredHouse.comment && filteredHouse.comment.map((data) => (
          <CommentComponent key={data.facility} image={data.imageUrl} name={data.name} date={data.date} description={data.description} />
          ))}
        </div>

        <hr className="w-full border-t-2" />
        <h3 className="mb-2 text-xl font-bold ">Estimasi KPR</h3>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <InputComponent title={"harga properti"} value={price} onChange={(e) => setPrice(e.target.value)} />
            <InputComponent title={"Tenor"} value={instalment} onChange={(e) => setInstalment(e.target.value)} />
            <InputComponent title={"DP"} value={dp} onChange={(e) => setDP(e.target.value)} />
            <InputComponent title={"Suku Bunga"} value={ir} onChange={(e) => setIr(e.target.value)} />
          </div>
          <div className="w-52 mx-auto">
            <Doughnut data={data} />
          </div>
        </div>
        <hr className="w-full mt-3 border-t-2" />


      </div>

      <Footer />

    </>
  );
}


export default HomeDetail;