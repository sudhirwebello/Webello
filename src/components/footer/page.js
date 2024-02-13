import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";

const ft_top = [
  {
    ft_icon: "/images/phone.png",
    ft_text: "Contact Us",
    ft_head: "+91 9749 000070",
  },
  {
    ft_icon: "/images/caller.png",
    ft_text: "Frequently Asked Questions",
    ft_head: "VIEW FAQ NOW",
  },
  {
    ft_icon: "/images/textit.png",
    ft_text: "Chat With A Live Agent",
    ft_head: "LIVE CHAT",
  },
  {
    ft_icon: "/images/msg.png",
    ft_text: "Have Any Questions?",
    ft_head: "EMAIL US",
  },
];
export default function Footer() {
  return (
    <>

      <div className={`footer_global ${styles.footer}`}>
        <div className="container_cust">
          <div className={styles.flex_row}>
            <div className={styles.abt_wid}>
              <h3>About Us</h3>
              <p>
              At Webello, we extend beyond merely offering solutions for digital challenges; we serve as your strategic ally for online triumph.<br />Driven by a fervour for tailoring solutions, we adeptly traverse the ever-evolving realm of digital presence to enhance your brand. Our adept team harnesses the latest tools and trends to ensure your message resonates profoundly with your target audience, turning challenges into growth opportunities. Through fostering a collaborative partnership, we synchronise our innovative strategies with your business objectives, ensuring a seamless journey towards digital eminence.
              </p>
              <button><span>Talk To Us Today!</span></button>
              <div className={styles.social_connect}>
                <h4>Social Connect</h4>
                <ul>
                  <li>
                    <a href="" target="_blank">
                      <svg class="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <svg class="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank"><svg class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <svg class="svg-inline--fa fa-pinterest-p fa-w-12" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="pinterest-p" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path></svg>
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <svg class="svg-inline--fa fa-youtube fa-w-18" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <svg class="svg-inline--fa fa-behance fa-w-18" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="behance" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"></path></svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
           <div className={styles.top_nav}>
           <div className={styles.top_wid_menu}>
              <h3>Explore</h3>
              <ul>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">WORK</a></li>
                <li><a href="">INSIGHTS</a></li>
                <li><a href="">CAREERS</a></li>
                <li><a href="">CONTACT US</a></li>
              </ul>
            </div>
            <div className={styles.top_wid_menu}>
              <h3>Services</h3>
              <ul>
                <li><a href="">STRATEGY</a></li>
                <li><a href="">BRANDING</a></li>
                <li><a href="">DIGITAL MARKETING</a></li>
                <li><a href="">GRAPHIC DESIGN</a></li>
                <li><a href="">EXPERIENCE DESIGN</a></li>
                <li><a href="">TECHNOLOGY</a></li>
              </ul>
            </div>
           </div>
          </div>
          <div className={styles.ofc_address}>
            <h3>We Are Global. You Can Reach Us At:</h3>
            <div className={styles.flex_row}>
                <div className={styles.head_flg}>
                  <h2><Image src="/images/india_flag.png" width={33} height={22} alt="" /> Chandigarh</h2>
                  <p>Plot No.E314,</p>
                  <p>Industrial Area, Phase 8A</p>
                  <p>Mohali, Punjab, 160071</p>
                  <p><a href="mailto:info@webello.co">info@webello.co</a></p>
                  <p><a href="tel:+919749000070">+91 9749 000 070</a></p>
                </div>
                <div className={styles.head_flg}>
                  <h2><Image src="/images/aus_flag.png" width={33} height={22} alt="" /> Australia</h2>
                  <p>Melbourne Australia</p>
                  <p><a href="mailto:info@webello.co">info@webello.co</a></p>
                  <p><a href="tel:+919749000070">+91 9749 000 070</a></p>
                </div>
                <div className={styles.head_flg}>
                  <h2><Image src="/images/sing_flag.png" width={33} height={22} alt="" /> Singapore</h2>
                  <p>Singapore</p>
                  <p>11 Mount Faber Road, The Pearl</p>
                  <p><a href="tel:+919749000070">+91 9749 000 070</a></p>
                </div>
                <div className={styles.head_flg}>
                  <h2><Image src="/images/uk_flag.png" width={33} height={22} alt="" /> UK</h2>
                  <p>80 Brook Road, Borehamwood, WD6 5HB</p>
                  <p><a href="tel:+919749000070">+91 9749 000 070</a></p>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_cpy}>
            <div className="container_cust">
            <div className={styles.flex_row}>
              <p>© 2024 webello. All rights reserved.</p>
              <p><a href="">Privacy Policy</a></p>
            </div>
            </div>
          </div>
      </div>
    </>
  );
}
