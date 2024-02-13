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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
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
        <div className={isScrolled ? 'sticky_header' : ''}>
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
                          <Link href="">Retail</Link>
                        </li>
                        <li>
                          <Link href="">Finance</Link>
                        </li>
                        <li>
                          <Link href="">Insurance</Link>
                        </li>
                        <li>
                          <Link href="">Software & hi-tech</Link>
                        </li>
                        <li>
                          <Link href="">Automotive</Link>
                        </li>
                        <li>
                          <Link href="">Telecommunications</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link href="/case-study">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="">Insights</Link>
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
                          <Link href="/about">Overview</Link>
                        </li>
                        <li>
                          <Link href="">Approach</Link>
                        </li>
                        <li>
                          <Link href="">Awards</Link>
                        </li>
                        <li>
                          <Link href="">Partnership</Link>
                        </li>
                        <li>
                          <Link href="">Careers</Link>
                        </li>
                        <li>
                          <Link href="">News</Link>
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
                    <h2>Services</h2>
                    <ul>
                      <li>
                        <Link href="">IT consulting</Link>
                      </li>
                      <li>
                        <Link href="">Software engineering</Link>
                      </li>
                      <li>
                        <Link href="">Application services</Link>
                      </li>
                      <li>
                        <Link href="">Managed IT services</Link>
                      </li>
                      <li>
                        <Link href="">DevOps</Link>
                      </li>
                      <li>
                        <Link href="">Quality assurance & testing</Link>
                      </li>
                      <li>
                        <Link href="">Maintenance & Support</Link>
                      </li>
                      <li>
                        <Link href="">Smart teams</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.links_block}>
                    <h2>Solutions</h2>
                    <div className={styles.flex2_row}>
                      <ul>
                        <li>
                          <Link href="/services/aem">AEM</Link>
                        </li>
                        <li>
                          <Link href="">CRM</Link>
                        </li>
                        <li>
                          <Link href="">Digital commerce</Link>
                        </li>
                        <li>
                          <Link href="">Business process management</Link>
                        </li>
                        <li>
                          <Link href="">Elearning</Link>
                        </li>
                        <li>
                          <Link href="">HR management</Link>
                        </li>
                        <li>
                          <Link href="">Portals</Link>
                        </li>
                      </ul>
                      <ul>
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
                      </ul>
                    </div>
                  </div>
                  <div className={styles.links_block}>
                    <h2>Technologies</h2>
                    <ul>
                      <li>
                        <Link href="">Salesforce</Link>
                      </li>
                      <li>
                        <Link href="">SAP Commerce</Link>
                      </li>
                      <li>
                        <Link href="">Adobe Commerce (Magento)</Link>
                      </li>
                      <li>
                        <Link href="">Odoo</Link>
                      </li>
                      <li>
                        <Link href="">Atlassian</Link>
                      </li>
                      <li>
                        <Link href="">AWS</Link>
                      </li>
                      <li>
                        <Link href="">Azure</Link>
                      </li>
                      <li>
                        <Link href="">Power BI</Link>
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
                      <h2>Services</h2>
                      <NavDropdown.Item href="#">
                        IT consulting
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Software engineering
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Application services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Managed IT services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">DevOps</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Quality assurance & testing
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Maintenance & Support
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Smart teams</NavDropdown.Item>
                      <h2>Solutions</h2>
                      <NavDropdown.Item href="#">ERP</NavDropdown.Item>
                      <NavDropdown.Item href="#">CRM</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Digital commerce
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Business process management
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Elearning</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        HR management
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Portals</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Data analytics & BI
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Artificial intelligence
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Robotic process automation
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Cloud</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Cyber security
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">AR & VR</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Internet of Things
                      </NavDropdown.Item>
                      <h2>Technologies</h2>
                      <NavDropdown.Item href="#">Salesforce</NavDropdown.Item>
                      <NavDropdown.Item href="#">SAP Commerce</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Adobe Commerce (Magento)
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Odoo</NavDropdown.Item>
                      <NavDropdown.Item href="#">Atlassian</NavDropdown.Item>
                      <NavDropdown.Item href="#">AWS</NavDropdown.Item>
                      <NavDropdown.Item href="#">Azure</NavDropdown.Item>
                      <NavDropdown.Item href="#">Power BI</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Industries"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#">Healthcare</NavDropdown.Item>
                      <NavDropdown.Item href="#">Retail</NavDropdown.Item>
                      <NavDropdown.Item href="#">Finance</NavDropdown.Item>
                      <NavDropdown.Item href="#">Insurance</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Software & hi-tech
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Automotive</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Telecommunications
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action1">Case Studies</Nav.Link>
                    <Nav.Link href="#action2">Insights</Nav.Link>

                    <NavDropdown
                      title="Company"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#">Overview</NavDropdown.Item>
                      <NavDropdown.Item href="#">Approach</NavDropdown.Item>
                      <NavDropdown.Item href="#">Awards</NavDropdown.Item>
                      <NavDropdown.Item href="#">Partnership</NavDropdown.Item>
                      <NavDropdown.Item href="#">Careers</NavDropdown.Item>
                      <NavDropdown.Item href="#">News</NavDropdown.Item>
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
