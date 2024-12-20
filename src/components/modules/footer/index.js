
import styles from './footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/images/svg/logo.svg';
import ArrowSmallRight from '@/assets/images/svg/arrowSmallRight';

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footerDiv}>
          <div className={styles.footerDiv1}>
            <Image src={logo} alt="logo" />
            <div className={styles.footerDiv1Details}>
              <div className={styles.footerDiv1DetailsBox}>
                <span>Email</span>
                <p>info@rejoicehub.com</p>
              </div>
              <div className={styles.footerDiv1DetailsBox}>
                <span>Phone Number</span>
                <p>+91 9825122840</p>
              </div>
            </div>
            <div className={styles.footerDiv1DetailsBox}>
              <span>Address</span>
              <p>A-301, Atlanta mall, Sudama chowk, Digital Valley (Mota Varachha) , Surat, Gujarat, India 394101</p>
            </div>
          </div>
          <div className={styles.footerDiv2}>
            <h3>Links</h3>
            <div className={styles.footerDiv2Main}>
              <div className={styles.footerDiv2Link}>
                <Link href={"/forex-licence-mauritius"}><span>Forex Licenses</span></Link>
                <Link href={"/ai-development"}><span>AI bot development</span></Link>
                <Link href={"/forex-licence-mauritius"}><span>Mauritius Forex License</span></Link>
                <Link href={"/algo-bot"}><span>Strategies</span></Link>
                <Link href={"/forex-licence-vincent"}><span>St. Vincent Forex License</span></Link>
              </div>
              <div className={styles.footerDiv2Link}>
                <Link href={"/ai-development"}><span>Forex Services</span></Link>
                <Link href={"/forex-crm"}><span>Forex CRM</span></Link>
                <Link href={"/mobile-development"}><span>AI Web/ Mobile Development</span></Link>
                <Link href={"/algo-bot"}><span>Algo Bot & Strategies</span></Link>
                <Link href={"/contactus"}><span>Contact Us</span></Link>
              </div>
            </div>
          </div>
          <div className={styles.footerDiv3}>
            <p>Get started to up your business with personal Rejoice FX</p>
            <form>
              <input type="email" placeholder='Enter your email address' required />
              <button><span>Submit</span><ArrowSmallRight /></button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Rejoicefx. All rights reserved.</p>
      </div>
    </footer>
  )
}
