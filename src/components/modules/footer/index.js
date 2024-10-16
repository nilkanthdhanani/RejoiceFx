
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
            <span>Links</span>
            <div className={styles.footerDiv2Main}>
              <div className={styles.footerDiv2Link}>
                <Link href={"/forex-licence-mauritius"}>Forex Licenses</Link>
                <Link href={"/ai-development"}>AI bot development</Link>
                <Link href={"/forex-licence-mauritius"}>Mauritius Forex License</Link>
                <Link href={"/algo-bot"}>Strategies</Link>
                <Link href={"/forex-licence-vincent"}>St. Vincent Forex License</Link>
              </div>
              <div className={styles.footerDiv2Link}>
                <Link href={"/ai-development"}>Forex Services</Link>
                <Link href={"/forex-crm"}>Forex CRM</Link>
                <Link href={"/mobile-development"}>AI Web/ Mobile Development</Link>
                <Link href={"/algo-bot"}>Algo Bot & Strategies</Link>
                <Link href={"/contactus"}>Contact Us</Link>
              </div>
            </div>
          </div>
          <div className={styles.footerDiv3}>
            <h3>Get started to up your business with personal Rejoice FX</h3>
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
