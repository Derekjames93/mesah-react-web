import React from 'react';
import Footer from './Footer/Footer';
import NavbarPage from './Navbar/NavbarPage';





export default function Home() {
    

    return (
        <>
            <NavbarPage />
            <div className="mainBody">
                <div className="welcome">
                    Welcome to Mesah Inc TAAB Company
                </div>

            </div>
            <div className="about_us">
                <div className="about_info">

                    <h1 className="abouth1"><b>ABOUT US</b></h1>
                    <hr style={{ width: "89vw" }}></hr>
                    <br></br>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </div>
            </div>
            <Footer />
        </>
    )
}


