import { ReactComponent as FatArrowUpSvg } from "../../assets/images/fat-arrow-up.svg";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { H4 } from "../../components/H4";
import { P } from "../../components/P";
import { Player } from "../../components/Player";
import { Row } from "../../components/Row";
import { styled } from "../../utils/theme";
import { tablet, desktop } from "../../utils/media";

export const FeaturedVideoPlayer = styled(Player)`
  max-height: 100vh;
  margin: 0 auto;
`;

export const LiveBroadcastsSection = styled(Box)`
  padding: 100px 0 30px 0;
`;

export const BroadcastButton = styled(Button)`
  display: block;
  margin: 30px auto 40px auto;
`;

export const FeaturesTitleContainer = styled.div`
  padding: 80px 0;
`;

export const Feature = styled.div`
  border-top: 1px solid ${props => props.theme.colors.light};
  padding: 20px 0 80px 0;

  ${H4} {
    margin-bottom: 20px;
  }

  ${P} {
    margin-bottom: 40px;
  }

  ${tablet`
    min-width: 270px;
  `}

  ${desktop`
    &:nth-child(2) {
      margin-top: 80px;
    }

    &:nth-child(3) {
      margin-top: 160px;
    }
  `}
`;

export const FeaturesContainer = styled.div`
  margin-bottom: 80px;
  counter-reset: feature;

  ${tablet`
    display: flex;
    overflow-x: auto;

    ${Feature} + ${Feature} {
      margin-left: 54px;
    }
  `}
`;

export const SocialLinksContainer = styled.div`
  position: relative;
  margin-bottom: 60px;
`;

export const SocialLink = styled(Row)`
  margin-bottom: 20px;
`;

export const FatArrowUp = styled(FatArrowUpSvg)`
  position: absolute;
  top: 0;
  right: 50px;
`;

export const ContactInformationContainer = styled.div`
  margin-bottom: 80px;

  ${H4} {
    margin-bottom: 10px;
  }
`;

export const CopyrightInformation = styled(P)`
  margin-bottom: 60px;
`;
