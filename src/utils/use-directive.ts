import { App } from 'vue'
import { remove } from "lodash-es";

export default function useDirective(app: App) {
    app.directive('prevent-click', {
        mounted: (el, binding) => {
            el.addEventListener('click', () => {
                switch (el.tagName) {
                    case 'BUTTON':
                        let btnClassName = 'van-button--disabled';
                        if (!el.disabled) {
                            el.disabled = true;
                            el.className = el.className + ' ' + btnClassName
                            setTimeout(() => {
                                el.className = remove(el.className.split(' '), (cl) => cl !== btnClassName).join(' ')
                                el.disabled = false
                            }, binding.value || 3000)
                        }
                        break;
                    case 'DIV':
                        if (el.dataset.disabled !== 'true') {
                            el.dataset.disabled = 'true';
                            setTimeout(() => {
                                delete el.dataset.disabled
                            }, binding.value || 3000)
                        }
                        break;
                }
            })
        }
    })
    return app
}
