import Route from '@ember/routing/route';

export default class UsersIndexRoute extends Route {

    model() {
        console.log('users index....');
        return [
            {id: 1, fn: '111'}, {id: 2, fn: '222'}, {id: 3, fn: '333'}
        ]
    }
}
