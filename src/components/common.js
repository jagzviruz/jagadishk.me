import Icon from 'react-icons-kit';
import styled from 'styled-components';

export const StyledIcon = styled(Icon)`
  color: ${props => props.fill}
  fill: ${props => props.fill ? `${ props.fill } !important;` : ''}
`;
