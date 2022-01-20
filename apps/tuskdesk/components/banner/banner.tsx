import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BannerProps {}

const StyledBanner = styled.div`
  color: pink;
`;

export function Banner(props: BannerProps) {
  return (
    <StyledBanner>
      <h1>Welcome to Banner!</h1>
    </StyledBanner>
  );
}

export default Banner;
