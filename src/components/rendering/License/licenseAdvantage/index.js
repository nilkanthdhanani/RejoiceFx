
import styles from './licenseAdvantage.module.scss'
import Image from "next/image";

import buttonFx from "@/assets/images/svg/buttonFx.svg";
import advantageImg from "@/assets/images/webp/advantageImg.webp";
import listIcon from "@/assets/images/svg/listIcon.svg";

export default function LicenseAdvantage() {
    return (
        <section className={styles.advantage}>
            <div className={styles.container}>
                <div className={styles.ProcessDivGird}>
                    <div className={styles.ProcessDivGirdImg}>
                        <Image src={advantageImg} alt="advantageImg" />
                    </div>
                    <div className={styles.ProcessContent}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>Explicit</span>
                            </button>
                        </div>
                        <h2>Advantages</h2>
                        <div className={styles.ProcessContentList}>
                            <div className={styles.ProcessContentListDiv}>
                                <Image src={listIcon} alt="listIcon" />
                                <p>All the companies are exempt from local tax for the first 25 years from the date of registration</p>
                            </div>
                            <div className={styles.ProcessContentListDiv}>
                                <Image src={listIcon} alt="listIcon" />
                                <p>No annual return has to be filed with the SVG authorities</p>
                            </div>
                            <div className={styles.ProcessContentListDiv}>
                                <Image src={listIcon} alt="listIcon" />
                                <p>No corporate or withholding taxes</p>
                            </div>
                            <div className={styles.ProcessContentListDiv}>
                                <Image src={listIcon} alt="listIcon" />
                                <p>The name of the directors, shareholders and officers are not disclosed on any public register</p>
                            </div>
                            <div className={styles.ProcessContentListDiv}>
                                <Image src={listIcon} alt="listIcon" />
                                <p>Low government and annual fees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
