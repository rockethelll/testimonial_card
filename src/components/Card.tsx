import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src='./img/profile-thumbnail.png' alt='Sarah Dole profile picture' />
        <div className={styles.infos}>
          <span>Sarah Dole</span>
          <span>@sarahdole</span>
        </div>
      </div>
      <p>
        I've been searching for high-quality abstract images for my design projects, and I'm
        thrilled to have found this platform. The variety and depth of creativity are astounding!
      </p>
    </div>
  );
};

export default Card;
