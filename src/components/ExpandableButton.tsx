import { ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'
import { Collapse } from 'react-collapse'

import Button from './Button'

const ExpandButton = styled(Button)`
  ${(props) =>
    props.isExpanded &&
    css`
      margin-bottom: 24px !important;
    `}

  ::after {
    content: '▾';
    display: inline-block;
    ${(props) =>
      props.isExpanded &&
      css`
        transform: translateY(2px) rotate(180deg);
      `}
    margin-left: 16px;
  }
`

interface CollapseWrapperProps {
  isExpanded: boolean
}

const CollapseWrapper = styled.div`
  display: ${(props: CollapseWrapperProps) =>
    props.isExpanded ? 'block' : 'none'};

  > :not(:last-child) {
    margin-bottom: 20px;
  }
`

interface Props {
  children: ReactNode
  renderHiddenContent: () => ReactNode
}

const ExpandableButton = ({ children, renderHiddenContent }: Props) => {
  const [isExpanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!isExpanded)

  return (
    <>
      <ExpandButton isExpanded={isExpanded} onClick={toggleExpanded}>
        {children}
      </ExpandButton>
      <CollapseWrapper isExpanded={isExpanded}>
        <Collapse isOpened={isExpanded}>{renderHiddenContent()}</Collapse>
      </CollapseWrapper>
    </>
  )
}

export default ExpandableButton
