import React from 'react'
import { connect } from 'react-redux';

import { shareLinkForProjectId } from '../utils/shareLink';
import { getProjectId } from '../store/reducers/reducerHelpers';
import Field from './Field';
import Preview from './Preview';

class Presence extends React.Component {
  render() {
    const {projectId, projects, peerInfo, dispatch} = this.props
    if (!projectId) return null

    const peers = this.props.peers.valueSeq()
      .filter(({key}) => key === projectId)
      .sortBy(p => !p.isSelf)

    return (
      <div>
        <h3>Collaborators:</h3>
        {peers.map(peer =>
          <div className="peer" key={peer.id} style={{
            opacity: peer.isConnected ? 1 : 0.3
          }}>
            <div className="peer__avatar">
              { peer.info.avatarKey && projects.get(peer.info.avatarKey)
                ? <Preview
                    animate
                    frameIndex={0}
                    duration={1}
                    project={projects.get(peer.info.avatarKey).set('cellSize', 3)}
                  />
                : null}
            </div>
            <div className="peer__text">
              {peer.canEdit ? "+" : null}
              {peer.info.name}
              {peer.isSelf ? " (you)" : null}
            </div>
          </div>
        )}
        <Field
          label="Your Name"
          value={peerInfo.name}
          onChange={name => dispatch({type: 'SELF_NAME_CHANGED', name})}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  peers: state.peers,
  projects: state.projects,
  peerInfo: state.peerInfo,
  projectId: getProjectId(state),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const PresenceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presence);
export default PresenceContainer;
