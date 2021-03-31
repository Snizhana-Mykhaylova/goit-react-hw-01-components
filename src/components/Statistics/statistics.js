import PropTypes from 'prop-types';
import styles from './statistics.module.css';

function rgbaRandom() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title ? <h2 className={styles.title}>{title}</h2> : null}

    <ul className={styles.statList}>
      {stats.map(item => (
        <li
          key={item.id}
          className={styles.item}
          style={{ backgroundColor: rgbaRandom() }}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default Statistics;
