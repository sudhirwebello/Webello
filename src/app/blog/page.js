"use client";
import Image from "next/image";
import styles from "./blog.module.scss";
import Link from "next/link";

export default function Blog() {
  return (
    <>
       <div className="main">
            <div className={styles.inner_banner}>
                <div className="container">
                    <div className={styles.inner_banner_text}>
                        <h1>Our Blog</h1>
                    </div>
                </div>
            </div>
            <div className={styles.case_studies}>
                <div className="container_cust">
                <div className={styles.cust_heading}>
                        <h4><span>OUR BLOG</span></h4>
                        <h3>Ideas and Insights</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className={styles.flex_row}>
                        <div className={styles.case_studies_bl}>
                            <div className={styles.img_bl}>
                               <Link href="/case-study/sales-force"> <Image src="/images/ind_bg.jpg" width={400} height={400} alt="" /></Link>
                               <h6>akal tech infralogis-Complete real estate Branding</h6>
                            </div>
                            <div className={styles.case_text}>
                                <h5>real estate</h5>
                                <h6>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s</h6>
                                <a href="">Read More &gt;</a>
                            </div>
                        </div>
                        <div className={styles.case_studies_bl}>
                            <div className={styles.img_bl}>
                            <Link href="/case-study/sales-force"> <Image src="/images/ind_bg.jpg" width={400} height={400} alt="" /></Link>
                            <h6>akal tech infralogis-Complete real estate Branding</h6>
                            </div>
                            <div className={styles.case_text}>
                                <h5>real estate</h5>
                                <h6>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s</h6>
                                <a href="">Read More &gt;</a>
                            </div>
                        </div>
                        <div className={styles.case_studies_bl}>
                            <div className={styles.img_bl}>
                            <Link href="/case-study/sales-force"> <Image src="/images/ind_bg.jpg" width={400} height={400} alt="" /></Link>
                            <h6>akal tech infralogis-Complete real estate Branding</h6>
                            </div>
                            <div className={styles.case_text}>
                                <h5>real estate</h5>
                                <h6>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s</h6>
                                <a href="">Read More &gt;</a>
                            </div>
                        </div>
                        <div className={styles.case_studies_bl}>
                            <div className={styles.img_bl}>
                            <Link href="/case-study/sales-force"> <Image src="/images/ind_bg.jpg" width={400} height={400} alt="" /></Link>
                            <h6>akal tech infralogis-Complete real estate Branding</h6>
                            </div>
                            <div className={styles.case_text}>
                                <h5>real estate</h5>
                                <h6>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s</h6>
                                <a href="">Read More &gt;</a>
                            </div>
                        </div>
                        <div className={styles.case_studies_bl}>
                            <div className={styles.img_bl}>
                            <Link href="/case-study/sales-force"> <Image src="/images/ind_bg.jpg" width={400} height={400} alt="" /></Link>
                            <h6>akal tech infralogis-Complete real estate Branding</h6>
                            </div>
                            <div className={styles.case_text}>
                                <h5>real estate</h5>
                                <h6>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s</h6>
                                <a href="">Read More &gt;</a>
                            </div>
                        </div>
                        <div className={styles.case_studies_bl}>
                            <div className={styles.img_bl}>
                            <Link href="/case-study/sales-force"> <Image src="/images/ind_bg.jpg" width={400} height={400} alt="" /></Link>
                            <h6>akal tech infralogis-Complete real estate Branding</h6>
                            </div>
                            <div className={styles.case_text}>
                                <h5>real estate</h5>
                                <h6>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s</h6>
                                <a href="">Read More &gt;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
