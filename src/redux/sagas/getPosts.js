import { put, call, takeEvery } from 'redux-saga/effects';
import { setPosts } from '../slices/postsSlice';

const fooFetch =() => {
    
}

export function* getPostsWorker() {
    const data = yield fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=12").then(res=>res.json()); 
    yield put(setPosts(data));
}

function* getPostsWatcher() {
    yield takeEvery('posts/setPosts',getPostsWorker)
}

export default getPostsWatcher;