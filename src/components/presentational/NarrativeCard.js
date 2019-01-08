import React from 'react'
import { connect } from 'react-redux'
import { selectActiveNarrative } from '../../selectors'

function NarrativeCard ({ narrative, methods }) {
  const { onSelectNarrative, onNext, onPrev  } = methods
  function renderClose() {
    return (
      <button
        className='side-menu-burg is-active'
        onClick={() => { onSelectNarrative(null) }}
      >
        <span></span>
      </button>
    )
  }

  function _renderActions(current, steps) {
    const prevExists = current !== 0
    const nextExists = current < steps.length - 1
    return (
      <div className='actions'>
        <div
          className={`${prevExists ? '' : 'disabled'} action`}
          onClick={prevExists ? onPrev : null}>&larr;
        </div>
        <div
          className={`${nextExists ? '' : 'disabled'} action`}
          onClick={nextExists ? onNext : null}>&rarr;
        </div>
      </div>
    )
  }

  // no display if no narrative
  if (!narrative) return null

  const { steps, current } = narrative

  if (steps[current]) {
    const step = steps[current]

    return (
      <div className='narrative-info'>
        {renderClose()}
        <h3>{narrative.label}</h3>
        <p>{narrative.description}</p>
        <h6>
          <i className='material-icons left'>location_on</i>
          {current + 1}/{steps.length}. {step.location}
        </h6>
        {_renderActions(current, steps)}
      </div>
    )
  } else {
    return null
  }
}

function mapStateToProps(state) {
  return {
    narrative: selectActiveNarrative(state)
  }
}
export default connect(mapStateToProps)(NarrativeCard)