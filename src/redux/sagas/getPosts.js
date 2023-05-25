import { put, call, takeEvery } from 'redux-saga/effects';
import { setPosts,requestSetPostConst } from '../slices/postsSlice';
import { requestFoo } from './../../api/requestFoo';

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* getPostsWorker(params) {
    console.log('check')
    yield call(delay,2000);
    const data = yield call(requestFoo,{page: params.payload.page, limit: params.payload.limit}); 
    yield put(setPosts(data));
}

function* getPostsWatcher() {
    yield takeEvery(requestSetPostConst,getPostsWorker)
}

export default getPostsWatcher;