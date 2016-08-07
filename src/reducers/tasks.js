import Immutable from 'immutable'
import _ from 'lodash'

export function tasks(state = [], action) {

    switch (action.type) {
        case 'CREATE_TASK':
            return function () {
                const index = _.findLastIndex(state) + 1;
                return Immutable.fromJS(state).set(index, _.omit(action, 'type')).toJS();
            }();
        case 'UPDATE_TASK':
            return function () {
                const task = _.assign(state[action.index], _.omit(action, 'type', 'index'));
                return Immutable.fromJS(state).set(action.index, task).toJS();
            }();
        case 'DELETE_TASK':
            return Immutable.fromJS(state).delete(action.index).toJS();
        default:
            return state;
    }

}