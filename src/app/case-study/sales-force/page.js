"use client";
import styles from "./Sales.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const prcdata = [
  {
    prc_icon: "/images/prc1.png",
    prcCount: "1",
    prcTitle: "Plan",
    prcText:
      "A great product needs detailed planning. We make sure to devise a robust plan so that our product thrives at the end of the day.",
  },
  {
    prc_icon: "/images/prc2.png",
    prcCount: "2",
    prcTitle: "KickOff",
    prcText:
      "Analyzing the business, future goals, challenges of the organization and based on the findings, designing a workflow.",
  },
  {
    prc_icon: "/images/prc3.png",
    prcCount: "3",
    prcTitle: "Development",
    prcText:
      "From designing the framework to creating the code, every step is done under the Agile methodology.",
  },
  {
    prc_icon: "/images/prc4.png",
    prcCount: "4",
    prcTitle: "Testing",
    prcText:
      "Rigorous testing modules are executed to make sure no bugs are found at the delivery stage, ensuring a full-proof solution at the end.",
  },
  {
    prc_icon: "/images/prc5.png",
    prcCount: "5",
    prcTitle: "Launch",
    prcText:
      "Following meticulous testing and official approvals, the product is set to launch, making it accessible to the target audience.",
  },
  {
    prc_icon: "/images/prc6.png",
    prcCount: "6",
    prcTitle: "Support",
    prcText:
      "Development process does not end with deployment. If anything comes up, our software team is right there to fix things up.",
  },
];
export default function Sales() {
  useEffect(() => {
    const tlfour = gsap.timeline({
      scrollTrigger: {
        trigger: ".feat_global",
        start: "top",
        end: "+=80%",
        scrub: 1,
        pin: true,
      },
    });
    tlfour.from(".features", {
      x: 200,
    });
    tlfour.to(".features", {
      x: -1300,
    });

    return () => {
      tlfour.kill();
    };
  }, []);
  return (
    <>
      <div className={styles.inner_banner}>
        <div className="container">
          <div className={styles.inner_banner_text}>
            <h1>Salesforce CRM </h1>
            <p>
              Webello delivered a new CRM solution on top of the Salesforce
              platform, implementing most of the functionality using built-in
              Salesforce capabilities by fine-tuning and adapting them to the
              company’s needs.
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.bg_app}>
        <div className="container_cust">
          <Image src="/images/app_bg.jpg" width={1900} height={700} ale="" />
        </div>
      </div> */}
      <div className={styles.abt_app}>
        <div className="container_cust">
          <div className={styles.flex_row}>
            <div className={styles.app_info}>
              <p>
                VUE Maldives is a luxury destination management company that
                provides a curated collection of the most unique resorts in the
                Maldives. Their collection has been carefully selected and is
                amongst expert Travel Advisors that have spent time visiting and
                understanding what makes a resort unique and luxury. VUE
                Maldives was founded by Sue Kang, a Maldives Connoisseur. She
                has worked in the luxury travel sector in the USA, Caribbean and
                Asia.
              </p>
              <div className={styles.flex_inner}>
                <div className={styles.info_block}>
                  <h3>CLIENTS</h3>
                  <p>Vue Maldives Resorts</p>
                </div>
                <div className={styles.info_block}>
                  <h3>HIGHLIGHTS</h3>
                  <p>
                    Showcasing technical skill and battle-tested processes to
                    deliver a high-performing website.
                  </p>
                  <p>
                    ee how we helped an International Hospitality Brand grow
                    site traffic and engagement by developing a lightning-fast
                    new website.
                  </p>
                </div>
                <div className={styles.info_block}>
                  <h3>INDUSTRY</h3>
                  <p>Hospitality</p>
                </div>
              </div>
              <div className={styles.visit}>
                <button><span>Visit Website</span></button>
              </div>
            </div>
            <div className={styles.app_img}>
              <Image
                src="/images/app_img.png"
                width={700}
                height={700}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block2_info}>
        <Image src="/images/app_bg.jpg" width={1900} height={900} alt="" />
      </div>

      <div className={styles.approach_blk}>
        <div className="container">
          <h3>Approach</h3>
          <p>
            Our major goal was to build trust by presenting an innovative,
            growing business, without losing sight of the relationship focus the
            company had always been known for. Having a short timeframe to
            design, build, and write copy for such a complex website, our teams
            organizing ability and agility were put to the test. Drawing from an
            all-inclusive, well-thought-out and insightful strategy, we quickly
            moved to design, and copywriting to ensure development had the
            sufficient time it needed to deliver exceptional results.
          </p>
        </div>
      </div>

      <div className={`feat_global ${styles.our_process}`}>
        <h4>Our Process</h4>
        <h5>Phases of the Website Design and Development Process</h5>
        <div className={` features ${styles.process_row}`}>
          {prcdata.map((items, prc) => {
            return (
              <div className={styles.prc_box} key={prc}>
                <div className={styles.prc_icon}>
                  <Image src={items.prc_icon} width={42} height={42} alt="" />
                  <h2>{items.prcCount}</h2>
                </div>
                <div className={styles.prc_text}>
                  <h3>{items.prcTitle}</h3>
                  <p>{items.prcText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ height: "820px" }}></div>
      <div className={styles.goal_block}>
        <div className="container_cust">
          <div className={styles.flex_row}>
            <div className={styles.lef_block}>
              <div className={styles.text_bl}>
                <h3>01. THE CHALLENGE</h3>
                <p>
                  To begin with, we had to create a new brand from scratch that
                  stood out among a multitude of competitors, most of which were
                  targeting the same audience. This required a carefully curated
                  brand identity and a strategy to carry it off. Akal Tech also
                  presented another major challenge: creating a functional
                  website, brand book and a 3D walkthrough video whilst
                  commencing its marketing activities on really short notice.
                </p>
              </div>
              <div className={styles.img_bl}>
                <Image
                  src="/images/ind_bg.jpg"
                  width={700}
                  height={300}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.lef_block}>
              <div className={styles.img_bl}>
                <Image
                  src="/images/ind_bg.jpg"
                  width={700}
                  height={300}
                  alt=""
                />
              </div>
              <div className={styles.text_bl}>
                <h3>02. THE SOLUTION</h3>
                <p>
                  To create a new identity for Akal Tech, we employed robust
                  marketing using pre-launch creatives and branding strategies
                  that dug into Akal Tech’s business, including building their
                  persona, brand concepts and story propagated through a
                  custom-made brochure and other brand collaterals such as
                  stationery, carry bags etc. This laid the foundation for the
                  rest of our efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imgBlock}>
        <div className="container_cust">
          <Image src="/images/thumbs.webp" width={2000} height={700} alt="" />
        </div>
      </div>
    </>
  );
}
