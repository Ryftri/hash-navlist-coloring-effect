declare module 'havigates' {
    import HashCahngeEffectInitiator from './hash-change-effect.js'

class Havigates {
    constructor ({ listItem, backgorundChange, colorChange }) {
        this._listItem = document.querySelectorAll(listItem)
        this._backgorundChange = backgorundChange
        this._colorChange = colorChange

        this._initialAppShell()
    }

    _initialAppShell () {
        HashCahngeEffectInitiator.init({
            allLink: this._listItem,
            background: this._backgorundChange,
            color: this._colorChange
        })
    }
}

export default Havigates
};

