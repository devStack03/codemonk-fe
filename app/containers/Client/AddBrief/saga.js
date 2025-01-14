import React from 'react';
import { call, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';
import { toast } from 'react-toastify';
import { VALIDATION } from 'utils/constants';
import { repoLoadingError, reset } from 'containers/App/actions';
import ToastifyMessage from 'components/ToastifyMessage';
import { API_URL, JOB_POST, VERSION2 } from 'containers/App/constants';
import request from 'utils/request';
import { SAVE_BRIEF_STEP3 } from './constants';

export function* saveBriefStep3(data) {
  const { payload, data: body, onSuccess } = data;

  const method = payload === 'add' ? 'POST' : 'PUT';
  const apiCallData = {
    method,
    body,
  };

  const requestURL = `${API_URL}${VERSION2}${JOB_POST}`;

  try {
    const log = yield call(request, requestURL, apiCallData);
    if (get(log, 'status')) {
      yield put(reset());
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } else {
      yield put(reset());
      toast.error(<ToastifyMessage message={get(log, 'message')} type="error" />, { className: 'Toast-error' });
      yield put(repoLoadingError(get(log, 'message')));
    }
  } catch (err) {
    yield put(reset());
    toast.error(<ToastifyMessage message={VALIDATION.wentWrong} type="error" />, { className: 'Toast-error' });
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* AddBriefSaga() {
  yield takeLatest(SAVE_BRIEF_STEP3, saveBriefStep3);
}
