import PropTypes from "prop-types";

const statistics = ({ title, stats }) => (
  <section className="statistics">
    {title ? <h2 className="title">{title}</h2> : null}

    <ul className="stat-list">
      {stats.map((item) => (
        <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default statistics;
