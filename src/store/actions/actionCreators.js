
export function changeDimensions(gridProperty, behaviour) {
  return {
    type: 'CHANGE_DIMENSIONS',
    gridProperty,
    behaviour
  };
}

export function drawCell(id) {
  return {
    type: 'DRAW_CELL',
    id
  };
}

export function setProject(id) {
  return {
    type: 'SET_PROJECT',
    id,
  };
}

export function endDrag() {
  return {
    type: 'END_DRAG'
  };
}

export function setEraser() {
  return {
    type: 'SET_ERASER'
  };
}

export function setBucket() {
  return {
    type: 'SET_BUCKET'
  };
}

export function setEyedropper() {
  return {
    type: 'SET_EYEDROPPER'
  };
}

export function setCellSize(cellSize) {
  return {
    type: 'SET_CELL_SIZE',
    cellSize
  };
}

export function resetGrid(columns, rows, activeFrameIndex) {
  return {
    type: 'SET_RESET_GRID',
    columns,
    rows,
    activeFrameIndex
  };
}

export function showSpinner() {
  return {
    type: 'SHOW_SPINNER'
  };
}

export function hideSpinner() {
  return {
    type: 'HIDE_SPINNER'
  };
}

export function sendNotification(message) {
  return {
    type: 'SEND_NOTIFICATION',
    message
  };
}

export function changeActiveFrame(frameIndex) {
  return {
    type: 'CHANGE_ACTIVE_FRAME',
    frameIndex
  };
}

export function createNewFrame() {
  return {
    type: 'CREATE_NEW_FRAME'
  };
}

export function deleteFrame(frameIndex) {
  return {
    type: 'DELETE_FRAME',
    frameIndex
  };
}

export function duplicateFrame(frameIndex) {
  return {
    type: 'DUPLICATE_FRAME',
    frameIndex
  };
}

export function setDuration(duration) {
  return {
    type: 'SET_DURATION',
    duration
  };
}

export function changeFrameInterval(frameIndex, interval) {
  return {
    type: 'CHANGE_FRAME_INTERVAL',
    frameIndex,
    interval
  };
}

export function newProject() {
  return {
    type: 'NEW_PROJECT'
  };
}

export function addCloudPeer(key) {
  return {
    type: 'ADD_CLOUD_PEER',
    key
  }
}
export function removeCloudPeer(key) {
  return {
    type: 'REMOVE_CLOUD_PEER',
    key
  }
}
