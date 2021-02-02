import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    model() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res()
            }, 1000)
        })
    }
}
