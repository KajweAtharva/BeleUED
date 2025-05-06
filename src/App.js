import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";
import PopularArticle1 from "./images/PopularArticle1.png";
import PopularArticle2 from "./images/PopularArticle2.png";
import RecentArticle1 from "./images/RecentArticle1.png";
import RecentArticle2 from "./images/RecentArticle2.png";
import RecentArticle3 from "./images/RecentArticle3.png";
import AllArticle1 from "./images/AllArticle1.png";
import AllArticle2 from "./images/AllArticle2.png";
import AllArticle3 from "./images/AllArticle3.png";
import AllArticle4 from "./images/AllArticle4.png";
import AllArticle5 from "./images/AllArticle5.png";
import CTAlight from "./images/ctaLight.png";
import CTAdark from "./images/ctaDark.png";
import Top from "./images/Top.png";
function App() {
  return (
    <ThemeProvider>

<header className="parent" style={{
        width: "100%", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: "flex",
        flexDirection: "column",
        }}>
      
      <div style={{ 
        flexDirection: "row",
        alignContent: "space-between",
        boxSizing: "border-box",
        display: "flex",
        }}>
        
        <div style={{ paddingLeft: "200px", paddingTop: "50px", fontSize: "3rem", color:"white" }}>
          Heya.
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: "65px", width: "100%" }}>
          <nav>
            <a href="#" style={{ margin: "0 12px", textDecoration: "none", fontSize: "1.2rem", color: "white", paddingRight: "25px" }}>Play</a>
            <a href="#" style={{ margin: "0 12px", textDecoration: "none", fontSize: "1.2rem", color: "white", paddingRight: "25px" }}>Landings</a>
            <a href="#" style={{ margin: "0 12px", textDecoration: "none", fontSize: "1.2rem", color: "white", paddingRight: "25px" }}>Pages</a>
            <a href="#" style={{ margin: "0 12px", textDecoration: "none", fontSize: "1.2rem", color: "white", paddingRight: "25px" }}>Docs</a>
            <a href="#" style={{ margin: "0 12px", textDecoration: "none", fontSize: "1.2rem", color: "white", paddingRight: "25px" }}>Help</a>
          </nav>        
        </div>

        <div style={{ padding: "52px 5px 5px 5px", width: "200px" }}>
          <button style={{ backgroundColor: 'transparent', border: '1px solid white', width: "200px", height: "50px", fontSize: "1.2rem", color: "white", borderRadius:"8px" }}>
            Get it now
          </button>
        </div>

        <div style={{ padding: "52px 5px 5px 5px", width: "300px", display: "flex", justifyContent: "center"}}>
          <ThemeToggle />
        </div>
      </div>



      <div style={{ 
        flexDirection: "column",
        alignContent: "space-between",
        boxSizing: "border-box",
        display: "flex",
        marginTop: "30px"
      }}>

        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "4rem",
          color: "white"
        }}>
          Our Newsroom
        </div>

        <div className="search-wrapper"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          
          }}>
          <div style={{position: "relative"}}>
            <input type="text"
              placeholder="Search article"
              className="in"
              style={{
                fontSize: "1.5rem",
                border: "1px solid",
                }}/>

                <button className="search-button" style={{
                  fontSize: "1.2rem",
                  border: "1px solid",
                }}>
                  Search
                </button>

          </div>
        </div>


        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "25px",
          flexDirection: "row",
          alignContent: "space-between",
          boxSizing: "border-box",
          }}>

            <div style={{ width: "150px", height: "50px", fontSize: "1.2rem", color: "white", marginTop: "10px", marginRight: "10px" }}>
              Popular Tags: 
            </div>


          <button style={{ backgroundColor: 'transparent', border: '1px solid white', width: "200px", height: "50px", fontSize: "1.2rem", color: "white", borderRadius:"8px", marginRight: "10px" }}>
            Design
          </button>


          <button style={{ backgroundColor: 'transparent', border: '1px solid white', width: "200px", height: "50px", fontSize: "1.2rem", color: "white", borderRadius:"8px", marginRight: "10px" }}>
            User Experience
          </button>


          <button style={{ backgroundColor: 'transparent', border: '1px solid white', width: "200px", height: "50px", fontSize: "1.2rem", color: "white", borderRadius:"8px", marginRight: "10px" }}>
            User Interface
          </button>



        </div>


      </div>


      
      <div className="wave"/>


      </header>


      <div>

        <main style={{ maxWidth: 900, margin: "2rem auto" }}>
          {/* Hero Section */}
          <section className="card" style={{ display: "flex", alignItems: "center", height: "310px", overflow:"hidden" }}>
            <div style={{ display: "flex", height: "100%", marginRight:"20px",width:"55%" }}>
              <div className="AirlineTicket123" style={{width:"100%"}}> </div>
            </div>
            <div className="Airline">
              <div style={{
                border: "1px solid",
                borderRadius: "20px",
                display: "inline-block", // This is key
                padding: "8px", // optional for spacing
                fontSize: "0.8rem"
              }}>Featured</div>
              <h2>Cheap Airline Tickets Great Ways To Save</h2>
              <h5>Best digital experience, exclusive offers and daily deals.</h5>
              <small>By John Doe · 5 May</small>
            </div>
          </section>



          {/* Popular Articles */}
          <h2 style={{ marginTop: "38px" }} >Popular Articles</h2>
          <div style={{ display: "flex" ,gap: 16, alignItems: "center", height: "500px" }}>


            <div className="card" style={{ flex: 1, height:"100%", backgroundImage: `url(${PopularArticle1})`, backgroundSize: 'cover',
                  backgroundPosition: 'center', flexDirection: "column"}}>
                <div className="popularArticle" style={{
                border: "1px solid",
                borderRadius: "20px",
                display: "inline-block", // This is key
                padding: "8px", // optional for spacing
                fontWeight:"bold",
                fontSize: "0.8rem",
                marginLeft: "30px",
                marginTop: "30px"
              }}>Featured</div>
              <h3 style={{ marginTop:"220px", textAlign: "center", fontSize:"2.2rem", color: "#f5f6fa"}} >How to prevent and protect your family from Carbon monoxide</h3>
              <small style={{ justifyContent: "flex-end", color: "#f5f6fa"}}>By Jane Smith · 5 May</small>
            </div>
            
            
            <div className="card" style={{ flex: 1, height:"100%", backgroundImage: `url(${PopularArticle2})`, backgroundSize: 'cover',
                  backgroundPosition: 'center', flexDirection: "column" }}>
                <div className="popularArticle" style={{
                border: "1px solid",
                borderRadius: "20px",
                display: "inline-block", // This is key
                padding: "8px", // optional for spacing
                fontSize: "0.8rem",
                fontWeight: "bold",
                marginLeft: "30px",
                marginTop: "30px"
              }}>Featured</div>
              <h3 style={{ marginTop:"220px", textAlign: "center", fontSize:"2.2rem", color: "#f5f6fa"}} >Motherhood is the hardest and the best job ever</h3>
              <small style={{color: "#f5f6fa"}}>By Alice Brown · 5 May</small>
            </div>
          </div>

          {/* Recent Articles */}
          <h2 style={{ marginTop: "38px" }}>Recent Articles</h2>
          <div style={{ display: "flex" ,gap: 16, alignItems: "center", height: "400px" }}>
            <div className="card" style={{  flex: 1, height:"100%", backgroundImage: `url(${RecentArticle1})`, backgroundSize: 'cover',
                  backgroundPosition: 'center', flexDirection: "column" }}>
              <h3 style={{ marginTop:"220px", textAlign: "center", fontSize:"2.2rem", color: "#f5f6fa", marginBottom:"5px"}} >Future of Work</h3>
              <small style={{textAlign: "center", color:"#f5f6fa", paddingLeft:"20px"}}>By David Lee · 5 May</small>
            </div>
            <div className="card" style={{  flex: 1, height:"100%", backgroundImage: `url(${RecentArticle2})`, backgroundSize: 'cover',
                  backgroundPosition: 'center', flexDirection: "column" }}>
              <h3 style={{ marginTop:"220px", textAlign: "center", fontSize:"2.2rem", color: "#f5f6fa", marginBottom:"5px"}}>Future of Data</h3>
              <small style={{textAlign: "center", color:"#f5f6fa", paddingLeft:"27px"}}>By Maria Garcia · 5 May</small>
            </div>
            <div className="card" style={{  flex: 1, height:"100%", backgroundImage: `url(${RecentArticle3})`, backgroundSize: 'cover',
                  backgroundPosition: 'center', flexDirection: "column" }}>
              <h3 style={{ marginTop:"220px", textAlign: "center", fontSize:"2.2rem", color: "#f5f6fa", marginBottom:"5px"}}>Future of Learning</h3>
              <small style={{textAlign: "center", color:"#f5f6fa", paddingLeft:"70px"}}>By Michael Chen · 5 May</small>
            </div>
          </div>



          {/* Case Studies */}
          <h2 style={{ marginTop: "38px" }}>Case Studies</h2>
          <section className="card" style={{ display: "flex", alignItems: "center", height: "310px", overflow:"hidden" }}>
            <div style={{ display: "flex", height: "100%", width:"55%", marginRight:"20px" }}>
                <div className="casestudy" style={{width: "100%"}}></div>
              </div>
              <div className="Airline">
                <div style={{
                  backgroundColor: 'rgba(0, 190, 118, 0.2)',
                  borderRadius: '16px',
                  fontSize: '12px',
                  display: "inline-block",
                  color: '#00be67',
                  cursor: 'pointer',
                  border: '1px solid #00BE76',
                  padding: '8px 8px'
                }}>Featured</div>
                <h2>Cheap Airline Tickets Great Ways To Save</h2>
                <h5>Best digital experience, exclusive offers and daily deals.</h5>
                <small>By John Doe · 5 May</small>
              </div>
            </section>


          {/* All Articles */}
          <h2 style={{ marginTop: "38px" }}>All Articles</h2>

          
            <div style={{ display: "flex", alignItems: "center", height:"1000px" , gap: 16, flexDirection: "column", alignContent:"space-between" }}>
              
                <div style={{ display: "flex", alignItems: "center", height: "500px", gap:16, flexDirection:"row", alignContent: "space-between"}}>

                  <div className="card" style={{ flex: 1, height:"100%", backgroundImage: `url(${AllArticle1})`, backgroundSize: 'cover',
                    backgroundPosition: 'center', flexDirection: "column"}}>
                    <div className="popularArticle" style={{
                        border: "1px solid",
                        borderRadius: "20px",
                        display: "inline-block", // This is key
                        padding: "8px", // optional for spacing
                        fontWeight:"bold",
                        fontSize: "0.8rem",
                        marginLeft: "30px",
                        marginTop: "30px"
                        }}>Featured</div>
                    <h3 style={{ marginTop:"220px", textAlign: "center", fontSize:"2.2rem", color: "#f5f6fa"}} >How to prevent and protect your family from Carbon monoxide</h3>
                    <small style={{ justifyContent: "flex-end", color: "#f5f6fa"}}>By Jane Smith · 5 May</small>
                  </div>

                  
                  
                  <div className="card" style={{ flex: 1, height:"100%", backgroundImage: `url(${AllArticle2})`, backgroundSize: 'cover',
                    backgroundPosition: 'center', flexDirection: "column"}}>
                    <div className="popularArticle" style={{
                        border: "1px solid",
                        borderRadius: "20px",
                        display: "inline-block", // This is key
                        padding: "8px", // optional for spacing
                        fontWeight:"bold",
                        fontSize: "0.8rem",
                        marginLeft: "30px",
                        marginTop: "30px"
                        }}>Featured</div>
                    <h3 style={{ marginTop:"220px", textAlign: "center", fontSize:"2.2rem", color: "#f5f6fa"}} >How to prevent and protect your family from Carbon monoxide</h3>
                    <small style={{ justifyContent: "center", color: "#f5f6fa", }}>By Jane Smith · 5 May</small>
                  </div>

                  

                </div>






                <div  style={{ display: "flex", alignItems: "start", height:"100%", gap: 16, flexDirection:"row", alignContent: "space-between", width:"100%"}}>

                <div className="card" style={{  flex: 1, height:"450px", backgroundImage: `url(${AllArticle3})`, backgroundSize: 'cover',
                  backgroundPosition: 'center', flexDirection: "column" }}>
                  <h3 style={{ marginTop:"220px", textAlign: "center", fontSize:"2.2rem", color: "#f5f6fa", marginBottom:"5px"}} >Future of Work</h3>
                  <p style={{textAlign: "left", color:"#f5f6fa", paddingLeft:"20px"}}>Majority of people will work in jobs that don’t exist today.</p>
                  <small style={{textAlign: "center", color:"#f5f6fa", paddingLeft:"20px"}}>By David Lee · 5 May</small>
                </div>


                <div className="card" style={{  flex: 1, height:"450px", backgroundImage: `url(${AllArticle4})`, backgroundSize: 'cover',
                  backgroundPosition: 'center', flexDirection: "column" }}>
                  <h3 style={{ marginTop:"220px", textAlign: "center", fontSize:"2.2rem", color: "#f5f6fa", marginBottom:"5px"}}>Future of Data</h3>
                  <p style={{textAlign: "left", color:"#f5f6fa", paddingLeft:"20px"}}>Thanks to never-ending piles of data & the amount of insight</p>
                  <small style={{textAlign: "center", color:"#f5f6fa", paddingLeft:"27px"}}>By Maria Garcia · 5 May</small>
                </div>


                <div className="card" style={{  flex: 1, height:"450px", backgroundImage: `url(${AllArticle5})`, backgroundSize: 'cover',
                      backgroundPosition: 'center', flexDirection: "column" }}>
                  <h3 style={{ marginTop:"220px", textAlign: "center", fontSize:"2.2rem", color: "#f5f6fa", marginBottom:"5px"}}>Future of Learning</h3>
                  <p style={{textAlign: "left", color:"#f5f6fa", paddingLeft:"20px"}}>A constant ability to learn will be on the most crucial skills</p>
                  <small style={{textAlign: "center", color:"#f5f6fa", paddingLeft:"70px"}}>By Michael Chen · 5 May</small>
                </div>
                  



                </div>


                
                  
            </div>


            <div  style={{ display: "flex" , width: "100%", justifyContent:"center"}}>
              <button className="Btn" style={{border: "2px solid",
                borderRadius: "8px",
                padding: "18px", // optional for spacing
                fontSize: "1rem",
                backgroundColor:"transparent",
                fontWeight: "bold"}}>
                        More Articles &#x1F8A5;
              </button>
            </div>

        </main>


        <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
          <div>
            <input className="inf" placeholder="Enter your email"/>
            <button className="butf">
              Get Started
            </button>
          </div>
          <img src= {CTAdark} alt="footerimage" style={{ width: "100%", height: "100%" }} />
        </div>







        


      </div>


      <div className= "footerimg" style={{ display:"flex", justifyContent:"center", width:"100%", height:"100%", flexDirection:"row"}}>
        <img className="top" src={Top} alt="topimg" style={{paddingTop:"150px", paddingBottom:"150px"}}/>
      </div>



    </ThemeProvider>
  );
}

export default App;
