import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  gap: 20px;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
`;

export const ContainerUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 900px;
`;

export const CardUsers = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  padding: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
`;

export const AvatarUser = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #e0e0e0;
`;

export const TrashIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const UserName = styled.p`
  text-transform: capitalize;
  font-size: 20px;
  color:rgb(0, 0, 0);
  font-weight: 500;
`;
