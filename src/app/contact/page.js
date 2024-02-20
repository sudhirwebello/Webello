"use client";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <div className={styles.inner_banner}>
        <div className="container">
          <div className={styles.inner_banner_text}>
            <h1>Contact us </h1>
            <p>
              Webello delivered a new CRM solution on top of the Salesforce
              platform, implementing most of the functionality using built-in
              Salesforce capabilities by fine-tuning and adapting them to the
              company needs.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.get_touch}>
        <div className="container_cust">
          <div className={styles.title_blk}>
            <h3>LET US TALK</h3>
            <h4>Get In Touch</h4>
          </div>
          <div className={styles.flex_row}>
            <div className={styles.g_map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.83976846030725!2d76.69079519156703!3d30.698205345704512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee566ec12caf%3A0xe82bcee83eb20ba5!2sPhase%208B%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1705655852672!5m2!1sen!2sin"
                width="600"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className={styles.ofc_address}>
                <h5>India</h5>
                <p>Plot No.14, Rajiv Gandhi Technology Park,</p>
                <p>Chandigarh UT, 160101</p>
                <p>
                  <a href="mailto:info@61designstreet.com">
                    info@61designstreet.com
                  </a>
                </p>
                <p>
                  <a href="tel:+919888000899">+91 9888 000 899</a>
                  <a href="tel:+919749000070">+91 9749 000 070</a>
                </p>
              </div>
              <div className={styles.social_icons}>
                <ul>
                  <li>
                    <a href="">
                      <svg
                        className="svg-inline--fa fa-linkedin-in fa-w-14"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin-in"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        className="svg-inline--fa fa-facebook-f fa-w-10"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook-f"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        className="svg-inline--fa fa-instagram fa-w-14"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="instagram"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        className="svg-inline--fa fa-pinterest-p fa-w-12"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="pinterest-p"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        class="svg-inline--fa fa-twitter fa-w-16"
                        xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 72 72"
                        viewBox="0 0 72 72"
                        id="twitter-x"
                      >
                        <switch>
                          <g>
                            <path
                              fill="currentColor"
                              d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
			h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
                            ></path>
                          </g>
                        </switch>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.contact_form}>
              <div className={styles.form_group}>
                <label>Full Name</label>
                <input type="text" />
              </div>
              <div className={styles.form_group}>
                <label>Phone No.</label>
                <input type="text" />
              </div>
              <div className={styles.form_group}>
                <label>Email</label>
                <input type="text" />
              </div>
              <div className={styles.form_group}>
                <label>Address</label>
                <input type="text" />
              </div>
              <div className={styles.form_group}>
                <label>How Can We Help You?</label>
                <textarea name="message"></textarea>
              </div>
              <div className={styles.form_group}>
                <label>Captcha</label>
                <input type="text" />
              </div>
              <div className={styles.form_group}>
                <button type="submit">
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.other_locations}>
        <div className="container_cust">
          <div className={styles.title_blk}>
            <h3>FIND US AT</h3>
            <h4>Global Offices</h4>
          </div>
          <div className={styles.flex_row}>
            <div className={styles.ofc_locate}>
              <div className={styles.g_map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25222.91101436853!2d145.04665378741547!3d-37.79322975504289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1708426908371!5m2!1sen!2sin"
                  width="600"
                  height="400"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <h4>Australia</h4>
              <p>Melbourne Australia</p>
            </div>
            <div className={styles.ofc_locate}>
              <div className={styles.g_map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.83976846030725!2d76.69079519156703!3d30.698205345704512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee566ec12caf%3A0xe82bcee83eb20ba5!2sPhase%208B%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1705655852672!5m2!1sen!2sin"
                  width="600"
                  height="400"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <h4>India</h4>
              <p>
                Plot No.14, <br />
                Rajiv Gandhi Technology Park
              </p>
            </div>
            <div className={styles.ofc_locate}>
              <div className={styles.g_map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.83976846030725!2d76.69079519156703!3d30.698205345704512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee566ec12caf%3A0xe82bcee83eb20ba5!2sPhase%208B%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1705655852672!5m2!1sen!2sin"
                  width="600"
                  height="400"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <h4>Germany</h4>
              <p>
                11 Mount Faber Road, <br />
                The Pearl
              </p>
            </div>
            <div className={styles.ofc_locate}>
              <div className={styles.g_map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.83976846030725!2d76.69079519156703!3d30.698205345704512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee566ec12caf%3A0xe82bcee83eb20ba5!2sPhase%208B%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1705655852672!5m2!1sen!2sin"
                  width="600"
                  height="400"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <h4>USA</h4>
              <p>
                80 Brook Road, New York,
                <br />
                WD6 5HB
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
