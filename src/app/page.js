"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

const clLogo = [
  {client_logo: '/images/client_1.png'},
  {client_logo: '/images/client_2.png'},
  {client_logo: '/images/client_3.png'},
  {client_logo: '/images/client_4.png'},
  {client_logo: '/images/client_5.png'},
  {client_logo: '/images/client_6.jpg'},
  {client_logo: '/images/client_7.png'},
  {client_logo: '/images/client_8.png'},
  {client_logo: '/images/client_9.png'},
  {client_logo: '/images/client_10.png'},
  {client_logo: '/images/client_11.png'},
  {client_logo: '/images/client_12.png'},
  {client_logo: '/images/client_13.png'},
  {client_logo: '/images/client_14.png'},
  {client_logo: '/images/client_15.png'},
  {client_logo: '/images/client_16.png'},
  {client_logo: '/images/client_17.png'},
  {client_logo: '/images/client_18.png'},
  {client_logo: '/images/client_19.png'},
  {client_logo: '/images/client_20.png'},
]
const appServices = [
  {
    appLinkTo: "",
    appLinkImg: "/images/app_srvc_icon.webp",
    appSrvcTitle: "Application development",
    appSrvcText:
      "We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with industry experience.",
  },
  {
    appLinkTo: "",
    appLinkImg: "/images/app_srvc_icon.webp",
    appSrvcTitle: "Application security",
    appSrvcText:
      "We ensure enterprise-grade application security through audit, testing, secure development practices, and training.",
  },
  {
    appLinkTo: "",
    appLinkImg: "/images/app_srvc_icon.webp",
    appSrvcTitle: "Software product engineering",
    appSrvcText:
      "From MVP development to post-release support, we help our customers bring their products to market faster and with no pitfalls on the way.",
  },
  {
    appLinkTo: "",
    appLinkImg: "/images/app_srvc_icon.webp",
    appSrvcTitle: "Enterprise app integration",
    appSrvcText:
      "We integrate enterprise systems to create interconnected ecosystems for seamless enterprise management.",
  },
  {
    appLinkTo: "",
    appLinkImg: "/images/app_srvc_icon.webp",
    appSrvcTitle: "QA & testing",
    appSrvcText:
      "We make application testing a part of the software delivery cycle as well as offering it as a standalone service.",
  },
];

const clData = [
  {
    clTopHead: "$20bn",
    clDataTitle: "worth investment portfolios managed",
    clDataText:
      "A web-based investment portfolio management platform, TradeStops, serves 30,000+ North-American investors and features advanced risk management, intelligent alerts, and stock analytics.",
  },
  {
    clTopHead: "10x",
    clDataTitle: "faster pharmaceutical market analytics",
    clDataText:
      "12+ years of cooperation on a cloud-based data management, visualization and analytics suite for a US pharmaceutical multinational with 500 million patient records in data assets.",
  },
  {
    clTopHead: "20M+",
    clDataTitle: "customers enjoying AI-powered shopping",
    clDataText:
      "AI solutions for a global fashion retailer, including a predictive BI platform, a real-time recommendation engine, and a computer vision product recognition system, bring 8% higher conversions and cut infrastructure costs down by 50%.",
  },
  {
    clTopHead: "$50K",
    clDataTitle: "saved annually with DevOps for The Economist",
    clDataText:
      "Webello’s DevOps team fixed performance of The Economist’s microsites and went on to oversee their cloud environment setup, maintenance & optimization, saving the publisher $50K annually on infrastructure management only.",
  },
];

const recdata = [
  {
    recTitle: "1998 ",
    rectext: "founded",
  },
  {
    recTitle: "3000+ ",
    rectext: "engineers",
  },
  {
    recTitle: "800+ ",
    rectext: "clients served",
  },
  {
    recTitle: "5 ",
    rectext: "R&D labs",
  },
  {
    recTitle: "50 ",
    rectext: "clients of 5+ years",
  },
  {
    recTitle: "40 ",
    rectext: "countries on our global delivery map",
  },
];

