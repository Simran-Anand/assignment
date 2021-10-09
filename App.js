
import './App.css';
import './index.js';
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";

const breakPoints = [
  { width: 1, itemsToShow: 3 },
  { width: 100, itemsToShow: 5 },
  { width: 100, itemsToShow: 3 },
  { width: 1200, itemsToShow: 8 },
];
function App() {
  return (
    <>
    <nav className="App-header">
    <div class="first-div">
      
      <span className="App">
      <input type="text" placeholder="e.g. BITSAT, Bank, MBA" />
    </span>
      
    <span>
        <select className="Dropdown">
          <option value="">Exams</option>
        </select>
    </span>
        
    <span className="hover">Activation Key</span>
    
    <button type="button">Login</button>

    <button type="button" className="signup">Signup</button>

    <span className="span7">+91-6393216806
    (10 AM to 7 PM) </span>
    </div>
    
    <div className="second-div">
      <p><span className="color">Home</span>&nbsp; <span> &gt;</span> <span class="color">School Level - All India </span><span>&gt; </span> <span class="color">Jawahar Navodaya Entrance</span> <span>&gt;</span> <span class="white"> Jawahar Navodaya Entrance Exam </span></p></div>
    
    <div className="third-div">
      <p>JAWAHAR NAVODAYA VIDYALAYA MOCK TEST</p>
      <span>52</span>
      <span>5,76,763</span>
      <span>80,006</span>
        <div class="new">
             <span className="one">Tests and Quizzes</span>
             <span className="two">Tests Taken</span>
             <span className="three">Students</span>
        </div>

        <button type="button">START FREE TEST</button>
    </div>
    
    </nav>

    <body>
      <section className="sectiontwo">
          <div id="heading">
            <h3>Quizzes</h3>
          </div>
          
      <div className="App2">
        <Carousel breakPoints={breakPoints}>
          
          <Item id="i1">
            <ul><li id="l1">Jawahar Navodaya</li></ul>
            <ul><li id="l2">Entrance Exam</li></ul>
            <p id="pppp1">Question</p>
            <p id="pppp2">Marks</p>
            <p id="pppp3">Minute</p>
            <p id="pppp4">20</p>
            <p id="pppp5">20</p>
            <p id="pppp6">10 Min</p>
          </Item>
          <Item id="i1">Two</Item>
          <Item id="i1">Three</Item>
          <Item id="i1">Four</Item>
          <Item id="i1">Five</Item>
          <Item id="i1">Six</Item>
          <Item id="i1">Seven</Item>
          <Item id="i1">Eight</Item>
          <Item id="i1">Nine</Item>
          <Item id="i1">Ten</Item>
        
        </Carousel>
      </div>

          
      </section>

      

      <section className="sectionfour">
        <div id="div1">
          <h2>Unlock Test Packages on 50% Discount</h2>
          <p>Do yourself a favor, start practising more with India's Best Online Test Series</p>
            <p id="par1">Jawahar Navodaya Entrance Exam</p>
        <div className="div2">
          
          <div className="div3">
            <p>Get the Test Series with Special Discounts and</p>
            <p className="pp">and Start Your Journey of Success.</p></div>
          
          <div className="div4">
            <div>
              
            </div>
             <h3>TEST SERIES</h3>
             <p>Jawahar Navodaya Entrance Exam 365</p>
             <p2>Validity</p2>
              <select>
                <option>30 days</option>
                <option>90 days</option>
                <option>180 days</option>
                <option>365 days</option>
              </select>
          <span className="sp1">
            <p className="ppp1">₹ 50/month</p>
            <p className="ppp2">( 50 % off )</p>
            <p className="ppp3">₹ 98/month</p>
          </span>
          </div>
          
          <div></div>
        </div>
        </div>
        
        <div></div>
        <div></div>
      </section>

      <section className="sectionfive">
          <div id="div1">
            <h2>Key Features</h2>
            <span id="span1"><ul type="circle">
              <li>Trusted by 2 Crore+ Students</li>
              <li>14X Increases Chances of Selection</li>
              <li>Conserve Study Time by 40%</li>
            </ul></span>
            <span id="span2"><ul type="circle">
              <li>Most Important Exam Questions</li>
              <li>Detailed Answers & Solutions</li>
              <li>Sectional & Topic-wise Questions</li>
            </ul></span>
            <span id="span3"><ul type="circle">
              <li>Smart Performance Report</li>
              <li>All-India & State Ranking</li>
              <li>Graphical Performance Representation</li>
            </ul></span>

          </div>

          <div id="div2">
          <span id="span4"><ul type="none">
            <h4>LOGO</h4>
              <li><b>Mail:</b>testseries@edugorilla.com</li>
            
              <li>Follow Us On</li>
              
            </ul></span>
          <span id="span5"><ul type="none">
            <h4>ABOUT</h4>
              <li>About Us</li>
              <li>Impact Stories</li>
              <li>Media</li>
            </ul></span>
            <span id="span6"><ul type="none">
            <h4 id="head">HELP</h4>
              <li>Contact</li>
              <li>Career With Us</li>
              <li>Exam Calendar</li>
              <li>Support</li>
            </ul></span>
            <span id="span7"><ul type="none">
            <h4>STUDENT</h4>
              <li>List of Coachings</li>
              <li>List of Schools</li>
              <li>Forum</li>
              <li>All Careers</li>
              <li>Blog</li>
              <li>Market Place</li>
            </ul></span>
            <span id="span8"><ul type="none">
            <h4>BUSINESS</h4>
              <li>Your Own Online Series Portal</li>
              <h4>Download Our App</h4>
              <button id="btn">
                <p id="pa1">GET IT ON</p>
                <p id="pa2"><b>Google Play</b></p>
              </button>
              <h4>Change Language</h4>
              <span>
        <select className="Dropdown2">
          <option>English</option>
        </select>
    </span>
            </ul></span>

            <div id="div3">
              <p id="p1">Copyright 2021 EduGorilla Community Pvt. Ltd.</p>
              <p id="p2">Disclaimer</p>
              <p id="p3">Terms and Conditions</p>
              <p id="p4">Our Code of ethics</p>
              <p id="p5">Privacy Policy</p>
              <p id="p5">Copyright</p>
              <p id="p5">Return Policy</p>
              <p id="p5">Sitemap</p>
            </div>

          </div>
      </section>
    </body>
    </>
  );
}

export default App;
