export default class CancelablePromise {
  constructor(promise) {
    this._canceled = false;
    this.promise = new Promise(promise).then((val) => {
      if (this._canceled) throw new PromiseCanceledError();
      return val;
    });
    this.cancel = this._cancel.bind(this);
  }

  _cancel() {
    this._canceled = true;
    return this.promise;
  }

  then(f) {
    return this.promise.then(f);
  }

  catch(f) {
    return this.promise.catch(f);
  }

  finally(f) {
    return this.promise.finally(f);
  }
}

export class PromiseCanceledError extends Error {}
