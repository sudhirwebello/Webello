"use client";
import Image from "next/image";
import styles from "./career.module.scss";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Career() {
  return (
    <>
      <div className={styles.inner_banner}>
        <div className="container">
          <div className={styles.inner_banner_text}>
            <h1>Career </h1>
            <p>
              Webello delivered a new CRM solution on top of the Salesforce
              platform, implementing most of the functionality using built-in
              Salesforce capabilities by fine-tuning and adapting them to the
              company needs.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.featured_jobs}>
        <div className="container_cust">
          <div className={styles.title_block}>
            <h3>Latest Featured Jobs</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s
            </p>
          </div>
          <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="job_tabs"
    >
      <Tab eventKey="home" title="Marketing & Sales">
      <div className={styles.flex_row}>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/wordpress_head.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>WordPress Developer</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                    <p>Part Time</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/job-list-2.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img2.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>Assistant Manager</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                    <p className={styles.full_time}>Full TIme</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/job-list-3.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img3.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>UI/UX Designer</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                    <p>Part Time</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/job-list-4.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img4.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>Junior Receptionist</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                  <p className={styles.full_time}>Full TIme</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Tab>
      <Tab eventKey="profile" title="UI/UX">
      <div className={styles.flex_row}>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/wordpress_head.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>WordPress Developer</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                    <p>Part Time</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/job-list-2.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img2.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>Assistant Manager</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                    <p className={styles.full_time}>Full TIme</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/job-list-3.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img3.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>UI/UX Designer</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                    <p>Part Time</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/job-list-4.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img4.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>Junior Receptionist</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                  <p className={styles.full_time}>Full TIme</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Tab>
      <Tab eventKey="contact" title="Developer">
      <div className={styles.flex_row}>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/wordpress_head.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>WordPress Developer</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                    <p>Part Time</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/job-list-2.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img2.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>Assistant Manager</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                    <p className={styles.full_time}>Full TIme</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/job-list-3.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img3.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>UI/UX Designer</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                    <p>Part Time</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.job_single}>
              <div className={styles.job_img}>
                <Image
                  src="/images/job-list-4.png"
                  width={472}
                  height={225}
                  alt=""
                />
              </div>
              <div className={styles.job_info}>
                <div className={styles.title_info}>
                  <div className={styles.job_title_img}>
                    <Image
                      src="/images/jb_img4.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                  </div>
                  <div className={styles.job_head}>
                    <h3>Junior Receptionist</h3>
                    <p>3 Weeks ago</p>
                  </div>
                </div>
                <div className={styles.job_detail}>
                  <ul>
                    <li>Salary: $60-$80 / Per Hour</li>
                    <li>Experience: 1-1.5 Years</li>
                    <li>Skills: HTML, CSS</li>
                  </ul>
                </div>
                <div className={styles.action_btn}>
                  <div className={styles.job_type}>
                  <p className={styles.full_time}>Full TIme</p>
                  </div>
                  <div className={styles.apply_now}>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Tab>
    </Tabs>
       
        </div>
      </div>
      <div className={styles.explore_more}>
        <div className="container_cust">
          <div className={styles.inner_exp}>
            <h3>Do not see a job you are interested in? Reach out to us to explore options. We are always happy to connect with talented people.</h3>
            <div className="common_link">
            <button><a href="">Email us</a></button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.our_activity}>
        <div className={styles.flex_row}>
          <div className={styles.img_gallery}>
            {/* <Image src="/images/ind_bg.jpg" width={300} height={300} alt="" /> */}
            <div className={styles.gallery_text}>
              <h3>Our Gallery</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div className={styles.img_gallery}>
            <Image src="/images/ind_bg.jpg" width={300} height={300} alt="" />
          </div>
          <div className={styles.img_gallery}>
            <Image src="/images/ind_bg.jpg" width={300} height={300} alt="" />
          </div>
          <div className={styles.img_gallery}>
            <Image src="/images/ind_bg.jpg" width={300} height={300} alt="" />
          </div>
          <div className={styles.img_gallery}>
            <Image src="/images/ind_bg.jpg" width={300} height={300} alt="" />
          </div>
          <div className={styles.img_gallery}>
            <Image src="/images/ind_bg.jpg" width={300} height={300} alt="" />
          </div>
          <div className={styles.img_gallery}>
            <Image src="/images/ind_bg.jpg" width={300} height={300} alt="" />
          </div>
          <div className={styles.img_gallery}>
            <Image src="/images/ind_bg.jpg" width={300} height={300} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
