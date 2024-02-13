"use client";
import Image from "next/image";
import styles from "./BlogSingle.module.scss";
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
        <div className={styles.blog_single}>
          <div className="container">
            <div className={styles.cust_heading}>
              <h5>
                <span>real estate</span>
              </h5>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </h4>
              <div className={styles.date_time}>
                <div className={styles.up_by}>
                  <div className={styles.up_img}>
                    <Image src="/images/profile.jpeg" width={21} height={21} />
                  </div>
                  <h3>
                    by <span>John Deo</span>
                  </h3>
                </div>
                <div className={styles.up_date}>
                  <h4>Janurary 29, 2024</h4>
                </div>
              </div>
            </div>
            <div className={styles.flex_row}>
              <div className={styles.blog_info}>
                <div className={styles.blog_img}>
                  <Image
                    src="/images/ind_bg.jpg"
                    width={400}
                    height={400}
                    alt=""
                  />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="prev_next_post">
                  <div className="prev_post">
                    <div className="prev_post_img">
                      <a href="">
                        <Image
                          src="/images/ind_bg.jpg"
                          width={80}
                          height={80}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="prev_post_text">
                      <a href="">
                        <h4>Previous Post</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="next_post prev_post">
                    <div className="prev_post_img">
                      <a href="">
                        <Image
                          src="/images/ind_bg.jpg"
                          width={80}
                          height={80}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="prev_post_text">
                      <a href="">
                        <h4>Next Post</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blog_socials}>
                <h3>Stay Connected</h3>
                <div className="social_links">
                  <div className="social_block facebook">
                    <div className="social_icon">
                      <Image
                        src="/images/social1.png"
                        width={35}
                        height={35}
                        alt=""
                      />
                    </div>
                    <div className="social_info">
                      <h5>Followers</h5>
                      <h4>750</h4>
                    </div>
                  </div>
                  <div className="social_block instagram">
                    <div className="social_icon">
                      <Image
                        src="/images/social2.png"
                        width={35}
                        height={35}
                        alt=""
                      />
                    </div>
                    <div className="social_info">
                      <h5>Followers</h5>
                      <h4>750</h4>
                    </div>
                  </div>
                  <div className="social_block pinterest">
                    <div className="social_icon">
                      <Image
                        src="/images/social4.png"
                        width={35}
                        height={35}
                        alt=""
                      />
                    </div>
                    <div className="social_info">
                      <h5>Followers</h5>
                      <h4>750</h4>
                    </div>
                  </div>
                  <div className="social_block linkedin">
                    <div className="social_icon">
                      <Image
                        src="/images/social3.png"
                        width={35}
                        height={35}
                        alt=""
                      />
                    </div>
                    <div className="social_info">
                      <h5>Followers</h5>
                      <h4>750</h4>
                    </div>
                  </div>

                  <div className="social_block twitter">
                    <div className="social_icon">
                      <Image
                        src="/images/social5.png"
                        width={35}
                        height={35}
                        alt=""
                      />
                    </div>
                    <div className="social_info">
                      <h5>Fans</h5>
                      <h4>750</h4>
                    </div>
                  </div>
                  <div className="social_block youtube">
                    <div className="social_icon">
                      <Image
                        src="/images/social6.png"
                        width={35}
                        height={35}
                        alt=""
                      />
                    </div>
                    <div className="social_info">
                      <h5>Subscribers</h5>
                      <h4>750</h4>
                    </div>
                  </div>
                </div>
                <h3>Category</h3>
                <div className="category_block">
                  <div className="single_cate">
                    <Link href="/case-study/sales-force">
                      {" "}
                      <Image
                        src="/images/ind_bg.jpg"
                        width={80}
                        height={80}
                        alt=""
                      />
                    </Link>
                    <div className="ov_text">
                      <h4>10</h4>
                      <h3>Travel</h3>
                    </div>
                  </div>
                  <div className="single_cate">
                    <Link href="/case-study/sales-force">
                      {" "}
                      <Image
                        src="/images/ind_bg.jpg"
                        width={80}
                        height={80}
                        alt=""
                      />
                    </Link>
                    <div className="ov_text">
                      <h4>16</h4>
                      <h3>Health</h3>
                    </div>
                  </div>
                  <div className="single_cate">
                    <Link href="/case-study/sales-force">
                      {" "}
                      <Image
                        src="/images/ind_bg.jpg"
                        width={80}
                        height={80}
                        alt=""
                      />
                    </Link>
                    <div className="ov_text">
                      <h4>11</h4>
                      <h3>Sports</h3>
                    </div>
                  </div>
                  <div className="single_cate">
                    <Link href="/case-study/sales-force">
                      {" "}
                      <Image
                        src="/images/ind_bg.jpg"
                        width={80}
                        height={80}
                        alt=""
                      />
                    </Link>
                    <div className="ov_text">
                      <h4>19</h4>
                      <h3>Technology</h3>
                    </div>
                  </div>
                </div>
                <h3>Recent Posts</h3>
               <div className="all_recent">
               <div className="recent_post">
                  <div className="recent_post_img">
                    <Image
                      src="/images/ind_bg.jpg"
                      width={120}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div className="recent_info">
                    <h5> Lorem Ipsum is simply dummy text of the printing</h5>
                    <h4>
                      <Image
                        src="/images/calender.png"
                        width={28}
                        height={28}
                      />
                      Janurary 31, 2024
                    </h4>
                  </div>
                </div>
                <div className="recent_post">
                  <div className="recent_post_img">
                    <Image
                      src="/images/ind_bg.jpg"
                      width={120}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div className="recent_info">
                    <h5> Lorem Ipsum is simply dummy text of the printing</h5>
                    <h4>
                      <Image
                        src="/images/calender.png"
                        width={28}
                        height={28}
                      />
                      Janurary 31, 2024
                    </h4>
                  </div>
                </div>
                <div className="recent_post">
                  <div className="recent_post_img">
                    <Image
                      src="/images/ind_bg.jpg"
                      width={120}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div className="recent_info">
                    <h5> Lorem Ipsum is simply dummy text of the printing</h5>
                    <h4>
                      <Image
                        src="/images/calender.png"
                        width={28}
                        height={28}
                      />
                      Janurary 31, 2024
                    </h4>
                  </div>
                </div>
                <div className="recent_post">
                  <div className="recent_post_img">
                    <Image
                      src="/images/ind_bg.jpg"
                      width={120}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div className="recent_info">
                    <h5> Lorem Ipsum is simply dummy text of the printing</h5>
                    <h4>
                      <Image
                        src="/images/calender.png"
                        width={28}
                        height={28}
                      />
                      Janurary 31, 2024
                    </h4>
                  </div>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.case_studies}>
          <div className="container_cust">
            <div className={styles.cust_heading}>
              <h3>Related Blogs</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
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
                  <h6>akal tech infralogis-Complete real estate Branding</h6>
                </div>
                <div className={styles.case_text}>
                  <h5>real estate</h5>
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
                  <h6>akal tech infralogis-Complete real estate Branding</h6>
                </div>
                <div className={styles.case_text}>
                  <h5>real estate</h5>
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
                  <h6>akal tech infralogis-Complete real estate Branding</h6>
                </div>
                <div className={styles.case_text}>
                  <h5>real estate</h5>
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
        </div>
      </div>
    </>
  );
}
