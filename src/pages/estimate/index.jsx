import { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import InputComponent from './components/InputComponent';

const Estimate = () => {
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
        data: [0, 1],
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
    setPrice()
    setInstalment()
    setDP()
    setIr()
  }, []);

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

      console.log(ir);
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
    <Navbar/>
    <h2 className="text-2xl font-bold my-5 mx-10">Estimasi KPR</h2>
    <div className="px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <InputComponent title={"harga properti"} value={price} onChange={(e) => setPrice(e.target.value)} />
        <InputComponent title={"Tenor"} value={instalment} onChange={(e) => setInstalment(e.target.value)} />
        <InputComponent title={"DP"} value={dp} onChange={(e) => setDP(e.target.value)} />
        <InputComponent title={"Suku Bunga"} value={ir} onChange={(e) => setIr(e.target.value)} />
      </div>
      <div className="w-52 mx-auto">
        <Doughnut data={data} />
      </div>
    </div>
    </>
  );
}

export default Estimate;