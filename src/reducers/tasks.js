import Immutable from 'immutable'
import _ from 'lodash'

export function tasks(state = [], action) {

    switch (action.type) {
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