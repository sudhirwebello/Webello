"use client";
import Image from "next/image";
import styles from "./blog.module.scss";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

const blogList = [
  { listTitle: "Analysis & Design" },
  { listTitle: "Cloud" },
  { listTitle: "Data Solutions" },
  { listTitle: "IT News" },
  { listTitle: "Project Management" },
  { listTitle: "Security" },
  { listTitle: "Software Development" },
  { listTitle: "All blog posts" },
];
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
        <div className={styles.case_title}>
          <div className="container">
            <div className={styles.cust_heading}>
              {/* <h4>
                <span>OUR BLOG</span>
              </h4> */}
              <h3>Ideas <span>and Insights</span></h3>
              <p>
              Discover the <span>latest technology news</span> and learn more about Analysis & Design, Cloud, Data Solutions, IT Project Management, or software development with professionals from Future Processing.
              </p>
              <div className={styles.blog_list}>
              {blogList.map((item, index) => {
                return (
                  <div className={styles.single_bl_category}>
                    <h4>{item.listTitle}</h4>
                    <div className={styles.cate_link}>
                      <a href="#">
                        Read More <EastIcon />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </div>
        </div>
        <div className={styles.case_studies}>
          <div className="container">
           
            <div className={styles.flex_row}>
              <div className={styles.case_studies_bl}>
                <div className={styles.img_bl}>
                  <Link href="/case-study/sales-force">
                    {" "}
                    <Image
                      src="/images/ind_bg.jpg"
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </div>
                <div className={styles.case_text}>
                  <h5>real estate</h5>
                  <h4>akal tech infralogis-Complete real estate Branding</h4>
                  <h6>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry. Lorem Ipsum Has Been The Industry's
                    Standard Dummy Text Ever Since The 1500s
                  </h6>
                  <a href="">Read More &gt;</a>
                </div>
              </div>
              <div className={styles.case_studies_bl}>
                <div className={styles.img_bl}>
                  <Link href="/case-study/sales-force">
                    {" "}
                    <Image
                      src="/images/ind_bg.jpg"
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </div>
                <div className={styles.case_text}>
                  <h5>real estate</h5>
                  <h4>akal tech infralogis-Complete real estate Branding</h4>
                  <h6>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry. Lorem Ipsum Has Been The Industry's
                    Standard Dummy Text Ever Since The 1500s
                  </h6>
                  <a href="">Read More &gt;</a>
                </div>
              </div>
              <div className={styles.case_studies_bl}>
                <div className={styles.img_bl}>
                  <Link href="/case-study/sales-force">
                    {" "}
                    <Image
                      src="/images/ind_bg.jpg"
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </div>
                <div className={styles.case_text}>
                  <h5>real estate</h5>
                  <h4>akal tech infralogis-Complete real estate Branding</h4>
                  <h6>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry. Lorem Ipsum Has Been The Industry's
                    Standard Dummy Text Ever Since The 1500s
                  </h6>
                  <a href="">Read More &gt;</a>
                </div>
              </div>
              <div className={styles.case_studies_bl}>
                <div className={styles.img_bl}>
                  <Link href="/case-study/sales-force">
                    {" "}
                    <Image
                      src="/images/ind_bg.jpg"
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </div>
                <div className={styles.case_text}>
                  <h5>real estate</h5>
                  <h4>akal tech infralogis-Complete real estate Branding</h4>
                  <h6>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry. Lorem Ipsum Has Been The Industry's
                    Standard Dummy Text Ever Since The 1500s
                  </h6>
                  <a href="">Read More &gt;</a>
                </div>
              </div>
              <div className={styles.case_studies_bl}>
                <div className={styles.img_bl}>
                  <Link href="/case-study/sales-force">
                    {" "}
                    <Image
                      src="/images/ind_bg.jpg"
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </div>
                <div className={styles.case_text}>
                  <h5>real estate</h5>
                  <h4>akal tech infralogis-Complete real estate Branding</h4>
                  <h6>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry. Lorem Ipsum Has Been The Industry's
                    Standard Dummy Text Ever Since The 1500s
                  </h6>
                  <a href="">Read More &gt;</a>
                </div>
              </div>
              <div className={styles.case_studies_bl}>
                <div className={styles.img_bl}>
                  <Link href="/case-study/sales-force">
                    {" "}
                    <Image
                      src="/images/ind_bg.jpg"
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </div>
                <div className={styles.case_text}>
                  <h5>real estate</h5>
                  <h4>akal tech infralogis-Complete real estate Branding</h4>
                  <h6>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry. Lorem Ipsum Has Been The Industry's
                    Standard Dummy Text Ever Since The 1500s
                  </h6>
                  <a href="">Read More &gt;</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bg_effect}></div>
        </div>
      </div>
    </>
  );
}
