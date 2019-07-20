import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt color="#000" />
        Repositórios
      </h1>
      <Form onSubmit={() => null}>
        <input type="text" placeholder="Adicionar repositório" />
        <SubmitButton disable>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
