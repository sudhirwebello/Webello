"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  useEffect(() => {
    const currentPath = window.location.pathname;

    const isAIService = currentPath.includes("/services/ai");

    const headerElement = document.getElementById("header");
    if (headerElement) {
      if (isAIService) {
        headerElement.classList.add("header_black");
      } else {
        headerElement.classList.remove("header_black");
      }
    }
  }, []);

  const [isHover, setIsHover] = useState(false);
  const [indIsHover, setIndusIsHover] = useState(false);
  const [compIsHover, setCompIsHover] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const HandleMouse = () => {
    setIsHover(true);
  };
  const HandleMouseOut = () => {
    setIsHover(false);
  };
  const handleMouseIndus = () => {
    setIndusIsHover(true);
  };
  const handleIndusOut = () => {
    setIndusIsHover(false);
  };

  const handleMouseComp = () => {
    setCompIsHover(true);
  };
  const handleCompOut = () => {
    setCompIsHover(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div id="header">
        <div
          className={
            isHover
              ? styles.open_submenu1
              : "" || indIsHover
              ? styles.open_submenu2
              : "" || compIsHover
              ? styles.open_submenu3
              : ""
          }
        >
          <div className={isScrolled ? "sticky_header" : ""}>
            <div className={`global_header ${styles.header}`}>
              <div className={styles.container_fluid}>
                <div className={styles.flex_row}>
                  <div className={styles.header_logo}>
                    <Link href="/">
                      <Image
                        src="/images/logo.png"
                        width={400}
                        height={100}
                        alt=""
                        priority
                      />
                    </Link>
                  </div>
                  <div className={styles.header_nav}>
                    <ul>
                      <li
                        className={styles.dropdown}
                        onMouseOver={HandleMouse}
                        onMouseOut={HandleMouseOut}
                      >
                        <Link href="">Services</Link>
                      </li>
                      <li
                        className={styles.dropdown}
                        onMouseOver={handleMouseIndus}
                        onMouseOut={handleIndusOut}
                      >
                        <Link href="">Industries</Link>
                        <div className={styles.submenu_2}>
                          <ul>
                            <li>
                              <Link href="">Healthcare</Link>
                            </li>
                            <li>
                              <Link href="">Fintech</Link>
                            </li>
                            <li>
                              <Link href="">Manufacturing</Link>
                            </li>
                            <li>
                              <Link href="">Logistics</Link>
                            </li>
                            <li>
                              <Link href="">Automotive</Link>
                            </li>
                            <li>
                              <Link href="">Entertainment and Media</Link>
                            </li>
                            <li>
                              <Link href="">Ecommerce</Link>
                            </li>
                            <li>
                              <Link href="">Education and E-learning</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="/case-study">Case Studies</Link>
                      </li>
                      <li>
                        <Link href="/blog">Insights</Link>
                      </li>
                      <li
                        className={styles.dropdown}
                        onMouseOver={handleMouseComp}
                        onMouseOut={handleCompOut}
                      >
                        <Link href="">Company</Link>
                        <div className={styles.submenu_2}>
                          <ul>
                            <li>
                              <Link href="/about">About Webello</Link>
                            </li>
                            <li>
                              <Link href="">Career</Link>
                            </li>
                            <li>
                              <Link href="">News</Link>
                            </li>
                            <li>
                              <Link href="">Awards and Recognition</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className={isHover ? styles.open_submenu1 : ""}
                onMouseOver={HandleMouse}
                onMouseOut={HandleMouseOut}
              >
                <div className={styles.submenu_1}>
                  <div className="gl_container">
                    <div className={styles.flex_row}>
                      <div className={styles.links_block}>
                        <h2>Digital Strategy</h2>
                        <ul>
                          <li>
                            <Link href="/services/ai">
                              Business Needs Analysis
                            </Link>
                          </li>
                          <li>
                            <Link href="">Customer Experience Strategy</Link>
                          </li>
                          <li>
                            <Link href="">UX Research</Link>
                          </li>
                          <li>
                            <Link href="">Experience Mapping</Link>
                          </li>
                          <li>
                            <Link href="">eCommerce Strategy</Link>
                          </li>
                          <li>
                            <Link href="">Mobile Strategy</Link>
                          </li>
                          <li>
                            <Link href="">Integrated Campaigns</Link>
                          </li>
                          <li>
                            <Link href="">Content and Personalization</Link>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.links_block}>
                        <h2>Digital Experience</h2>
                        <div className={styles.flex2_row}>
                          <ul>
                            <li>
                              <Link href="/services/aem">
                                User Experience Design
                              </Link>
                            </li>
                            <li>
                              <Link href="">Web Development</Link>
                            </li>
                            <li>
                              <Link href="">Adobe Experience Manager</Link>
                            </li>
                            <li>
                              <Link href="">Mobile App Development</Link>
                            </li>
                            <li>
                              <Link href="">Software Solutions</Link>
                            </li>
                            <li>
                              <Link href="">AI, Data & Analytics</Link>
                            </li>
                            <li>
                              <Link href="">Cloud Solutions</Link>
                            </li>
                            <li>
                              <Link href="">Managed Services and Support</Link>
                            </li>
                          </ul>
                          {/* <ul>
                          <li>
                            <Link href="">Data analytics & BI</Link>
                          </li>
                          <li>
                            <Link href="">Artificial intelligence</Link>
                          </li>
                          <li>
                            <Link href="">Robotic process automation</Link>
                          </li>
                          <li>
                            <Link href="">Cloud</Link>
                          </li>
                          <li>
                            <Link href="">Cyber security</Link>
                          </li>
                          <li>
                            <Link href="">AR & VR</Link>
                          </li>
                          <li>
                            <Link href="">Internet of Things</Link>
                          </li>
                        </ul> */}
                        </div>
                      </div>
                      <div className={styles.links_block}>
                        <h2>Digital Marketing</h2>
                        <ul>
                          <li>
                            <Link href="">Search Engine Optimization</Link>
                          </li>
                          <li>
                            <Link href="">Social Media Marketing</Link>
                          </li>
                          <li>
                            <Link href="">Pay Per Click</Link>
                          </li>
                          <li>
                            <Link href="">Content Creation - Blogs</Link>
                          </li>
                          <li>
                            <Link href="">Facebook Advertising</Link>
                          </li>
                          <li>
                            <Link href="">Instagram Advertising</Link>
                          </li>
                          <li>
                            <Link href="">LinkedIn Business Management</Link>
                          </li>
                          <li>
                            <Link href="">Twitter Advertising</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile_menus">
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid>
              <Navbar.Brand href="#">
                <div className="mobile_logo">
                  <Image
                    src="/images/logo.png"
                    width={400}
                    height={100}
                    alt=""
                    priority
                  />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <div className="mobile_logo">
                      <Image
                        src="/images/logo.png"
                        width={400}
                        height={100}
                        alt=""
                        priority
                      />
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown
                      title="Services"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <h2>Digital Strategy</h2>
                      <NavDropdown.Item href="/services/ai">
                        Business Needs Analysis
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#">
                        Customer Experience Strategy
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">UX Research</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Experience Mapping
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        eCommerce Strategy
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Mobile Strategy
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Integrated Campaigns
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Content and Personalization
                      </NavDropdown.Item>

                      <h2>Digital Experience</h2>
                      <NavDropdown.Item href="#">
                        User Experience Design
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Web Development
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Adobe Experience Manager
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Mobile App Development
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Software Solutions
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        AI, Data & Analytics
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Cloud Solutions
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Managed Services and Support
                      </NavDropdown.Item>

                      <h2>Digital Marketing</h2>
                      <NavDropdown.Item href="#">
                        Search Engine Optimization
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Social Media Marketing
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Pay Per Click
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Content Creation - Blogsdoo
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Facebook Advertising
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Instagram Advertising
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        LinkedIn Business Management
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Twitter Advertising
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Industries"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#">Healthcare</NavDropdown.Item>
                      <NavDropdown.Item href="#">Fintech</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Manufacturing
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Logistics</NavDropdown.Item>
                      <NavDropdown.Item href="#">Automotive</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Entertainment and Media
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Ecommerce</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Education and E-learning
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action1">Case Studies</Nav.Link>
                    <Nav.Link href="/blog">Insights</Nav.Link>

                    <NavDropdown
                      title="Company"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#">
                        About Webello
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Career</NavDropdown.Item>
                      <NavDropdown.Item href="#">News</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Awards and Recognition
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}
