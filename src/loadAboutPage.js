// creating content for the main page
import phoneImage from './images/phone.svg';
import adressImage from './images/home.svg';

export default function loadAboutPage() {
    // HTML
    const content = document.getElementById('content');

    const center = document.createElement('div');
    center.id = "center";
    content.appendChild(center);

    const phone = document.createElement('div');
    phone.id = 'phone';
    const phoneNumber = document.createElement('h2');
    phoneNumber.id = 'phoneNumber';
    phoneNumber.textContent = "123 456 789";
    const phoneImg = document.createElement('img');
    phoneImg.id = "phoneImg";
    phoneImg.alt = "Phone Number";
    phoneImg.src = phoneImage;

    phone.appendChild(phoneImg);
    phone.appendChild(phoneNumber);
    
    center.appendChild(phone);

    const adress = document.createElement('div');
    adress.id = 'adress';
    const adressNumber = document.createElement('h2');
    adressNumber.id = 'adressNumber';
    adressNumber.textContent = "3960 Grand Park Dr, Mississauga, ON L5B 4M6, Canada";
    const adressImg = document.createElement('img');
    adressImg.id = "adressImg";
    adressImg.alt = "Adress Image";
    adressImg.src = adressImage;

    adress.appendChild(adressImg);
    adress.appendChild(adressNumber);
    
    center.appendChild(adress);

    const mapContainer = document.createElement('map-container');

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.973809164361!2d-79.64905804425119!3d43.58100935043497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b474016e6fa27%3A0xde8facb900523b5!2z5oiQ6YO96LW15LiJ5a2D5a-G6KW_5bqXM3JkIE1vbSBTcGljeSBIb3QgcG90!5e0!3m2!1sen!2sus!4v1723975510579!5m2!1sen!2sus";
    iframe.width = "600";
    iframe.height = "400";
    iframe.style.broder = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    mapContainer.appendChild(iframe);
    center.appendChild(mapContainer);

    // CSS
    const styles = 
        `#center {
            min-width: 800px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100vw;
            background-color: rgba(0, 0, 0, 0.7);
            width: 800px;
            height: 80%;
            min-height: 400px;
            text-align: center;
            color: rgba(245, 245, 245, 0.815);
        }
        #phoneImg, #adressImg {
            height: 35px;
            width: 35px;
        }
        #phone, #adress {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;
        }`;
        
    const styleSheet = document.createElement("style");
    styleSheet.id = "dynamicStyles";
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