const sliderData = [
  {
    slideTitle: "Customised Strategies",
    slideText:
      "We develop and integrate regulation-compliant digital solutions that cover the entire care delivery continuum.",
    backgroundImage: "/images/slide1_bg.jpg",
  },
  {
    slideTitle: "Proven Track Record",
    slideText:
      "From in-vehicle technology to dealership platforms, we offer a range of solutions for all value chain participants.",
    backgroundImage: "/images/slide_bg2.jpg",
  },
  {
    slideTitle: "Engagement Excellence",
    slideText:
      "Our solutions power all aspects of digital finance, analytics, and more, assuring against fraud and non-compliance.",
    backgroundImage: "/images/slide_bg3.jpg",
  },
  {
    slideTitle: "Team of Experts",
    slideText:
      "We automate online and offline retail operations with technologies ready for your growth and market changes.",
    backgroundImage: "/images/slide_bg4.jpg",
  },
  {
    slideTitle: "Customised Strategies",
    slideText:
      "We develop and integrate regulation-compliant digital solutions that cover the entire care delivery continuum.",
    backgroundImage: "/images/slide1_bg.jpg",
  },
  {
    slideTitle: "Proven Track Record",
    slideText:
      "From in-vehicle technology to dealership platforms, we offer a range of solutions for all value chain participants.",
    backgroundImage: "/images/slide_bg2.jpg",
  },
  {
    slideTitle: "Engagement Excellence",
    slideText:
      "Our solutions power all aspects of digital finance, analytics, and more, assuring against fraud and non-compliance.",
    backgroundImage: "/images/slide_bg3.jpg",
  },
  {
    slideTitle: "Team of Experts",
    slideText:
      "We automate online and offline retail operations with technologies ready for your growth and market changes.",
    backgroundImage: "/images/slide_bg4.jpg",
  },
  {
    slideTitle: "Customised Strategies",
    slideText:
      "We develop and integrate regulation-compliant digital solutions that cover the entire care delivery continuum.",
    backgroundImage: "/images/slide1_bg.jpg",
  },
  {
    slideTitle: "Proven Track Record",
    slideText:
      "From in-vehicle technology to dealership platforms, we offer a range of solutions for all value chain participants.",
    backgroundImage: "/images/slide_bg2.jpg",
  },
  {
    slideTitle: "Engagement Excellence",
    slideText:
      "Our solutions power all aspects of digital finance, analytics, and more, assuring against fraud and non-compliance.",
    backgroundImage: "/images/slide_bg3.jpg",
  },
  {
    slideTitle: "Team of Experts",
    slideText:
      "We automate online and offline retail operations with technologies ready for your growth and market changes.",
    backgroundImage: "/images/slide_bg4.jpg",
  },
  
];
export default function Home() {
  const [bgImage, setBgImage] = useState("/images/slide1_bg.jpg");

  const handleSlideEnter = (image) => {
    setBgImage(image);
  };

  const handleSlideLeave = () => {
    setBgImage(null);
  };

  const handleChange = () => {};
  const defaultValue = "How can we help you?";
  return (
    <>
      <div className={styles.home_banner}>
        <video autoPlay="" loop muted>
          <source src="/videos/header-video.mp4" type="video/mp4"></source>
        </video>
        <div className="container">
          <div className={styles.banner_content}>
            <h1>
            Enhance Your Brand's Visibility with Webello: Your Ultimate Solution for All Online Presence Needs.
            </h1>
            <h2>Crafting Strategies, Building Brands: Navigate the Digital Landscape Confidently.</h2>
            <button><span>Get In Touch with Our Expert Today</span></button>
          </div>
        </div>
      </div>
      <div className={styles.our_services}>
        <div className="container-fluid">
          <div className={styles.flex_row}>
            <div className={styles.srvc_tabs}>
              <h2>Our services</h2>
              <div className="tabs_paent">
                <div className={`global_tabs ${styles.bt_tabs}`}>
                  <Tabs
                    defaultActiveKey="application"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    
                    <Tab eventKey="application" title="360 Marketing">
                      <div className={styles.tabs_content}>
                        <h3>360 Marketing</h3>
                        <p>
                          Our software development company delivers corporate
                          and consumer applications based on our profound
                          understanding of technologies and the markets they
                          operate in. With our professional mindset, we look
                          beyond technology to offer viable solutions for your
                          particular business context.
                        </p>
                        <div className={styles.boxed_layout}>
                          {appServices.map((items, appSrvc) => {
                            return (
                              <div className={styles.srvc_block} key={appSrvc}>
                                <Link href={items.appLinkTo}>
                                  <div className={styles.flex_inner}>
                                    <Image
                                      src={items.appLinkImg}
                                      width={200}
                                      height={200}
                                      alt=""
                                    />
                                    <div className={styles.content_block}>
                                      <h4>{items.appSrvcTitle}</h4>
                                      <p>{items.appSrvcText}</p>
                                    </div>
                                  </div>
                                  <div className={styles.sent_to}>
                                    <Image
                                      src="/images/arrow.png"
                                      width={26}
                                      height={28}
                                      alt=""
                                    />
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="technology" title="Pay Per Click">
                      <div className={styles.tabs_content}>
                        <h3>Pay Per Click</h3>
                        <p>
                          Our software development company delivers corporate
                          and consumer applications based on our profound
                          understanding of technologies and the markets they
                          operate in. With our professional mindset, we look
                          beyond technology to offer viable solutions for your
                          particular business context.
                        </p>
                        <div className={styles.boxed_layout}>
                          {appServices.map((items, appSrvc) => {
                            return (
                              <div className={styles.srvc_block} key={appSrvc}>
                                <Link href={items.appLinkTo}>
                                  <div className={styles.flex_inner}>
                                    <Image
                                      src={items.appLinkImg}
                                      width={200}
                                      height={200}
                                      alt=""
                                    />
                                    <div className={styles.content_block}>
                                      <h4>{items.appSrvcTitle}</h4>
                                      <p>{items.appSrvcText}</p>
                                    </div>
                                  </div>
                                  <div className={styles.sent_to}>
                                    <Image
                                      src="/images/arrow.png"
                                      width={26}
                                      height={28}
                                      alt=""
                                    />
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="digital" title="SEO Services">
                      <div className={styles.tabs_content}>
                        <h3>SEO Services</h3>
                        <p>
                          Our software development company delivers corporate
                          and consumer applications based on our profound
                          understanding of technologies and the markets they
                          operate in. With our professional mindset, we look
                          beyond technology to offer viable solutions for your
                          particular business context.
                        </p>
                        <div className={styles.boxed_layout}>
                          {appServices.map((items, appSrvc) => {
                            return (
                              <div className={styles.srvc_block} key={appSrvc}>
                                <Link href={items.appLinkTo}>
                                  <div className={styles.flex_inner}>
                                    <Image
                                      src={items.appLinkImg}
                                      width={200}
                                      height={200}
                                      alt=""
                                    />
                                    <div className={styles.content_block}>
                                      <h4>{items.appSrvcTitle}</h4>
                                      <p>{items.appSrvcText}</p>
                                    </div>
                                  </div>
                                  <div className={styles.sent_to}>
                                    <Image
                                      src="/images/arrow.png"
                                      width={26}
                                      height={28}
                                      alt=""
                                    />
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="data" title="Digital Strategy">
                      <div className={styles.tabs_content}>
                        <h3>Digital Strategy</h3>
                        <p>
                          Our software development company delivers corporate
                          and consumer applications based on our profound
                          understanding of technologies and the markets they
                          operate in. With our professional mindset, we look
                          beyond technology to offer viable solutions for your
                          particular business context.
                        </p>
                        <div className={styles.boxed_layout}>
                          {appServices.map((items, appSrvc) => {
                            return (
                              <div className={styles.srvc_block} key={appSrvc}>
                                <Link href={items.appLinkTo}>
                                  <div className={styles.flex_inner}>
                                    <Image
                                      src={items.appLinkImg}
                                      width={200}
                                      height={200}
                                      alt=""
                                    />
                                    <div className={styles.content_block}>
                                      <h4>{items.appSrvcTitle}</h4>
                                      <p>{items.appSrvcText}</p>
                                    </div>
                                  </div>
                                  <div className={styles.sent_to}>
                                    <Image
                                      src="/images/arrow.png"
                                      width={26}
                                      height={28}
                                      alt=""
                                    />
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="intelligent" title="Web Development">
                      <div className={styles.tabs_content}>
                        <h3>Web Development</h3>
                        <p>
                          Our software development company delivers corporate
                          and consumer applications based on our profound
                          understanding of technologies and the markets they
                          operate in. With our professional mindset, we look
                          beyond technology to offer viable solutions for your
                          particular business context.
                        </p>
                        <div className={styles.boxed_layout}>
                          {appServices.map((items, appSrvc) => {
                            return (
                              <div className={styles.srvc_block} key={appSrvc}>
                                <Link href={items.appLinkTo}>
                                  <div className={styles.flex_inner}>
                                    <Image
                                      src={items.appLinkImg}
                                      width={200}
                                      height={200}
                                      alt=""
                                    />
                                    <div className={styles.content_block}>
                                      <h4>{items.appSrvcTitle}</h4>
                                      <p>{items.appSrvcText}</p>
                                    </div>
                                  </div>
                                  <div className={styles.sent_to}>
                                    <Image
                                      src="/images/arrow.png"
                                      width={26}
                                      height={28}
                                      alt=""
                                    />
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="enterprise" title="Social Media Marketing">
                      <div className={styles.tabs_content}>
                        <h3>Social Media Marketing</h3>
                        <p>
                          Our software development company delivers corporate
                          and consumer applications based on our profound
                          understanding of technologies and the markets they
                          operate in. With our professional mindset, we look
                          beyond technology to offer viable solutions for your
                          particular business context.
                        </p>
                        <div className={styles.boxed_layout}>
                          {appServices.map((items, appSrvc) => {
                            return (
                              <div className={styles.srvc_block} key={appSrvc}>
                                <Link href={items.appLinkTo}>
                                  <div className={styles.flex_inner}>
                                    <Image
                                      src={items.appLinkImg}
                                      width={200}
                                      height={200}
                                      alt=""
                                    />
                                    <div className={styles.content_block}>
                                      <h4>{items.appSrvcTitle}</h4>
                                      <p>{items.appSrvcText}</p>
                                    </div>
                                  </div>
                                  <div className={styles.sent_to}>
                                    <Image
                                      src="/images/arrow.png"
                                      width={26}
                                      height={28}
                                      alt=""
                                    />
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.our_clinets}>
        <div className={styles.bg_color}></div>
        <div className={styles.flex_row}>
          <div className={styles.clients_logo_block}>
            <div className={styles.logos_row}>
              {clLogo.map((item, logo) => {
                return (
                  <div className={styles.single_logo} key={logo}>
                    <Image src={item.client_logo} width={162} height={82} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.client_served}>
            <h3>800+ clients served</h3>

            <div className={styles.cl_data_row}>
              {clData.map((items, client) => {
                return (
                  <div className={styles.cl_data_col} key={client}>
                    <Link href="">
                      <h4>{items.clTopHead}</h4>
                      <h5>{items.clDataTitle}</h5>
                    </Link>
                    <p>{items.clDataText}</p>
                    <div className={styles.icon_block}>
                      <Link href="">
                        <div className={styles.arrow_icon}>
                          <Image
                            src="/images/arrow.png"
                            width={26}
                            height={28}
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.swiper_slider}>
        <div className="swiper-container">
          <div className="swiper-button image-swiper-button-next">
            <svg
              className="icon-arrow-svg"
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
            >
              <path
                d="M15 2L26 13M26 13L15 24M26 13L2 13"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="swiper-button image-swiper-button-prev">
            <svg
              className="icon-arrow-svg"
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
            >
              <path
                d="M15 2L26 13M26 13L15 24M26 13L2 13"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            freeMode={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1199: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
          >
            <div
              className={styles.bg_slider}
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            {sliderData.map((item, index) => (
              <SwiperSlide
                key={index}
                onMouseEnter={() => handleSlideEnter(item.backgroundImage)}
                onMouseLeave={handleSlideLeave}
              >
                <div className="slide_content">
                  <h3>{item.slideTitle}</h3>
                  <p>{item.slideText}</p>
                  <Link href="">
                    Learn More{" "}
                    <Image
                      src="/images/arrow_primary.png"
                      width={39}
                      height={38}
                      alt=""
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.ovrvr_block}>
        <div className="container">
          <div className={styles.flex_row}>
            <div className={styles.ovrvw_title_block}>
              <h3>Webello at a glance</h3>
            </div>
            <div className={styles.ovrvw_data}>
              {recdata.map((items, records) => {
                return (
                  <div className={styles.single_rec} key={records}>
                    <h4>{items.recTitle}</h4>
                    <p>{items.rectext}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.case_studies}>
        <div className={styles.flex_row}>
          <div className={styles.half_block}>
            <div className={styles.caseImage_block}>
              <Image
                src="/images/home_case1.webp"
                width={477}
                height={375}
                alt=" "
              />
            </div>
            <Link href="">
              <div className={styles.insigh_content}>
                <h4>Insights</h4>
                <h3>
                  Business intelligence in marketing: end-to-end solution
                  overview
                </h3>
                <p>
                  Learn how business intelligence transforms marketing by
                  exploring its common use cases, key integrations, benefits,
                  adoption challenges, and best practices.
                </p>
              </div>
            </Link>
          </div>
          <div className={styles.half_block_fullBG}>
            <div className={styles.caseImage_block}>
              <Image
                src="/images/home_case1.webp"
                width={477}
                height={375}
                alt=" "
              />
            </div>
            <Link href="">
              <div className={styles.insigh_content}>
                <h4>Case Study</h4>
                <h3>Stock trading software development for TradeSmith</h3>
                <p>
                  Webello delivered a set of financial technology tools for
                  individual investors to monitor investments, analyze stock
                  behavior, and manage risks.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.flex_row}>
          <div className={styles.half_block}>
            <Link href="">
              <div className={styles.insigh_content}>
                <h4>Insights</h4>
                <h3>
                  Business intelligence in marketing: end-to-end solution
                  overview
                </h3>
                <p>
                  Learn how business intelligence transforms marketing by
                  exploring its common use cases, key integrations, benefits,
                  adoption challenges, and best practices.
                </p>
              </div>
            </Link>
            <div className={styles.caseImage_block}>
              <Image
                src="/images/home_case1.webp"
                width={477}
                height={375}
                alt=" "
              />
            </div>
          </div>
          <div className={styles.half_block}>
            <Link href="">
              <div className={styles.insigh_content}>
                <h4>Insights</h4>
                <h3>
                  Business intelligence in marketing: end-to-end solution
                  overview
                </h3>
                <p>
                  Learn how business intelligence transforms marketing by
                  exploring its common use cases, key integrations, benefits,
                  adoption challenges, and best practices.
                </p>
              </div>
            </Link>
            <div className={styles.caseImage_block}>
              <Image
                src="/images/home_case1.webp"
                width={477}
                height={375}
                alt=" "
              />
            </div>
          </div>
        </div>
        <div className={styles.flex_row}>
          <div className={styles.half_block}>
            <Link href="">
              <div className={styles.insigh_content}>
                <h4>Insights</h4>
                <h3>
                  Business intelligence in marketing: end-to-end solution
                  overview
                </h3>
                <p>
                  Learn how business intelligence transforms marketing by
                  exploring its common use cases, key integrations, benefits,
                  adoption challenges, and best practices.
                </p>
              </div>
            </Link>
          </div>
          <div className={styles.half_block}>
            <div className={styles.caseImage_block}>
              <Image
                src="/images/home_case1.webp"
                width={477}
                height={375}
                alt=" "
              />
            </div>
            <Link href="">
              <div className={styles.insigh_content}>
                <h4>Insights</h4>
                <h3>
                  Business intelligence in marketing: end-to-end solution
                  overview
                </h3>
                <p>
                  Learn how business intelligence transforms marketing by
                  exploring its common use cases, key integrations, benefits,
                  adoption challenges, and best practices.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.flex_row}>
          <div className={styles.half_block}>
            <div className={styles.caseImage_block}>
              <Image
                src="/images/home_case1.webp"
                width={477}
                height={375}
                alt=" "
              />
            </div>
            <Link href="">
              <div className={styles.insigh_content}>
                <h4>Insights</h4>
                <h3>
                  Business intelligence in marketing: end-to-end solution
                  overview
                </h3>
                <p>
                  Learn how business intelligence transforms marketing by
                  exploring its common use cases, key integrations, benefits,
                  adoption challenges, and best practices.
                </p>
              </div>
            </Link>
          </div>
          <div className={styles.half_block_fullBG}>
            <div className={styles.caseImage_block}>
              <Image
                src="/images/home_case1.webp"
                width={477}
                height={375}
                alt=" "
              />
            </div>
            <Link href="">
              <div className={styles.insigh_content}>
                <h4>Case Study</h4>
                <h3>Stock trading software development for TradeSmith</h3>
                <p>
                  Webello delivered a set of financial technology tools for
                  individual investors to monitor investments, analyze stock
                  behavior, and manage risks.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.contact_form}>
        <div className="container">
          <div className={styles.flex_row}>
            <div className={styles.contact_bg}>
              <h3>
                Lets Get<span> Connect</span>
              </h3>
              <div className={styles.query_block}>
                <h4>Sales and general inquires</h4>
                <Link href="mailto:info@Webello.com">info@Webello.com</Link>
              </div>
              <div className={styles.query_block}>
                <h4>Want to join Webello?</h4>
                <Link href="">Explore careers</Link>
              </div>
            </div>
            <div className={styles.form_block}>
              <form>
                <div className={styles.forms_row}>
                  <div className={styles.form_gorup}>
                    <input
                      type="text"
                      value=""
                      placeholder="Full Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.form_gorup}>
                    <input
                      type="text"
                      value=""
                      placeholder="E-mail"
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.form_gorup}>
                    <input
                      type="text"
                      value=""
                      placeholder="Phone Number"
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.form_gorup}>
                    <input
                      type="text"
                      value=""
                      placeholder="Company"
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`${styles.form_grp_full} ${styles.form_gorup}`}
                  >
                    <textarea
                      defaultValue={defaultValue}
                      placeholder="Type something here..."
                    ></textarea>
                  </div>
                  <div
                    className={`${styles.form_grp_full} ${styles.form_gorup}`}
                  >
                    <p>
                      Please be informed that when you click the Send button
                      Webello Group will process your personal data in
                      accordance with our <Link href="">Privacy notice</Link>{" "}
                      for the purpose of providing you with appropriate
                      information.
                    </p>
                  </div>
                  <div className={styles.sub_attach}>
                    <button type="submit"><span>Send</span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
