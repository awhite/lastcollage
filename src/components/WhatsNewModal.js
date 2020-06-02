import React, { Fragment } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import moment from 'moment';

import '../styles/Modal.css';
import { red, lightGrey } from '../styles';
import { dateFormat } from '../util';
import changelog from '../data/changelog.json';
import Button from './Button';
import { mobile } from 'util/breakpoints';

Modal.setAppElement('#root');

const Release = ({ versionCode, dateMillis, changes }) => (
  <div>
    <h2>{versionCode} ({moment.utc(dateMillis).format(dateFormat)})</h2>
    {changes.map(({ title, bullets }) => (
      <Fragment key={title}>
        <h4>{title}</h4>
        <ul>
          {bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
        </ul>
      </Fragment>
    ))}
  </div>
);

const ContentPanel = styled.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
  border: 1px solid ${lightGrey};
  border-left: none;
  border-right: none;

  > div:not(:last-child) {
    margin-bottom: 32px;
  }

  h2 {
    color: ${red};
    margin: 10px 0;
  }

  h4 {
    margin: 8px 0;
  }

  ul {
    margin: 8px 0;
  }
`;

const DoneButton = styled(Button).attrs({
  children: 'Done',
})`
  margin: 24px;
`;

const ButtonPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${mobile`
    align-items: stretch;
  `}
`;

const WhatsNewModal = ({ isOpen, dismiss }) => (
  <Modal
    onRequestClose={dismiss}
    isOpen={isOpen}
    contentLabel="What's new modal"
    className="modal"
    overlayClassName="modal-overlay"
    bodyOpenClassName="modal-body-open"
  >
    <h1>{changelog.title}</h1>
    <ContentPanel>
      {changelog.releases.reverse().map(release => (
        <Release key={release.versionCode} {...release} />
      ))}
    </ContentPanel>
    <ButtonPanel>
      <DoneButton onClick={dismiss} />
    </ButtonPanel>
  </Modal>
);

export default WhatsNewModal;
