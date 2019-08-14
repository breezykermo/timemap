import React from 'react'
import Content from './Content'
import Controls from './Controls'
import { selectTypeFromPathWithPoster } from '../../common/utilities'

class SourceOverlay extends React.Component {
  constructor () {
    super()
    this.state = { idx: 0 }
    this.onShiftGallery = this.onShiftGallery.bind(this)
  }

  getTypeCounts (media) {
    return media.reduce(
      (acc, vl) => {
        acc[vl.type] += 1
        return acc
      },
      { Image: 0, Video: 0, Text: 0 }
    )
  }

  onShiftGallery (shift) {
    // no more left
    if (this.state.idx === 0 && shift === -1) return
    // no more right
    if (this.state.idx === this.props.source.paths.length - 1 && shift === 1) return
    this.setState({ idx: this.state.idx + shift })
  }

  render () {
    if (typeof (this.props.source) !== 'object') {
      return this.renderError()
    }
    const { url, title, paths, date, type, desc, poster } = this.props.source
    const { translations } = this.props
    const shortenedTitle = title.substring(0, 100)

    return (
      <div className={`mo-overlay ${this.props.opaque ? 'opaque' : ''}`}>
        <div className='mo-banner'>
          <div className='mo-banner-close' onClick={this.props.onCancel}>
            <i className='material-icons'>close</i>
          </div>

          <h3 className='mo-banner-content'>{shortenedTitle}</h3>

          <div className='mo-banner-trans'>
            {translations ? translations.map(trans => (
              <div className='mo-trans' onClick={() => alert("TODO:")}>{trans.code}</div>
            )) : null}
          </div>

        </div>

        <div className='mo-container' onClick={e => e.stopPropagation()}>
          <div className='mo-media-container'>
            <Content media={paths.map(p => selectTypeFromPathWithPoster(p, poster))} viewIdx={this.state.idx} />
          </div>

        </div>

        <div className='mo-footer'>
          <Controls paths={paths} viewIdx={this.state.idx} onShiftHandler={this.onShiftGallery} />

          <div className='mo-meta-container'>
            <div className='mo-box-title'>
              <div>{desc}</div>
            </div>

            {(type || date || url) ? (
              <div className='mo-box'>
                <div>
                  {type ? <h4>Evidence type</h4> : null}
                  {type ? <p><i className='material-icons left'>perm_media</i>{type}</p> : null}
                </div>
                <div>
                  {date ? <h4>Date Published</h4> : null}
                  {date ? <p><i className='material-icons left'>today</i>{date}</p> : null}
                </div>
                <div>
                  {url ? <h4>Link</h4> : null}
                  {url ? <span><i className='material-icons left'>link</i><a href={url} target='_blank'>Link to original URL</a></span> : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>

      </div>
    )
  }
}

export default SourceOverlay
