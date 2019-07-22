import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const response = axios.get(`https://api.github.com/repos/${repoName}`);
    const issues = axios.get(
      `https://api.github.com/repos/${repoName}/issues`,
      {
        params: {
          state: 'open',
          per_page: 5,
        },
      }
    );

    await Promise.all([response, issues]).then(() => {
      console.log(response);
      console.log(issues);
    });

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;

    return <h1>Repository:</h1>;
  }
}
