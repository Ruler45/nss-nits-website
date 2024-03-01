import { Link } from "react-router-dom";

import styles from "./Team.module.scss";

const Team = () => {
  return (
    <div className={styles.Team}>
      <h2>This is Team Page</h2>
      <Link to="/">Go to Home page</Link>
    </div>
  );
};

export default Team;
