import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem ${({ theme }) => theme.spacing.md};
`;
