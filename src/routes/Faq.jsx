import { useState, useEffect } from 'react';

// CSS
import "../styles/Faq.css";

// Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import JoinWishlist from '../components/JoinWishlist';
import Footer from '../components/Footer';

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

function Faq() {
  const [wish, setWish] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  // separate active indices per section; both default to first item opened
  const [activeGeneralIndex, setActiveGeneralIndex] = useState(0);
  const [activeAdditionalIndex, setActiveAdditionalIndex] = useState(0);

  const wishList = () => setWish(!wish);
  const sideBar = () => setSidebar(!sidebar);

  const toggleFaq = (section, index) => {
    if (section === 'general') {
      setActiveGeneralIndex(prev => (prev === index ? null : index));
    } else if (section === 'additional') {
      setActiveAdditionalIndex(prev => (prev === index ? null : index));
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && wish) {
        setWish(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [wish]);

  const generalFaqs = [
    {
      q: "What is Road To Millionaire?",
      a: "Road To Millionaire is an AI platform that, based on an analysis of a user’s unique life situation (including experience, skills, resources, acceptable risk level, and preferences), develops personalized strategies to reach the first one million dollars (in savings and assets) in the shortest, most efficient way. After the user chooses the most suitable strategy, the platform details it into a structured roadmap. The roadmap is then transformed into a set of concrete tasks, whose sequential execution directly leads to implementing the chosen strategy and achieving the financial goal."
    },
    {
      q: "Who is the platform for: beginners, entrepreneurs, investors, salaried employees?",
      a: "Road to Millionaire is suitable for anyone who wants to systematically reach $1 million, regardless of their starting point. For each category, we select our own strategies, roadmaps, and set of tasks. Categories: schoolchildren, students, employees, freelancers, entrepreneurs without a business, entrepreneurs with an existing business."
    },
    {
      q: "Do you guarantee I’ll reach $1M? What are the limitations?",
      a: "No, we do not guarantee a specific financial result. Reaching $1 million (in assets or savings over the expected period) depends on your actions, discipline, time, starting resources and market conditions. Our goal is to give you the best route and the opportunity to achieve it through actions. The movement along the route is on your side."
    },
    {
      q: "On average, how long does it take users to reach the goal?",
      a: "The time frame is very individual. It depends on your starting point, the chosen path, preferences, acceptable risk and regularity of actions. We do not promise a specific time frame, but we give a personal guideline in the form of a “goal achievement horizon” from which you can push off."
    },
    {
      q: "How are you different from courses, coaches, and financial advisors?",
      a: "We do not sell courses or give one-time consultations, but are a system for achieving the goal of $1,000,000 based on your personal and unique situation. We build a personal strategy for your experience, resources, time and risk profile, turn it into a step-by-step roadmap with tasks, constantly recalculate the plan when there are changes (through feedback with tasks and market trends) in your life and on the market, show scenarios and deviations from the trajectory, do not sell financial products and do not take a commission. We perform a completely different function."
    },
    {
      q: "How will you help me reach the first million?",
      a: "We turn the goal into a manageable process: (1) we conduct a deep diagnosis of your situation (skills, resources, risk profile, time) and preferences; (2) we select personal strategies with clear trade-offs and scenarios; you choose the strategy; (3) we turn the chosen strategy into a roadmap and prioritize weekly tasks with checkpoints; (4) we support execution where possible, we help resolve “snags”; (5) we calculate progress metrics and the trajectory to the goal; (6) we regularly recalculate the plan for your strategy. The platform does not manage money and does not give individual investment recommendations - we give you a strategy, a way to achieve it, tools, tasks and a general rhythm of execution for its implementation. It is as if you were working with a mentor who tells you how to complete a particular task."
    },
    {
      q: "Will I have to work, or will the platform do everything for me?",
      a: "You will have to work — and more than now. The platform does not make money or make deals for you; consider our solution as help: it removes the drugging — diagnoses your situation, selects a strategy, turns it into a step-by-step roadmap, prioritizes tasks, provides templates and instructions, tracks progress and recalculates the plan when changes occur. Your area of responsibility is decision-making and task execution (interviews, sales, skill upgrades, project launches, discipline); ours is the strategy, roadmap, tasks and timely prompting of the next step so that you move faster and in the right direction."
    },
    {
      q: "So with you I’ll be making $1,000,000 per month, right?",
      a: "No. Road to Millionaire does not promise $1,000,000 in monthly income. Our goal is the first million in your net worth over the forecast period, that is, in the total value of what you own minus your debts. Simply put: net worth = assets - liabilities. What we consider assets: money in accounts, money in goods, investments (stocks, bonds, ETFs, etc.), a share in a business, real estate and other liquid property."
    },
    {
      q: "How are you better than ChatGPT, Gemini, Claude?",
      a: "These models are universal interlocutors. Road To Millionaire is a narrowly tailored operating system for achieving $1M: we take your data (experience, resources, risk profile), build personal strategies; the approved one is transformed into a roadmap → specific tasks, we calculate the trajectory to the goal, track progress, remind, recalculate the plan when there are changes and filter out noise, relying on trends and proven approaches, and not on random intuition. In other words, chat AI gives decent answers what to do, and RTM organizes execution: focus, prioritization, metrics, responsibility and rhythm. We do not compete with them in conversationalism - we use such models as an engine inside, and for you we give the main thing: the path, pace and result."
    },
    {
      q: "I’m a salaried employee or I already run a business. How will Road To Millionaire help me?",
      a: "The main goal of our solution is to take you along the shortest and most realistic route. If you are an employee, we will determine where to increase revenue faster - within the current company or by changing the role/market - we will package the competencies and turn the selected track into a clear action plan. If you have an existing business, we will assess based on data whether it is capable of leading to the first million and, if so, we will form a strategy for pivot and/or scaling; if not, we will offer the fastest alternative. In all cases, we rely on trends, the market situation, research and metrics."
    }
  ];

  const additionalFaqs = [
    {
      q: "What do I need to get started?",
      a: "Subscribe and complete the onboarding — a detailed but convenient questionnaire that will help you accurately understand your situation (goals, experience, skills, resources, available time, risk level). It will take up to 1 hour, but this is a very important moment."
    },
    {
      q: "Can I start with no initial capital?",
      a: "Yes. Start-up capital is important for building a strategy, but it is not mandatory - we will select a route for any level, including zero."
    },
    {
      q: "Does the platform account for my country, labor market, and taxes?",
      a: "Yes, it does. But for complex legal and tax issues, we recommend consulting a specialist - their recommendations can be inserted into your plan within the platform."
    },
    {
      q: "How is the strategy recalculated when circumstances change?",
      a: "You have the opportunity to add data to the project or describe a limitation on one of the tasks. The platform will recalculate priorities, deadlines and scenarios, offer alternative steps and show what exactly has changed."
    },
    {
      q: "How can I compare several strategies before choosing?",
      a: "You can drill down into each strategy and see the scenarios, then choose one and get a roadmap right away."
    },
    {
      q: "In which countries and languages is the platform available?",
      a: "The platform works worldwide and takes into account your country and residence. Localization is available in: EN, RU, ES, DE, FR, PL, TR. When changing the country, the plan and scenarios are recalculated. New localizations will be added over time."
    },
    {
      q: "How do I contact support and how quickly do you respond?",
      a: "Write to hello@unite-venture.com - we usually respond within one business day; for complex requests - more than one day."
    },
    {
      q: "Can I work on multiple strategies in parallel?",
      a: "Not yet: to maintain focus and speed, one strategy is active."
    },
    {
      q: "What else can you tell me about the project?",
      a: "Hello everyone! We are currently at the MVP stage. If you are interested in the project and know how it can be improved, we are always for to talk to you. If you are interested in investing or helping the project, please write to hello@unite-venture.com. Thank you!)"
    }
  ];
  return (
    <div className='Faq'>
      <Sidebar sidebar={sideBar} show={sidebar} click={wishList} />
      <Navbar click={wishList} sidebar={sideBar} />
      <JoinWishlist effect={wish} click={wishList} />

      <div className="faq-desc-block">
        <div className="faq-desc">
          <div className="sub-head">
            <span>What is the real purpose of Road To Millionaire?</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1C7 4.31371 4.31371 7 1 7C4.31371 7 7 9.68629 7 13C7 9.68629 9.68629 7 13 7C9.68629 7 7 4.31371 7 1Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C13.3807 14.5 14.5 15.6193 14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C15.6193 14.5 14.5 13.3807 14.5 12Z" stroke="#A594FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <p className="faq-head">We created Road To Millionaire because the scarcest <span>resource isn’t money—it’s time.</span></p>
          <p className="faq-text">Too often we live on autopilot: working just to keep working and postponing “real life” for later. For us, a million isn’t a number cult; it’s a freedom threshold—the point where you can decide how to spend your days: on family, growth, and work that resonates. Our platform carefully turns a goal from dream into cadence: it removes noise, reduces the path to its essence, and adapts to change so you move not faster than everyone else, but truer to yourself. It doesn’t promise miracles or take steps for you; it gives you back control—clarity, focus, and footing—so your work finally works for you, not the other way around. We built it out of respect for your time: living matters more than endlessly “doing tasks.” Important: we don’t take the work away from you—we help you sharpen focus so your work is worth more. Yes, you’ll have to work intensely, but not “in general”—precisely where the payoff multiplies. Once you’ve earned, you set your own goals and choose what to spend your life on. Our role is to make the path shorter and more precise so you need less time for work—and have more time for your life.</p>
          <p className="faq-team">With respect for you and your time, The Road To Millionaire Team</p>
        </div>
      </div>

      <div className="faqs">
        <div className="faq-desc -two">
          <p className="faq-type">General</p>
          <ul>
            {generalFaqs.map((item, index) => (
              <li key={`gen-${index}`} onClick={() => toggleFaq('general', index)}>
                <div>
                  <p>{item.q}</p>
                  <i>
                    {activeGeneralIndex === index ? <FiMinus /> : <FiPlus />}
                  </i>
                </div>
                <span className={activeGeneralIndex === index ? "show" : ""}>
                  {item.a}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="faqs">
        <div className="faq-desc -two">
          <p className="faq-type">Additional</p>
          <ul>
            {additionalFaqs.map((item, index) => (
              <li key={`add-${index}`} onClick={() => toggleFaq('additional', index)}>
                <div>
                  <p>{item.q}</p>
                  <i>
                    {activeAdditionalIndex === index ? <FiMinus /> : <FiPlus />}
                  </i>
                </div>
                <span className={activeAdditionalIndex === index ? "show" : ""}>
                  {item.a}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
      <br /><br />
    </div>
  )
}

export default Faq