import { put, call, takeEvery } from 'redux-saga/effects';
import { setPosts } from '../slices/postsSlice';

function* getPostsWorker() {
    const res = yield call(()=>fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=12"));
    const formatData = yield res.json(); 
    yield put(setPosts(payload));
}

function* getPostsWatcher() {
    yield takeEvery('post/setPosts',getPostsWorker)
}

export default getPostsWatcher;