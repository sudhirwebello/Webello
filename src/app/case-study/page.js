"use client"
import styles from "./Case.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
    return (
        <div className="main">
            <div className={styles.inner_banner}>
                <div className="container">
                    <div className={styles.inner_banner_text}>
                        <h1>Our work</h1>
                    </div>
                </div>
            </div>
            <div className={styles.case_studies}>
                <div className="container_cust">
                    <div className={styles.cust_heading}>
                        <h4><span>OUR WORK</span></h4>
                        <h3>Work That Excites Us</h3>
                        <p>Our portfolio consists of some compelling work that is a seamless blend of staggering design and effortless functionality. Quality, innovation, and originality are delivered timely through our bespoke mobile, web & digital solutions.</p>
                    </div>
                    <div className={styles.flex_row}>
                        <div className={styles.case_studies_bl}>
                            <div className={styles.img_bl}>
                               <Link href="/case-study/sales-force"> <Image src="/images/ind_bg.jpg" width={400} height={400} alt="" /></Link>
                            </div>
                            <div className={styles.case_text}>
                                <h5>real estate</h5>
                                <h6>akal tech infralogis-Complete real estate Branding</h6>
                            </div>
                        </div>
                        <div className={styles.case_studies_bl}>
                            <div className={styles.img_bl}>
                            <Link href="/case-study/sales-force"> <Image src="/images/ind_bg.jpg" width={400} height={400} alt="" /></Link>
                            </div>
                            <div className={styles.case_text}>
                                <h5>real estate</h5>
                                <h6>akal tech infralogis-Complete real estate Branding</h6>
                            </div>
                        </div>
                        <div className={styles.case_studies_bl}>
                            <div className={styles.img_bl}>
                            <Link href="/case-study/sales-force"> <Image src="/images/ind_bg.jpg" width={400} height={400} alt="" /></Link>
                            </div>
                            <div className={styles.case_text}>
                                <h5>real estate</h5>
                                <h6>akal tech infralogis-Complete real estate Branding</h6>
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
        </div>
    );
}