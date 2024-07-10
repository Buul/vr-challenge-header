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

export const ModalWrapper = styled.div`
  width: 500px;
  padding: 0 80px 0 56px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  #count {
    font-weight: 400;
  }
`;

export const Content = styled.div`
  margin-top: 30px;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const Product = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  border-radius: 8px;
  border: 1px solid #00aa13;
  align-items: center;
  padding: 0 18px;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 53px;
  }
`;

export const ModalAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 54px;
`;
