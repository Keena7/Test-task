import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';

const pictures = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTxx2hBfQ2ebi_BzChpd_FJgbV7ze_dbfnubzQfl5Ori10wxKG&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR30ATkRgRG8WNYe-haMrKEqtf_Z1fRX-mVQtyw8vHKuDqPFDHj&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWVik9MG1jNsFXo0hzl8ApooRa2OAo_5sxwFnYoMkP7Jp-rTpgA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR30i5b2yYBJ1LA6-yVtvpKnK6D3ErlEffV7hMM6_QtRvA5vNB&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXqrY1MVlkEVmrSNaFBSW5x8K8-Wp6_4Y5q9N3TND-rkUA0S_o&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRJgNc5aL4LJQF0r6LnPw_FKsH-MiNjDbphTnhcg25YbpFdTdm&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp35onBGZLDuFLL-iD7TXhmumksNZnUBF2CIECLdlWkovnLV8S&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThi4UePEMHqI5xDozjMay7NdtJbs0_HOFj6a_LALrZI2gfJA0S&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhQ12FnjuRBRSIvt5TJmXVOgG09SoGsuYSVqQtKVhEBFcTjmEE&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0JSS56rMX4PxwJkzLuJFbu8R5fga-3bH9C39b61EFRCTDQEFd&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR30i5b2yYBJ1LA6-yVtvpKnK6D3ErlEffV7hMM6_QtRvA5vNB&usqp=CAU",
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Image Gallery
            </header>
            <ImageGallery images={pictures}/>
        </div>
    );
}

export default App;
