import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 4px 8px 0px rgba(27, 33, 38, 0.15);
  padding: 0 ${({ theme }) => theme.spacing.xxl};
  display: flex;
  align-items: center;
  height: 64px;
  justify-content: space-between;
`;
