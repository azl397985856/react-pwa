import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ShotDescription from '../shot-description/ShotDescription';
import parseDate from '../../services/date';
import styles from './styles.scss';

class Shot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ showDescription: !this.state.showDescription });
  }

  render() {
    const { id, image, date, title, description, likesCount, viewsCount } = this.props;

    return (
      <div onMouseEnter={this.toggle} onMouseLeave={this.toggle} className={styles.container}>
        <div className={styles.content}>
          <img alt="Shot" src={image} />
          <ShotDescription
            id={id}
            showDescription={this.state.showDescription}
            description={description}
            title={title}
          />
        </div>
        <div className={styles.tools}>
          <span className={styles.calendar}>{parseDate(date)}</span>
          <span className={styles.views}>{viewsCount}</span>
          <span className={styles.likes}>{likesCount}</span>
        </div>
      </div>
    );
  }
}

Shot.defaultProps = {
  description: '',
};

Shot.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  viewsCount: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Shot;
