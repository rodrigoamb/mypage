import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 300px;
  min-height: 250px;
  max-height: 250px;
  position: relative;
  color: #eee;
  background: linear-gradient(0deg, #500d81 0%, #310666 100%);
  padding: 15px;
  border-radius: 15px;
  border: 4px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  .header-card {
    padding-left: 60px;
    padding-bottom: 10px;
  }

  .name-card {
    font-weight: bold;
  }

  .deposition-card {
    font-style: italic;
  }

  .profile-image {
    position: absolute;
    width: 80px;
    border-radius: 50px;
    border: 3px solid #eee;
    top: -20px;
    left: -10px;
  }
`;
