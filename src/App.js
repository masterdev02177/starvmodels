import { useRef, useState, useLayoutEffect } from "react";
import { Carousel } from "./Carousel";
import "./App.css";
import useHover from "@react-hook/hover";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function App() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [width, height] = useWindowSize();

  const target1 = useRef(null);
  const isHovering1 = useHover(target1, { enterDelay: 0, leaveDelay: 0 });
  const target2 = useRef(null);
  const isHovering2 = useHover(target2, { enterDelay: 0, leaveDelay: 0 });
  const target3 = useRef(null);
  const isHovering3 = useHover(target3, { enterDelay: 0, leaveDelay: 0 });

  const handleMobileMenu = () => {
    console.log("here");
    if (mobileMenuVisible == false) {
      setMobileMenuVisible(true);
    } else {
      setMobileMenuVisible(false);
    }
  };

  let items = [
    "images/carousel1.png",
    "images/carousel2.png",
    "images/carousel3.png",
    "images/carousel4.png",
    "images/carousel5.png",
  ];
  // let items = [
  //   "https://picsum.photos/800/300/?random" ,
  //   "https://picsum.photos/800/301/?random"   ,
  //   "https://picsum.photos/800/302/?random"   ,
  //   "https://picsum.photos/800/303/?random"   ,
  //   "https://picsum.photos/800/304/?random"    ];

  // var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]

  return (
    <div className="App">
      <header>
        <nav
          className={
            "navbar" +
            (mobileMenuVisible && width < 837 ? " mobile-navbar" : "")
          }
        >
          <h1>
            STARVING <br /> MODELS
          </h1>
          <div
            className={
              "nav-items" +
              (mobileMenuVisible && width < 837 ? " mobile-nav-items" : "")
            }
          >
            <ul
              className={
                "nav-links" +
                (mobileMenuVisible && width < 837 ? " mobile-nav-links" : "")
              }
            >
              <li>Project</li>
              <li>Art</li>
              <li>Charities</li>
              <li>Utilities</li>
              <li>Roadmap</li>
              <li>Team</li>
            </ul>
            <ul className="nav-social-links">
              <li>
                <img src="/images/social/twitter.svg" alt="" />
              </li>
              <li>
                <img src="/images/social/discord.svg" alt="" />
              </li>
              <li>
                <img src="/images/social/instagram.svg" alt="" />
              </li>
              <li>
                <img src="/images/social/angrybearz.svg" alt="" />
              </li>
            </ul>
          </div>
          <div className="menu-icon" onClick={handleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h7"
              ></path>
            </svg>
          </div>
        </nav>
        <div className="banner-text">
          <h2 className="title">Starving Models</h2>
          <h2 className="sub-title">
            <span>
              <div style={{ display: "inline-block" }}>NFTs</div>
              <span
                style={{
                  display: "inline-block",
                  transition: "opacity 0.5s ease 0s",
                  opacity: 0,
                }}
              ></span>
            </span>
          </h2>
          <p>100+ NFTs Artistic Starving Models</p>
        </div>
      </header>
      <div className="about-wrapper">
        <div className="image_wrapper">
          <img src="/images/about.png" alt="" />
          <div className="details">
            <div className="title">
              <p className="nft">NFT Starving Model</p>
              <p className="colored-header">Price</p>
            </div>
            <div className="values">
              <p className="colored-header">0.01</p>
              <p className="colored-header">0.875</p>
            </div>
            <div className="icons">
              <img src="/images/diamond.png" alt="" style={{ width: "20px" }} />
              <div className="likes">
                <img src="/images/heart.png" alt="" />
                <span style={{ marginLeft: "0.5em" }}>100</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>NFT Starving Model</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
      <div>
        <Carousel items={items} active={0}/>
      </div>
      <div className="roadmap" id="roadmap">
        <h3 className="title">Roadmap</h3>
        <div className="container">
          <div
            className={"map_holder" + (isHovering1 ? " active" : "")}
            ref={target1}
          >
            <div className="triangle">
              <img
                src={
                  isHovering1 ? "/images/torch_on.png" : "/images/torch_off.png"
                }
                alt=""
                style={{ width: "220px", height: "260px" }}
              />
            </div>
            <div className="content">
              <h3>Title goes here</h3>
              <p>
                details goes here in
                <br />
                two lines
              </p>
            </div>
          </div>
          <div
            className={"map_holder" + (isHovering2 ? " active" : "")}
            ref={target2}
          >
            <div className="triangle">
              <img
                src={
                  isHovering2 ? "/images/torch_on.png" : "/images/torch_off.png"
                }
                alt=""
                style={{ width: "220px", height: "260px" }}
              />
            </div>
            <div className="content">
              <h3>Title goes here</h3>
              <p>
                details goes here in
                <br />
                two lines
              </p>
            </div>
          </div>
          <div
            className={"map_holder" + (isHovering3 ? " active" : "")}
            ref={target3}
          >
            <div className="triangle">
              <img
                src={
                  isHovering3 ? "/images/torch_on.png" : "/images/torch_off.png"
                }
                alt=""
                style={{ width: "220px", height: "260px" }}
              />
            </div>
            <div className="content">
              <h3>Title goes here</h3>
              <p>
                details goes here in
                <br />
                two lines
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="utilities-container" id="utilities">
        <h2 className="utilities-header">Utilities</h2>
        <div className="box">
          <img
            src="/images/resize.png"
            className="utilities-img"
            alt="Utilities"
          />
          <div className="points text one">
            <h3>Title goes here</h3>
            <p>
              Details goes here in <br />
              two lines
            </p>
          </div>
          <div className="points text two">
            <h3>Title goes here</h3>
            <p>
              Details goes here in <br />
              two lines
            </p>
          </div>
          <div className="points text three">
            <h3>Title goes here</h3>
            <p>
              Details goes here in <br />
              two lines
            </p>
          </div>
          <div className="points text four">
            <h3>Title goes here</h3>
            <p>
              Details goes here in <br />
              two lines
            </p>
          </div>
        </div>
      </div>
      <div className="team" id="team">
        <h2>Team</h2>
        <div className="members">
          <div className="person-container">
            <div className="person-info">
              <h3>Dan Smith</h3>
              <div className="position">Lead Artist</div>
            </div>
            <img src="/images/team/Dan.png" alt="" />
          </div>
          <div className="person-container">
            <div className="person-info">
              <h3>Joe Brown</h3>
              <div className="position">Artist</div>
            </div>
            <img src="/images/team/Joe.png" alt="" />
          </div>
          <div className="person-container">
            <div className="person-info">
              <h3>James David</h3>
              <div className="position">Project Coordinator</div>
            </div>
            <img src="/images/team/James.png" alt="" />
          </div>
          <div className="person-container">
            <div className="person-info">
              <h3>Joshua Jack</h3>
              <div className="position">Lead Developer</div>
            </div>
            <img src="/images/team/Jack.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
