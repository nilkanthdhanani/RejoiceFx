import styles from './licenseBanner.module.scss';
import Image from "next/image";

import bannerBottomLines from "@/assets/images/svg/bannerBottomLines.svg";
import leftLayer from "@/assets/images/svg/leftLayer.svg";
import rightLayer from "@/assets/images/svg/rightLayer.svg";
import buttonFx from "@/assets/images/svg/buttonFx.svg";

export default function LicenseBanner({ bannerButton, bannerTitle, bannerSubTitle }) {
    return (
        <section className={styles.mauritiusBanner}>
            <div className={styles.containerMax}>
                <div className={styles.mauritiusBannerinner}>
                    <div className={styles.mauritiusBannerbottom}>
                        <Image src={bannerBottomLines} alt="bannerBottomLines" />
                    </div>
                    <div className={styles.mauritiusBannerLineRight}>
                        <Image src={rightLayer} alt="rightLayer" />
                    </div>
                    <div className={styles.mauritiusBannerLineLeft}>
                        <Image src={leftLayer} alt="leftLayer" />
                    </div>
                    <div className={styles.mauritiusBannerDetail}>
                        <div className={styles.headingBatch}>
                            <button type="button" >
                                <Image src={buttonFx} alt="buttonFx" />
                                <span>{bannerButton}</span>
                            </button>
                        </div>
                        <h2>{bannerTitle}</h2>
                        <p>{bannerSubTitle}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}