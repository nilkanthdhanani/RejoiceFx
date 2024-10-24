import styles from './licenseFormation.module.scss'
import Image from "next/image";

import ArrowSmallRight from "@/assets/images/svg/arrowSmallRight";
import buttonFx from "@/assets/images/svg/buttonFx.svg";

export default function LicenseFormation({ startImage, startButton, startTitle, startSubTitle }) {
    return (
        <section className={styles.licenseFormation}>
            <div className={styles.container}>
                <div className={styles.formationGrid}>
                    <div className={styles.formationGridImg}>
                        <Image src={startImage} alt="startImage" />
                    </div>
                    <div className={styles.formationGridDiv}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>{startButton}</span>
                            </button>
                        </div>
                        <h2>{startTitle}</h2>
                        <p>{startSubTitle}</p>
                        <div className={styles.contactButton}>
                            <button><span>Yes, I Want To Incorporate</span><ArrowSmallRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
