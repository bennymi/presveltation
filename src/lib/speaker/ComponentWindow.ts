// https://svelte.dev/repl/6762fb104bfd411caa9c792865f53d67?version=3.12.1

export class ComponentWindow {
    constructor({ windowName = '', windowFeatures = 'width=600,height=400,resizable,scrollbars=yes,status=1', replace = false, } = {}) {
        this._windowOptions = ['about:blank', windowName, windowFeatures, replace];
    }

    get window() {
        if (!this.isOpened) {
            this._window = window.open(...this._windowOptions);
            // this.appendCss();
            this.appendContainer();
        }
        return this._window;
    }

    appendCss() {
        const { window: _window } = this;
        const parentStyleElements = Array.from(window.document.querySelectorAll('link[rel="stylesheet"][href^="client/"], style'));
        
        for (let i = 0; i < parentStyleElements.length; i++) {
            const parentStyleElement = parentStyleElements[i];
            let styleElement;

            switch (parentStyleElement.tagName) {
                case 'LINK':
                    styleElement = _window.document.createElement('link');
                    styleElement.rel = 'stylesheet';
                    styleElement.href = parentStyleElement.href;
                    break;
                case 'STYLE':
                    styleElement = _window.document.createElement('style');
                    styleElement.id = parentStyleElement.id;
                    styleElement.innerHTML = parentStyleElement.innerHTML;
                    break;
                default:
                    throw new Error('Unexpected style element: ' + styleElement.tagName);
            }

            _window.document.head.appendChild(styleElement);
        }
    }

    appendContainer() {
        const { window } = this;
        // window.container = window.document.createElement('div');
        window.container = document.createElement('div');
        window.document.body.appendChild(window.container);
    }

    attachComponent(componentClass, options) {
        let { _component } = this;
        if (_component) {
            _component.$destroy();
            this._component = _component = null;
        }
        if (!componentClass) {
            return;
        }
        const { window } = this;
        
        _component = new componentClass(Object.assign(Object.assign({}, options), { target: window.container }));
        this._component = _component;

        window.addEventListener('beforeunload', () => {
            this.attachComponent();
        });

        console.log(window.container);

        return _component;
    }

    // endregion
    get isOpened() {
        return this._window && !this._window.closed;
    }

    focus() {
        if (this.isOpened) {
            this._window.focus();
        }
    }
    
    destroy() {
        this.attachComponent();
        if (this.isOpened) {
            this._window.close();
            this._window = null;
        }
    }
}