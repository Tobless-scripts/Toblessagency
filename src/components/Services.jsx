import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import WhatWeDo from "./WhatWeDo";

function Service() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

function Main() {
    return (
        <div>
            <Breadcrumb pageName="Services" />
            <WhatWeDo />
        </div>
    );
}

export default Service;
