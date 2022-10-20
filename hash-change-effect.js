const UrlParse = require('./url-parsing')

const HashCahngeEffectInitiator = {
  init ({ allLink, background, color }) {
    window.addEventListener('DOMContentLoaded', () => {
      allLink.forEach(link => {
        const url = UrlParse.parseActiveUrlWithCombiner()
        if (link.children[0].hash.slice(1).toLocaleLowerCase() === url) {
          this._addActiveLink(link, background, color)
        } else {
          this._removeActiveLink(link)
        }
      })
    })

    window.addEventListener('hashchange', () => {
      allLink.forEach(link => {
        const url = UrlParse.parseActiveUrlWithCombiner()
        if (link.children[0].hash.slice(1).toLocaleLowerCase() === url) {
          this._addActiveLink(link, background, color)
        } else {
          this._removeActiveLink(link)
        }
      })
    })
  },

  _addActiveLink (link, background, color) {
    link.style.backgroundColor = background
    link.children[0].style.color = color
  },

  _removeActiveLink (link) {
    link.style.backgroundColor = ''
    link.children[0].style.color = ''
  }
}

module.exports = HashCahngeEffectInitiator
