import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe,faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Replace with the icon(s) you need


const Page20 = () => {
  return (
    <div className="page20">
        <div>
        <div className="contact-title" >
        <p >CONTACT</p>
      </div>
          <p>ENQUIRIES</p>
          <p>hello@zimogroup.org</p>
          <div className="page20-Group2" >
            <div className="zimo-details">
            <img src="/images/page20img.png" alt="" className="page20-zimo-title"/>
            <img src="/images/page15img.png" alt="" className="page20-zimo-icon"/>
            <p>ZIMO GROUP LIMITED</p>
            <p>
              71 - 75 SHELTON STREET COVENT GARDEN LONDON WC2H 9JQ ENGLAND
              UNITED KINGDOM
            </p>
            <div className="zimo-contact">
            <FontAwesomeIcon icon={faGlobe} style={{ width: '1em', height: '1em', paddingTop: '2.5%',}}/>
            <p>ZIMOGROUP.ORG</p>
            <FontAwesomeIcon icon={faEnvelope} style={{ width: '1em', height: '1em', paddingTop: '2.5%', }}/>
            <p>HELLO@ZIMOGROUP.ORG</p>
            </div>
            <p>REGISTERED IN ENGLAND 14383397</p>
            <p className="page2-footer">ZIMO is a wholly owned subsidiary company of ZIMO GROUP LIMITED.</p>
            <p>The registered office is: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, England, United Kingdom.</p>
            </div>
            <div className="page20-real-state-sec">
            <p>REAL ESTATE</p>
            <p>realestate@zimogroup.org</p>
            <p>CARS</p>
            <p>cars@zimogroup.org</p>
            <p>YACHTS</p>
            <p>yachts@zimogroup.org</p>
            <p>WATCHES</p>
            <p>watches@zimogroup.org</p>
            <p>JETS</p>
            <p>jets@zimogroup.org</p>
            <p>PRIVATE ISLANDS</p>
            <p>privateislands@zimogroup.org</p>
            <p>DIAMONDS</p>
            <p>diamonds@zimogroup.org</p>
            <p>TRAVEL THE WORLD</p>
            <p>ttw@zimogroup.org</p>
          </div>
          </div>
        </div>

      <div>
          <div>
            <p>PROPERTY PROFESSIONALS / AGENTS</p>
            <p>agent@zimogroup.org</p>
            <p>ADVERTISING</p>
            <p>advertising@zimogroup.org</p>
            <p>SPONSORSHIP</p>
            <p>sponsor@zimogroup.org</p>
            <p>PARTNERS</p>
            <p>partners@zimogroup.org</p>
            <p>LEGAL</p>
            <p>legal@zimogroup.org</p>
            <p>CORPORATE</p>
            <p>corporate@zimogroup.org</p>
            <p>MARKETING</p>
            <p>marketing@zimogroup.org</p>
          </div>
          <div>
            <h4>PRESS</h4>
            <p>UNITED KINGDOM</p>
            <p>press-uk@zimogroup.org</p>
            <p>EUROPE</p>
            <p>press-eu@zimogroup.org</p>
            <p>NORTH AMERICA</p>
            <p>press-na@zimogroup.org</p>
            <p>MIDDLE EAST</p>
            <p>press-me@zimogroup.org</p>
            <p>ASIA/AUSTRALIA</p>
            <p>press-apac@zimogroup.org</p>
            <p>AFRICA</p>
            <p>press-af@zimogroup.org</p>
            <p>CHINA/HONG KONG</p>
            <p>press-ch@zimogroup.org</p>
          </div>
      </div>
      <div className="qr">
        <img src="/images/QR.png" alt="" />
        </div>
    </div>
  );
};

export default Page20;
