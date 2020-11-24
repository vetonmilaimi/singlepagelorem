import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Hr from "./components/Hr";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
    return (
        <div>
            <Header />  
            <Hr />
            <About />
            <Hr />
            <Contact />
            <Hr />
            <Services />
            <Hr />
            <Footer />
        </div>
    );
}

export default App;