import { useState } from 'react';

// CSS
import "../styles/Problem.css";

function Problem() {
  const [incomeValue, setIncomeValue] = useState('500');  // default as string
  const [expenseValue, setExpenseValue] = useState('450');

  const [yearsResult, setYearsResult] = useState(null);

  const handleIncomeSliderChange = (e) => {
    setIncomeValue(Number(e.target.value));
  };

  const handleExpenseSliderChange = (e) => {
    setExpenseValue(Number(e.target.value));
  };

  const handleIncomeInputChange = (e) => {
    const value = e.target.value;

    // Allow empty string so user can clear input
    if (value === '') {
      setIncomeValue('');
      return;
    }

    const parsed = parseFloat(value);
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 10000) {
      setIncomeValue(parsed);
    }
  };

  const handleExpenseInputChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setExpenseValue('');
      return;
    }

    const parsed = parseFloat(value);
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 10000) {
      setExpenseValue(parsed);
    }
  };

  const getBackgroundSize = (val) => {
    const percent = (val / 10000) * 100;
    return {
      background: `linear-gradient(to right, #D6B0BC 0%, #7053FF ${percent}%, #474747 ${percent}%, #474747 100%)`
    };
  };

  const handleRealityClick = () => {
    const income = Number(incomeValue);
    const expense = Number(expenseValue);

    if (isNaN(income) || isNaN(expense) || income <= expense) {
      setYearsResult('Never');
      return;
    }

    const monthlySavings = income - expense;
    const yearsToMillion = 1000000 / (monthlySavings * 12);
    const roundedYears = Math.ceil(yearsToMillion);

    setYearsResult(roundedYears);
  };

  return (
    <div className='Problem' id='problem'>
      <div className="problemBlock">
        <p className="blockSub">Problem</p>
        <p className="blockHead">What’s the cost of working without a clear strategy?</p>

        <div className="problemGrid">
          <div className='issue'>
            <div>
              <p className="gridHead" style={{ marginBottom: 15 }}>Interactive Calculator</p>
              <p className="desc">You’re on the default path — but at what cost? Take 30 seconds to see how many years it’s costing you.</p>
              <br /><br />
              <div className='range'>
                <div className='rangeInc'>
                  <p>Monthly Income, USD</p>
                  <input
                    type="number"
                    className='range-input'
                    value={incomeValue}
                    min={0}
                    max={10000}
                    onChange={handleIncomeInputChange}
                  />
                </div>
                <div className="range-slider">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={Number(incomeValue) || 0}
                    onChange={handleIncomeSliderChange}
                    className="slider"
                    style={getBackgroundSize(incomeValue)}
                  />
                </div>
                <div className='rangeStats' style={{ marginTop: 15 }}>
                  <p>0</p>
                  <p>10,000$</p>
                </div>
              </div>
              <br />
              <div className='range'>
                <div className='rangeInc'>
                  <p>Monthly Expenses, USD</p>
                  <input
                    type="number"
                    className='range-input'
                    value={expenseValue}
                    min={0}
                    max={10000}
                    onChange={handleExpenseInputChange}
                  />
                </div>
                <div className="range-slider">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={Number(expenseValue) || 0}
                    onChange={handleExpenseSliderChange}
                    className="slider"
                    style={getBackgroundSize(expenseValue)}
                  />
                </div>
                <div className='rangeStats' style={{ marginTop: 15 }}>
                  <p>0</p>
                  <p>10,000$</p>
                </div>
              </div>
              <br /><br />
            </div>
            <button className='wait herowait' onClick={handleRealityClick}>See the reality</button>
          </div>
          <div className='issue'>
            <p className="gridHead">
              {yearsResult !== null
                ? `Your current path to $1,000,000 will take roughly:`
                : 'At your current pace, reaching $1,000,000 will take:'}
            </p>
            <div className="reality-results" style={yearsResult !== null ? { display: "flex" } : { display: "none" }}>
              <span>
                {yearsResult === 'Never' ? 'Never' : `${yearsResult} years`}
              </span>
            </div>
            {yearsResult === 'Never' && (
              <center>
                <p className='issueGrad'>
                  Sounds like <span>you need our solution</span>
                </p>
              </center>
            )}
            <div style={{ display: yearsResult !== null ? 'none' : 'flex', flexDirection: "column", zIndex: 2 }}>
              <center>
                <div className="buttonBorder">
                  <button className='reality' onClick={handleRealityClick}>See the reality</button>
                </div>
              </center>
              <center><p className='issueGrad'>Click <span>“See the reality”</span> to calculate</p></center>
            </div>
            {yearsResult === null && (
              <svg width="544" height="182" viewBox="0 0 544 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.35">
                  <rect x="92.332" y="98.707" width="82.4147" height="82.4147" rx="20" fill="#161616" />
                  <rect x="92.832" y="99.207" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint0_linear_0_1)" stroke-opacity="0.15" />
                </g>
                <g opacity="0.5">
                  <rect y="98.707" width="82.4147" height="82.4147" rx="20" fill="#161616" />
                  <rect x="0.5" y="99.207" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint1_linear_0_1)" stroke-opacity="0.15" />
                </g>
                <rect x="184.602" y="98.707" width="82.4147" height="82.4147" rx="20" fill="#161616" />
                <rect x="185.102" y="99.207" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint2_linear_0_1)" stroke-opacity="0.15" />
                <rect x="276.867" y="98.707" width="82.4147" height="82.4147" rx="20" fill="#161616" />
                <rect x="277.367" y="99.207" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint3_linear_0_1)" stroke-opacity="0.15" />
                <g opacity="0.35">
                  <rect x="369.137" y="98.707" width="82.4147" height="82.4147" rx="20" fill="#161616" />
                  <rect x="369.637" y="99.207" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint4_linear_0_1)" stroke-opacity="0.15" />
                </g>
                <g opacity="0.5">
                  <rect x="461.586" y="98.707" width="82.4147" height="82.4147" rx="20" fill="#161616" />
                  <rect x="462.086" y="99.207" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint5_linear_0_1)" stroke-opacity="0.15" />
                </g>
                <rect x="92.332" width="82.4147" height="82.4147" rx="20" fill="#161616" />
                <rect x="92.832" y="0.5" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint6_linear_0_1)" stroke-opacity="0.15" />
                <g opacity="0.5">
                  <rect width="82.4147" height="82.4147" rx="20" fill="#161616" />
                  <rect x="0.5" y="0.5" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint7_linear_0_1)" stroke-opacity="0.15" />
                </g>
                <rect x="184.602" width="82.4147" height="82.4147" rx="20" fill="#161616" />
                <rect x="185.102" y="0.5" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint8_linear_0_1)" stroke-opacity="0.15" />
                <rect x="276.867" width="82.4147" height="82.4147" rx="20" fill="#161616" />
                <rect x="277.367" y="0.5" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint9_linear_0_1)" stroke-opacity="0.15" />
                <rect x="369.137" width="82.4147" height="82.4147" rx="20" fill="#161616" />
                <rect x="369.637" y="0.5" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint10_linear_0_1)" stroke-opacity="0.15" />
                <g opacity="0.5">
                  <rect x="461.586" width="82.4147" height="82.4147" rx="20" fill="#161616" />
                  <rect x="462.086" y="0.5" width="81.4147" height="81.4147" rx="19.5" stroke="url(#paint11_linear_0_1)" stroke-opacity="0.15" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_0_1" x1="92.332" y1="98.707" x2="174.747" y2="181.122" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_0_1" x1="82.4147" y1="98.707" x2="0" y2="181.122" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_0_1" x1="184.602" y1="98.707" x2="267.016" y2="181.122" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_0_1" x1="276.867" y1="98.707" x2="359.282" y2="181.122" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint4_linear_0_1" x1="451.551" y1="98.707" x2="369.137" y2="181.122" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint5_linear_0_1" x1="461.586" y1="98.707" x2="544.001" y2="181.122" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint6_linear_0_1" x1="92.332" y1="0" x2="174.747" y2="82.4147" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint7_linear_0_1" x1="82.4147" y1="0" x2="0" y2="82.4147" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint8_linear_0_1" x1="184.602" y1="0" x2="267.016" y2="82.4147" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint9_linear_0_1" x1="276.867" y1="0" x2="359.282" y2="82.4147" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint10_linear_0_1" x1="369.137" y1="0" x2="451.551" y2="82.4147" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint11_linear_0_1" x1="461.586" y1="0" x2="544.001" y2="82.4147" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#999999" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
          <div className="issue ellipse">
            <div>
              <p className="issueSub">Why is your path taking so long?</p>
              <p className="issueHead">This is the result of <span>working hard, not smart.</span></p>
            </div>
            <p className="issueHead issueHeadTwo">Your potential is enormous, but it’s wasted without a precise, mathematically sound plan.</p>
            <svg width="763" height="670" viewBox="0 0 763 670" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.35" filter="url(#filter0_f_1111_280)">
                <circle cx="626" cy="493" r="276" fill="url(#paint0_linear_1111_280)" />
              </g>
              <defs>
                <filter id="filter0_f_1111_280" x="0" y="-133" width="1252" height="1252" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_1111_280" />
                </filter>
                <linearGradient id="paint0_linear_1111_280" x1="350" y1="493" x2="902" y2="493" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#7053FF" />
                  <stop offset="1" stop-color="#D6B0BC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Problem