import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import baseURL from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner } from './styles';

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

    const [repository, issues] = await Promise.all([
      baseURL.get(`/repos/${repoName}`),
      baseURL.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });

    console.log(repository);
    console.log(issues);
  }

  render() {
    const { repository, issues, loading } = this.state;

    // if (loading) {
    //   return <Loading>Carregando</Loading>;
    // }

    return (
      <Container>
        <Owner>
          {/* <img src={repository.owner.avatar_url} alt={repository.owner.login} /> */}

          {/* <h1>{repository.name}</h1>
          <p>{repository.description}</p> */}
        </Owner>
      </Container>
    );
  }
}
