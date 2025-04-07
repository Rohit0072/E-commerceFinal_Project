import styles from "./about-us.module.css";
import heroImage from "../../assets/my_photo.jpg";
import friendImage from "../../assets/nikhil.png";
import { Link } from 'react-router-dom';
import { Star } from "lucide-react";

export default function AboutUs() {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.aboutUsContent}>
        <div className={styles.headerSection}>
          <div className={styles.splitBackground}></div>
          <h1 className={styles.mainHeading}>AboutUs</h1>
          <p className={styles.subHeading}>E-COMMERCE WEBSITE</p>
          <Link to="/" className={styles.storeButton}>
            STORE PAGE
          </Link>
        </div>

        <div className={styles.teamSection}>
          <div className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <div className={styles.circleFrame}>
                <img
                  src={heroImage}
                  alt="Rohit Singh"
                  width={400}
                  height={400}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.decorations}>
                <Star className={`${styles.star} ${styles.starOrange}`} />
                <div className={`${styles.star} ${styles.starGray}`}>✧</div>
              </div>
            </div>
            <div className={styles.memberInfo}>
              <h2 className={styles.memberName}>ROHIT SINGH</h2>
              <h3 className={styles.memberRole}>The Developer</h3>
              <div className={styles.divider}></div>
              <p className={styles.memberBio}>
              Code, coffee, and creativity – that’s Rohit Singh. A full-stack developer who turns ideas into reality, he’s the one behind the smooth and powerful backend of this e-commerce platform. Whether it’s late-night debugging or fine-tuning features, he ensures everything runs flawlessly. Always learning, always building – that’s Rohit.
              </p>
              <button className={styles.darkButton}>KNOW MORE</button>
            </div>
          </div>

          <div className={`${styles.teamMember} ${styles.lightMember}`}>
            <div className={styles.imageContainer}>
              <div className={styles.circleFrame}>
                <img
                  src={friendImage}
                  alt="Rohit Friend"
                  width={400}
                  height={400}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.decorations}>
                <Star className={`${styles.star} ${styles.starOrange}`} />
                <div className={`${styles.notificationDot}`}></div>
              </div>
            </div>
            <div className={styles.memberInfo}>
              <h2 className={styles.memberName}>NIKHIL KUMAWAT</h2>
              <h3 className={styles.memberRole}>UI/UX Designer</h3>
              <div className={styles.divider}></div>
              <p className={styles.memberBio}>
              The design thinker behind the scenes, Nikhil Kumawat helped shape the vision of this platform by guiding the UI/UX concepts. He provided insights on user experience, design flow, and aesthetics, while I brought those ideas to life through code. His understanding of design principles ensured a seamless and engaging interface.
              </p>
              <button className={styles.orangeButton}>KNOW MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
