const friends = ({ avatar, name, isOnline, id }) => (
  <li className="item">
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </li>
);

export default friends;
