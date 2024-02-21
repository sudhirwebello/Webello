"use client";
import styles from "./Ai.module.scss";
import Image from "next/image";

const expData = [
  {
    expTitle: "Predictive maintenance",
    Text1:
      "Benefit from AI possibilities and improve your fleet management and predictive resource consumption.",
    Text2: "Draw your knowledge from data.",
  },
  {
    expTitle: "NLP – chatbots",
    Text1:
      "Create a chatbot for your organisation and enjoy this AI feature implemented in messaging application.",
    Text2: "Optimise your customer services.",
  },
  {
    expTitle: "Recommendation engines",
    Text1:
      "Increase revenue by combining customer wants and needs with your offer.",
    Text2: "Rise sales and improve customer retention.",
  },
  {
    expTitle: "NLP – Sentiment analysis",
    Text1:
      "Engage specialized AI solutions and benefit from natural language processing and text analysis.",
    Text2: "Improve the quality of your communication.",
  },
  {
    expTitle: "Image analysis",
    Text1:
      "Analyse images, pull conclusions and forge solutions from your image assets.",
    Text2: "Draw knowledge from visual materials.",
  },
  {
    expTitle: "Timeseries",
    Text1:
      "Gain insights into your application behaviour and identify business occasions.",
    Text2: "Adapt your business model to changing requirements.",
  },
];
export default function Ai() {
  return (
    <>
      <div className="services_title">
        <div className="cust_container">
          <h1>
            AI & ML <span>Consulting</span>
          </h1>
          <p>
            Explore data-based business opportunities with external Artificial
            Intelligence (AI) & Machine Learning (ML) scientists.
          </p>
        </div>
      </div>
      <div className="banner_sample">
        <Image src="/images/srvc_bg.jpg" width={2560} height={1200} alt="" />
      </div>
      <div className="benefits_from">
        <div className="cust_container">
          <h3 className="common_title_service">
            <span>Benefit</span> from AI & ML
          </h3>
          <h4>
            Our team consists of experienced AI & ML engineers and academics.
          </h4>
          <p>
            Combining the worlds of technology and science generates the
            opportunity to look at your project from multiple perspectives and
            draw the most effective conclusions.
          </p>
        </div>
      </div>
      <div className="how_can_help">
        <div className="cust_container">
          <div className="srvc_row">
            <div className="help_text">
              <h3 className="common_title_service">
                Here’s how <span>we can help</span>
              </h3>
              <ul>
                <li>
                  <span>Business Value hypothesis exploration –</span> analyse
                  collected data in the way that brings best value and profit to
                  your organisation.
                </li>
                <li>
                  <span>Problem approach recommendation –</span> analyse your
                  challenges and receive recommendation on the ML or other
                  technology solution that best fit your organisation’s needs.
                </li>
                <li>
                  <span>Model success measures –</span> check the parameters of
                  your existing ML solution and optimise its possibilities.
                </li>
                <li>
                  <span>Audits –</span> get high quality information on your
                  current ML or AI solutions, make proper business decisions and
                  fully benefit from your systems.
                </li>
                <li>
                  <span>ML readiness assessment –</span> assess your existing
                  infrastructure and gathered data in terms of the readiness for
                  implementing ML solutions.
                </li>
                <li>
                  <span>Training –</span> train your internal team on how to
                  gather data and benefit from the ML solutions used in your
                  organisation.
                </li>
              </ul>
            </div>
            <div className="help_img">
              <Image src="/images/help.jpg" width={700} height={500} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="expertise">
        <div className="cust_container">
          <h3 className="common_title_service">
            We provide <span>expertise in:</span>
          </h3>
          <div className="expert_row">
            {expData.map((item, index) => {
              return (
                <div className="exp_block" key={index}>
                  <h4>{item.expTitle}</h4>
                  <p>{item.Text1}</p>
                  <p>{item.text2}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="how_can_help what_you_get">
        <div className="cust_container">
          <div className="srvc_row">
            <div className="help_text">
              <h3 className="common_title_service">
                What <span>will you get?</span>
              </h3>
              <ul>
                <li>
                  Access to<span> highly competent specialists</span> who will
                  share their unbiased opinion and knowledge with no need for
                  recruitment on the early stage of work
                </li>
                <li>
                  Lower risks and <span>better ROI</span> thanks to data-based
                  decision making
                </li>
                <li>
                  <span>Knowledge on opportunities</span> and challenges related
                  to AI & ML solutions
                </li>
                <li>
                  High quality <span>documentation with recommendations</span>{" "}
                  and planned project milestones
                </li>
                <li>
                  New <span>ideas for innovation</span> in your company and
                  exploring possibilities of smart organisation
                </li>
              </ul>
            </div>
            <div className="help_img">
              <Image src="/images/get.jpg" width={700} height={500} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="our_framework">
        <div className="cust_container">
          <div className="frame_row">
            <div className="text_block">
              <h3 className="common_title_service">
                AI & ML <span>delivery framework</span>
              </h3>
            </div>
            <div className="bx_block">
                <h4>Even though we approach each project differently and create custom AI & ML solutions, we have one framework when delivering them. </h4>
                <a href="">LEARN ABOUT OUR DELIVERY FRAMEWORK</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
