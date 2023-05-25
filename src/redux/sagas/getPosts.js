import { put, call, takeEvery } from 'redux-saga/effects';
import { setPosts,requestSetPostConst } from '../slices/postsSlice';
import { requestFoo } from './../../api/requestFoo';

export function* getPostsWorker() {
    const data = yield call(requestFoo); 
    yield put(setPosts(data));
}

function* getPostsWatcher() {
    yield takeEvery(requestSetPostConst,getPostsWorker)
}

export default getPostsWatcher;